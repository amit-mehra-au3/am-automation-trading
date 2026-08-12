import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ClientUser } from '../types';

interface StoredClientAccount extends ClientUser {
  passwordHash: string;
}

interface ClientAuthContextType {
  currentUser: ClientUser | null;
  registerClient: (data: {
    fullName: string;
    companyName: string;
    email: string;
    phone: string;
    password: string;
    industry?: string;
    gstin?: string;
  }) => { success: boolean; message: string };
  loginClient: (email: string, password: string) => { success: boolean; message: string };
  logoutClient: () => void;
}

const ClientAuthContext = createContext<ClientAuthContextType | undefined>(undefined);

export const ClientAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<ClientUser | null>(() => {
    try {
      const saved = localStorage.getItem('am_current_client');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const getStoredUsers = (): StoredClientAccount[] => {
    try {
      const saved = localStorage.getItem('am_client_users');
      return saved ? JSON.parse(saved) : [
        // Seed demo B2B client account
        {
          id: 'client-demo-1',
          fullName: 'Rajesh Kumar',
          companyName: 'Apex Machinery & Automation',
          email: 'rajesh@apexmachinery.com',
          phone: '+91 98120 45678',
          industry: 'Machine Manufacturing',
          gstin: '06AAAAC1234A1Z5',
          createdAt: new Date().toLocaleDateString('en-IN'),
          passwordHash: 'client123'
        }
      ];
    } catch {
      return [];
    }
  };

  const registerClient = (data: {
    fullName: string;
    companyName: string;
    email: string;
    phone: string;
    password: string;
    industry?: string;
    gstin?: string;
  }) => {
    const cleanEmail = data.email.trim().toLowerCase();
    const existing = getStoredUsers();
    
    if (existing.some(u => u.email.toLowerCase() === cleanEmail)) {
      return { success: false, message: 'An account with this email is already registered. Please login.' };
    }

    const newUser: StoredClientAccount = {
      id: `client-${Date.now()}`,
      fullName: data.fullName.trim(),
      companyName: data.companyName.trim(),
      email: cleanEmail,
      phone: data.phone.trim(),
      industry: data.industry || 'General Industry',
      gstin: data.gstin?.trim() || '',
      createdAt: new Date().toLocaleDateString('en-IN'),
      passwordHash: data.password
    };

    const updatedUsers = [newUser, ...existing];
    localStorage.setItem('am_client_users', JSON.stringify(updatedUsers));

    // Auto Login
    const clientPublicInfo: ClientUser = {
      id: newUser.id,
      fullName: newUser.fullName,
      companyName: newUser.companyName,
      email: newUser.email,
      phone: newUser.phone,
      industry: newUser.industry,
      gstin: newUser.gstin,
      createdAt: newUser.createdAt
    };

    localStorage.setItem('am_current_client', JSON.stringify(clientPublicInfo));
    setCurrentUser(clientPublicInfo);

    return { success: true, message: 'Account registered successfully! Welcome to AM Automation Trading.' };
  };

  const loginClient = (email: string, password: string) => {
    const cleanEmail = email.trim().toLowerCase();
    const users = getStoredUsers();
    const found = users.find(u => u.email.toLowerCase() === cleanEmail);

    if (!found) {
      return { success: false, message: 'No account found with this email address. Please register.' };
    }

    if (found.passwordHash !== password) {
      return { success: false, message: 'Incorrect password. Please try again.' };
    }

    const clientPublicInfo: ClientUser = {
      id: found.id,
      fullName: found.fullName,
      companyName: found.companyName,
      email: found.email,
      phone: found.phone,
      industry: found.industry,
      gstin: found.gstin,
      createdAt: found.createdAt
    };

    localStorage.setItem('am_current_client', JSON.stringify(clientPublicInfo));
    setCurrentUser(clientPublicInfo);

    return { success: true, message: 'Login successful!' };
  };

  const logoutClient = () => {
    localStorage.removeItem('am_current_client');
    setCurrentUser(null);
  };

  return (
    <ClientAuthContext.Provider value={{ currentUser, registerClient, loginClient, logoutClient }}>
      {children}
    </ClientAuthContext.Provider>
  );
};

export const useClientAuth = () => {
  const context = useContext(ClientAuthContext);
  if (!context) {
    throw new Error('useClientAuth must be used within a ClientAuthProvider');
  }
  return context;
};
