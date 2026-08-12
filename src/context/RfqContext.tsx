import React, { createContext, useContext, useState, useEffect } from 'react';
import type { RfqSubmission, LeadStatus, Product } from '../types';
import { INITIAL_MOCK_LEADS } from '../data/mockLeads.data';
import { useToast } from './ToastContext';

interface RfqContextType {
  leads: RfqSubmission[];
  addRfqSubmission: (submission: Omit<RfqSubmission, 'id' | 'submissionDate' | 'status'>) => string;
  updateLeadStatus: (id: string, status: LeadStatus, notes?: string, quotedAmount?: string) => void;
  deleteLead: (id: string) => void;
  isQuickRfqOpen: boolean;
  openQuickRfqModal: (prefillProduct?: Partial<Product>) => void;
  closeQuickRfqModal: () => void;
  prefilledProduct: Partial<Product> | null;
  exportLeadsCsv: () => void;
}

const RfqContext = createContext<RfqContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'am_automation_leads_v1';

export const RfqProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [leads, setLeads] = useState<RfqSubmission[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse leads from local storage', e);
      }
    }
    return INITIAL_MOCK_LEADS;
  });

  const [isQuickRfqOpen, setIsQuickRfqOpen] = useState(false);
  const [prefilledProduct, setPrefilledProduct] = useState<Partial<Product> | null>(null);
  const { showToast } = useToast();

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(leads));
  }, [leads]);

  const addRfqSubmission = (formData: Omit<RfqSubmission, 'id' | 'submissionDate' | 'status'>): string => {
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(
      now.getDate()
    ).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newId = `RFQ-${now.getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const newSubmission: RfqSubmission = {
      ...formData,
      id: newId,
      submissionDate: formattedDate,
      status: 'New'
    };

    setLeads((prev) => [newSubmission, ...prev]);

    showToast(
      `Thank you! Your requirement (${newId}) has been received. Our engineering team will contact you shortly.`,
      'success',
      'RFQ Submitted Successfully'
    );

    return newId;
  };

  const updateLeadStatus = (id: string, status: LeadStatus, notes?: string, quotedAmount?: string) => {
    setLeads((prev) =>
      prev.map((lead) => {
        if (lead.id === id) {
          return {
            ...lead,
            status,
            ...(notes !== undefined ? { notes } : {}),
            ...(quotedAmount !== undefined ? { quotedAmount } : {})
          };
        }
        return lead;
      })
    );
    showToast(`Lead ${id} updated to status: ${status}`, 'info');
  };

  const deleteLead = (id: string) => {
    setLeads((prev) => prev.filter((lead) => lead.id !== id));
    showToast(`Lead ${id} removed`, 'warning');
  };

  const openQuickRfqModal = (product?: Partial<Product>) => {
    if (product) {
      setPrefilledProduct(product);
    } else {
      setPrefilledProduct(null);
    }
    setIsQuickRfqOpen(true);
  };

  const closeQuickRfqModal = () => {
    setIsQuickRfqOpen(false);
    setPrefilledProduct(null);
  };

  const exportLeadsCsv = () => {
    if (leads.length === 0) return;
    const headers = ['ID', 'Date', 'Type', 'Status', 'Name', 'Company', 'Phone', 'Email', 'Product/Req', 'Qty', 'Quoted Amount'];
    const rows = leads.map((l) => [
      l.id,
      l.submissionDate,
      l.type,
      l.status,
      `"${l.fullName.replace(/"/g, '""')}"`,
      `"${l.companyName.replace(/"/g, '""')}"`,
      l.phone,
      l.email,
      `"${(l.productOrModel || l.productCategory || '').replace(/"/g, '""')}"`,
      l.quantity,
      l.quotedAmount || ''
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `AM_Automation_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('Leads exported to CSV file', 'info');
  };

  return (
    <RfqContext.Provider
      value={{
        leads,
        addRfqSubmission,
        updateLeadStatus,
        deleteLead,
        isQuickRfqOpen,
        openQuickRfqModal,
        closeQuickRfqModal,
        prefilledProduct,
        exportLeadsCsv
      }}
    >
      {children}
    </RfqContext.Provider>
  );
};

export const useRfq = () => {
  const context = useContext(RfqContext);
  if (!context) {
    throw new Error('useRfq must be used within RfqProvider');
  }
  return context;
};
