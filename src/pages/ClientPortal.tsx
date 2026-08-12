import React, { useState } from 'react';
import { useClientAuth } from '../context/ClientAuthContext';
import { useRfq } from '../context/RfqContext';
import { LeadStatusBadge } from '../components/common/LeadStatusBadge';
import { SeoHead } from '../components/common/SeoHead';
import {
  User,
  Building2,
  Mail,
  Phone,
  Lock,
  Key,
  Eye,
  EyeOff,
  FileText,
  PlusCircle,
  LogOut,
  ShieldCheck,
  CheckCircle2,
  Clock,
  TrendingUp,
  AlertCircle,
  Briefcase,
  Layers,
  ArrowRight
} from 'lucide-react';

interface ClientPortalProps {
  setActiveTab: (tab: string) => void;
}

export const ClientPortalPage: React.FC<ClientPortalProps> = ({ setActiveTab }) => {
  const { currentUser, loginClient, registerClient, logoutClient } = useClientAuth();
  const { leads, openQuickRfqModal } = useRfq();

  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  // Form Inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Register Form Inputs
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [industry, setIndustry] = useState('Machine Manufacturing');
  const [gstin, setGstin] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setIsSubmitting(true);

    setTimeout(() => {
      const res = loginClient(email, password);
      if (!res.success) {
        setErrorMsg(res.message);
      } else {
        setSuccessMsg(res.message);
      }
      setIsSubmitting(false);
    }, 400);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match. Please verify.');
      return;
    }

    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters long.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const res = registerClient({
        fullName,
        companyName,
        email,
        phone,
        password,
        industry,
        gstin
      });

      if (!res.success) {
        setErrorMsg(res.message);
      } else {
        setSuccessMsg(res.message);
      }
      setIsSubmitting(false);
    }, 400);
  };

  // Filter RFQs belonging to logged-in client
  const clientRfqs = currentUser
    ? leads.filter((l) => l.email.toLowerCase() === currentUser.email.toLowerCase())
    : [];

  const totalSubmitted = clientRfqs.length;
  const activeQuoted = clientRfqs.filter((l) => l.status === 'Quoted' || l.status === 'Negotiation').length;
  const wonOrders = clientRfqs.filter((l) => l.status === 'Won').length;

  // ------------------------------------------------------------------
  // RENDER 1: AUTHENTICATED CLIENT DASHBOARD
  // ------------------------------------------------------------------
  if (currentUser) {
    return (
      <>
        <SeoHead
          title={`Client Portal | ${currentUser.companyName}`}
          description="Customer B2B RFQ Tracking & Quotation Management Portal."
        />

        <div className="bg-slate-950 text-slate-100 min-h-screen pb-20">
          {/* Header Banner */}
          <div className="bg-slate-900 border-b border-slate-800 py-8 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>B2B Customer Account</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {currentUser.companyName}
                </h1>
                <p className="text-xs text-slate-400">
                  Account Manager: <span className="text-slate-200 font-medium">{currentUser.fullName}</span> ({currentUser.email}) | Industry: {currentUser.industry}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => openQuickRfqModal()}
                  className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-900/40 flex items-center gap-2 transition-all"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Submit New RFQ</span>
                </button>

                <button
                  onClick={logoutClient}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
            {/* KPI Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2 shadow-xl">
                <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
                  <span>Total RFQs Submitted</span>
                  <FileText className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-3xl font-extrabold text-white font-mono">{totalSubmitted}</div>
                <p className="text-xs text-slate-500">Tracked in your account history</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2 shadow-xl">
                <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
                  <span>Active Quotes Issued</span>
                  <TrendingUp className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-3xl font-extrabold text-amber-400 font-mono">{activeQuoted}</div>
                <p className="text-xs text-slate-500">Official pricing & lead times ready</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2 shadow-xl">
                <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
                  <span>Confirmed Orders</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xl font-extrabold text-emerald-400 font-mono">{wonOrders}</div>
                <p className="text-xs text-slate-500">Processing for dispatch</p>
              </div>
            </div>

            {/* My RFQs Table */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-white tracking-tight">
                    My RFQ Submissions & Quotations
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Real-time status updates and engineering feedback from AM Automation Trading sales team.
                  </p>
                </div>

                <button
                  onClick={() => openQuickRfqModal()}
                  className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1.5"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Request Another Quote</span>
                </button>
              </div>

              {clientRfqs.length === 0 ? (
                <div className="text-center py-12 space-y-4 bg-slate-950/60 rounded-xl border border-slate-800/80 p-6">
                  <div className="w-12 h-12 rounded-full bg-blue-600/10 text-blue-400 flex items-center justify-center mx-auto">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold text-white">No RFQ Submissions Found Yet</h3>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Submit your first industrial automation requirement to receive fast technical quote turnarounds from our engineering team.
                  </p>
                  <button
                    onClick={() => openQuickRfqModal()}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-lg inline-flex items-center gap-2"
                  >
                    <span>Create New RFQ</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase bg-slate-950/60">
                        <th className="py-3 px-4">RFQ Ref / Date</th>
                        <th className="py-3 px-4">Product / Model</th>
                        <th className="py-3 px-4">Qty</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4">Quoted Pricing</th>
                        <th className="py-3 px-4">Engineering Sales Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80">
                      {clientRfqs.map((rfq) => (
                        <tr key={rfq.id} className="hover:bg-slate-950/40 transition-colors">
                          <td className="py-3 px-4 whitespace-nowrap">
                            <span className="font-mono font-bold text-blue-400 block">{rfq.id}</span>
                            <span className="text-[10px] text-slate-500">{rfq.submissionDate}</span>
                          </td>
                          <td className="py-3 px-4">
                            <strong className="text-white block">{rfq.productOrModel || rfq.productCategory}</strong>
                            <span className="text-[11px] text-slate-400">{rfq.additionalRequirements}</span>
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap font-mono font-semibold text-slate-300">
                            {rfq.quantity}
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            <LeadStatusBadge status={rfq.status} />
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap font-mono font-bold text-emerald-400">
                            {rfq.quotedAmount || 'Pending Review'}
                          </td>
                          <td className="py-3 px-4 text-slate-300 text-xs">
                            {rfq.notes || 'Your RFQ is under engineering review. We will contact you shortly.'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }

  // ------------------------------------------------------------------
  // RENDER 2: UNAUTHENTICATED LOGIN / REGISTER GATEWAY
  // ------------------------------------------------------------------
  return (
    <>
      <SeoHead
        title="Client Portal | Login & Register"
        description="B2B Customer Portal for AM Automation Trading. Register or login to view RFQ quotations and track orders."
      />

      <div className="bg-slate-950 text-slate-100 min-h-screen flex items-center justify-center p-4 py-16 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6 shadow-2xl relative z-10">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-blue-600/15 border border-blue-500/30 rounded-xl text-blue-400 flex items-center justify-center mx-auto mb-3">
              <User className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-extrabold text-white tracking-tight">
              B2B Client Portal
            </h1>
            <p className="text-xs text-slate-400">
              {authMode === 'login'
                ? 'Sign in to your customer account to view your RFQ quotes & orders.'
                : 'Create a new B2B customer account to submit RFQs and track pricing.'}
            </p>
          </div>

          {/* Auth Mode Toggle Tabs */}
          <div className="grid grid-cols-2 p-1 bg-slate-950 border border-slate-800 rounded-xl text-xs font-bold">
            <button
              onClick={() => {
                setAuthMode('login');
                setErrorMsg(null);
              }}
              className={`py-2 rounded-lg transition-all ${
                authMode === 'login' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setAuthMode('register');
                setErrorMsg(null);
              }}
              className={`py-2 rounded-lg transition-all ${
                authMode === 'register' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Register Account
            </button>
          </div>

          {/* Feedback Banners */}
          {errorMsg && (
            <div className="bg-red-950/60 border border-red-500/40 p-3.5 rounded-xl text-xs text-red-300 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="bg-emerald-950/60 border border-emerald-500/40 p-3.5 rounded-xl text-xs text-emerald-300 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* FORM 1: SIGN IN */}
          {authMode === 'login' && (
            <form onSubmit={handleLoginSubmit} autoComplete="off" className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Business Email</label>
                <div className="relative flex items-center">
                  <Mail className="w-4 h-4 absolute left-3 text-slate-500" />
                  <input
                    type="email"
                    required
                    name="client_login_email_no_autofill"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your registered email"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Password</label>
                <div className="relative flex items-center">
                  <Key className="w-4 h-4 absolute left-3 text-slate-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-3.5 rounded-xl shadow-lg shadow-blue-900/40 transition-all flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>{isSubmitting ? 'Signing in...' : 'Sign In to Client Portal'}</span>
              </button>

              <div className="pt-2 text-center text-xs text-slate-400">
                Need a demo login? Email: <code className="text-white">rajesh@apexmachinery.com</code> | Pass: <code className="text-emerald-400">client123</code>
              </div>
            </form>
          )}

          {/* FORM 2: REGISTER */}
          {authMode === 'register' && (
            <form onSubmit={handleRegisterSubmit} autoComplete="off" className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Vikram Sharma"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Firm Name *</label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Apex Automation Pvt Ltd"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Business Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone / Mobile *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Industry Sector</label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Machine Manufacturing">Machine OEM</option>
                    <option value="Panel Building">Control Panel Builder</option>
                    <option value="Textile Industry">Textile & Spinning</option>
                    <option value="Food Processing">Food & Beverage</option>
                    <option value="Water Treatment">Water & Wastewater</option>
                    <option value="Automotive">Automotive & Spares</option>
                    <option value="General Industry">General Manufacturing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">GSTIN (Optional)</label>
                  <input
                    type="text"
                    value={gstin}
                    onChange={(e) => setGstin(e.target.value)}
                    placeholder="06AAAAA0000A1Z5"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Password *</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 6 chars"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Confirm Password *</label>
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter password"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-3.5 rounded-xl shadow-lg shadow-blue-900/40 transition-all flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4" />
                <span>{isSubmitting ? 'Registering Account...' : 'Register & Access Portal'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};
