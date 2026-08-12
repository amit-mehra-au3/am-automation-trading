import React, { useState, useMemo, useEffect } from 'react';
import { useRfq } from '../context/RfqContext';
import { LeadStatusBadge } from '../components/common/LeadStatusBadge';
import type { LeadStatus, RfqSubmission } from '../types';
import { SeoHead } from '../components/common/SeoHead';
import { CATEGORIES_DATA } from '../data/categories.data';
import { PRODUCTS_DATA } from '../data/products.data';
import { COMPANY_CONFIG } from '../config/company.config';
import {
  Cpu,
  Search,
  Filter,
  Download,
  Trash2,
  Edit3,
  FileText,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle2,
  Layers,
  Users,
  X,
  Lock,
  Mail,
  Key,
  Eye,
  EyeOff,
  LogOut,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export const AdminDashboardPage: React.FC = () => {
  const { leads, updateLeadStatus, deleteLead, exportLeadsCsv } = useRfq();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('am_admin_authenticated') === 'true';
  });

  // Login Form Local State
  const [loginEmail, setLoginEmail] = useState<string>(COMPANY_CONFIG.adminAuth.email);
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  const [activeSection, setActiveSection] = useState<'leads' | 'products' | 'categories'>('leads');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingLead, setEditingLead] = useState<RfqSubmission | null>(null);

  // Edit Modal Local State
  const [modalStatus, setModalStatus] = useState<LeadStatus>('New');
  const [modalNotes, setModalNotes] = useState('');
  const [modalQuotedAmount, setModalQuotedAmount] = useState('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setIsLoggingIn(true);

    setTimeout(() => {
      const cleanEmail = loginEmail.trim().toLowerCase();
      const targetEmail = COMPANY_CONFIG.adminAuth.email.toLowerCase();

      if (cleanEmail === targetEmail && loginPassword === COMPANY_CONFIG.adminAuth.defaultPassword) {
        localStorage.setItem('am_admin_authenticated', 'true');
        setIsAuthenticated(true);
        setAuthError(null);
      } else {
        setAuthError('Invalid admin email or password. Please check your credentials.');
      }
      setIsLoggingIn(false);
    }, 400);
  };

  const handleLogout = () => {
    localStorage.removeItem('am_admin_authenticated');
    setIsAuthenticated(false);
    setLoginPassword('');
    setAuthError(null);
  };

  // Filtered Leads
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      if (selectedStatusFilter !== 'all' && lead.status !== selectedStatusFilter) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesId = lead.id.toLowerCase().includes(q);
        const matchesName = lead.fullName.toLowerCase().includes(q);
        const matchesCompany = lead.companyName.toLowerCase().includes(q);
        const matchesEmail = lead.email.toLowerCase().includes(q);
        const matchesProduct = (lead.productOrModel || '').toLowerCase().includes(q);
        if (!matchesId && !matchesName && !matchesCompany && !matchesEmail && !matchesProduct) {
          return false;
        }
      }
      return true;
    });
  }, [leads, selectedStatusFilter, searchQuery]);

  // KPI Calculations
  const totalLeads = leads.length;
  const newLeads = leads.filter((l) => l.status === 'New').length;
  const quotedLeads = leads.filter((l) => l.status === 'Quoted' || l.status === 'Negotiation').length;
  const wonLeads = leads.filter((l) => l.status === 'Won').length;

  const handleOpenEditModal = (lead: RfqSubmission) => {
    setEditingLead(lead);
    setModalStatus(lead.status);
    setModalNotes(lead.notes || '');
    setModalQuotedAmount(lead.quotedAmount || '');
  };

  const handleSaveLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingLead) {
      updateLeadStatus(editingLead.id, modalStatus, modalNotes, modalQuotedAmount);
      setEditingLead(null);
    }
  };

  // -------------------------------------------------------------
  // RENDER 1: UNAUTHENTICATED LOGIN SCREEN
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <>
        <SeoHead
          title="Admin Login | AM Automation Trading"
          description="Secure Administrator Login Gateway for AM Automation Trading."
        />

        <div className="bg-slate-950 text-slate-100 min-h-screen flex items-center justify-center p-4 py-16 relative overflow-hidden">
          {/* Background Technical Grid Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6 shadow-2xl relative z-10">
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-blue-600/15 border border-blue-500/30 rounded-xl text-blue-400 flex items-center justify-center mx-auto mb-3">
                <Lock className="w-6 h-6" />
              </div>
              <h1 className="text-xl font-extrabold text-white tracking-tight">
                AM Automation Admin Portal
              </h1>
              <p className="text-xs text-slate-400">
                Sign in with your official administrator credentials to manage B2B RFQ leads and catalog products.
              </p>
            </div>

            {/* Error Banner */}
            {authError && (
              <div className="bg-red-950/60 border border-red-500/40 p-3.5 rounded-xl text-xs text-red-300 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{authError}</span>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Admin Email Address
                </label>
                <div className="relative flex items-center">
                  <Mail className="w-4 h-4 absolute left-3 text-slate-500" />
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="amautomationtrading@gmail.com"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Admin Password
                </label>
                <div className="relative flex items-center">
                  <Key className="w-4 h-4 absolute left-3 text-slate-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-10 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 text-slate-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-3.5 rounded-xl shadow-lg shadow-blue-900/40 transition-all flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>{isLoggingIn ? 'Verifying Credentials...' : 'Sign In to Dashboard'}</span>
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }

  // -------------------------------------------------------------
  // RENDER 2: AUTHENTICATED ADMIN DASHBOARD
  // -------------------------------------------------------------
  return (
    <>
      <SeoHead
        title="Admin Portal | AM Automation Trading"
        description="B2B Lead Management Portal for RFQs, Customer Enquiries, and Product Administration."
      />

      <div className="bg-slate-950 text-slate-100 min-h-screen pb-20">
        {/* Header */}
        <div className="bg-slate-900 border-b border-slate-800 py-6 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Cpu className="w-5 h-5 text-blue-400" />
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                  Authenticated Admin Portal
                </span>
              </div>
              <h1 className="text-2xl font-extrabold text-white tracking-tight">
                Admin Lead & RFQ Dashboard
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Logged in as: <strong className="text-white font-mono">{COMPANY_CONFIG.adminAuth.email}</strong></span>
              </div>

              <button
                onClick={exportLeadsCsv}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Export CSV</span>
              </button>

              <button
                onClick={handleLogout}
                className="bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white border border-red-500/30 text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors"
                title="Log Out of Admin Session"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
          {/* KPI Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2 shadow-xl">
              <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
                <span>Total RFQ Leads</span>
                <FileText className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-2xl font-extrabold text-white font-mono">{totalLeads}</div>
              <p className="text-[11px] text-slate-500">All submissions in pipeline</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2 shadow-xl">
              <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
                <span>New Enquiries</span>
                <Clock className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl font-extrabold text-emerald-400 font-mono">{newLeads}</div>
              <p className="text-[11px] text-slate-500">Awaiting sales team follow-up</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2 shadow-xl">
              <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
                <span>Active Negotiations</span>
                <TrendingUp className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl font-extrabold text-amber-400 font-mono">{quotedLeads}</div>
              <p className="text-[11px] text-slate-500">Quotes & proposals issued</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2 shadow-xl">
              <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
                <span>Orders Won</span>
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
              </div>
              <div className="text-2xl font-extrabold text-teal-300 font-mono">{wonLeads}</div>
              <p className="text-[11px] text-slate-500">Confirmed customer orders</p>
            </div>
          </div>

          {/* Dashboard Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
            <button
              onClick={() => setActiveSection('leads')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                activeSection === 'leads'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>RFQ Leads ({leads.length})</span>
            </button>

            <button
              onClick={() => setActiveSection('products')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                activeSection === 'products'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Catalog Products ({PRODUCTS_DATA.length})</span>
            </button>

            <button
              onClick={() => setActiveSection('categories')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                activeSection === 'categories'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Categories ({CATEGORIES_DATA.length})</span>
            </button>
          </div>

          {/* Section 1: RFQ Leads Pipeline */}
          {activeSection === 'leads' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl">
              {/* Filter & Search Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 absolute left-3 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search leads by company, ID, name..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Status Filter Buttons */}
                <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
                  {['all', 'New', 'Contacted', 'Quoted', 'Negotiation', 'Won', 'Lost'].map((st) => (
                    <button
                      key={st}
                      onClick={() => setSelectedStatusFilter(st)}
                      className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-all ${
                        selectedStatusFilter === st
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      {st === 'all' ? 'All Leads' : st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Leads Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase bg-slate-950/60">
                      <th className="py-3 px-4">Ref ID / Date</th>
                      <th className="py-3 px-4">Customer & Company</th>
                      <th className="py-3 px-4">Contact Info</th>
                      <th className="py-3 px-4">Product / Requirement</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Quoted Amount</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {filteredLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-slate-950/40 transition-colors">
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className="font-mono font-bold text-blue-400 block">{lead.id}</span>
                          <span className="text-[10px] text-slate-500">{lead.submissionDate}</span>
                        </td>
                        <td className="py-3 px-4">
                          <strong className="text-white block">{lead.companyName}</strong>
                          <span className="text-slate-400 text-[11px]">
                            {lead.fullName} {lead.designation ? `(${lead.designation})` : ''}
                          </span>
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap text-slate-300">
                          <div>{lead.phone}</div>
                          <div className="text-[11px] text-slate-400">{lead.email}</div>
                        </td>
                        <td className="py-3 px-4 max-w-xs">
                          <span className="text-slate-200 font-medium block truncate">
                            {lead.productOrModel || lead.productCategory}
                          </span>
                          <span className="text-[11px] text-slate-400 block">
                            Qty: {lead.quantity} | {lead.industry}
                          </span>
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <LeadStatusBadge status={lead.status} />
                        </td>
                        <td className="py-3 px-4 font-mono text-emerald-400 whitespace-nowrap">
                          {lead.quotedAmount || '—'}
                        </td>
                        <td className="py-3 px-4 text-right whitespace-nowrap space-x-2">
                          <button
                            onClick={() => handleOpenEditModal(lead)}
                            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-blue-400 rounded transition-colors"
                            title="Edit Lead Status & Notes"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => deleteLead(lead.id)}
                            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-red-400 rounded transition-colors"
                            title="Delete Lead"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Section 2: Products Catalog View */}
          {activeSection === 'products' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
              <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-3">
                Managed Products Catalog
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PRODUCTS_DATA.map((prod) => (
                  <div key={prod.id} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-blue-400">
                      <span>{prod.brand}</span>
                      <span>{prod.modelNumber}</span>
                    </div>
                    <h4 className="text-xs font-bold text-white line-clamp-1">{prod.name}</h4>
                    <p className="text-[11px] text-slate-400">{prod.category}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 3: Categories View */}
          {activeSection === 'categories' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
              <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-3">
                Managed Categories
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {CATEGORIES_DATA.map((cat) => (
                  <div key={cat.id} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                    <h4 className="text-xs font-bold text-white">{cat.name}</h4>
                    <p className="text-[11px] text-slate-400">{cat.productCount}+ Active Products</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Lead Status Edit Modal */}
        {editingLead && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl text-slate-100">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-sm font-bold text-white">
                  Update Lead {editingLead.id} ({editingLead.companyName})
                </h3>
                <button onClick={() => setEditingLead(null)} className="text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveLead} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Pipeline Status</label>
                  <select
                    value={modalStatus}
                    onChange={(e) => setModalStatus(e.target.value as LeadStatus)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Quoted">Quoted</option>
                    <option value="Negotiation">Negotiation</option>
                    <option value="Won">Won</option>
                    <option value="Lost">Lost</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Quoted Amount / Value</label>
                  <input
                    type="text"
                    value={modalQuotedAmount}
                    onChange={(e) => setModalQuotedAmount(e.target.value)}
                    placeholder="e.g. ₹ 85,000 + GST"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Engineering Sales Notes</label>
                  <textarea
                    rows={3}
                    value={modalNotes}
                    onChange={(e) => setModalNotes(e.target.value)}
                    placeholder="Add follow-up notes, discount offers, or stock lead time comments..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setEditingLead(null)}
                    className="px-4 py-2 bg-slate-800 text-slate-300 text-xs font-semibold rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg shadow-md"
                  >
                    Save Status Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
