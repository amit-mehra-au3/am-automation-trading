import React from 'react';
import type { LeadStatus } from '../../types';

interface Props {
  status: LeadStatus;
}

export const LeadStatusBadge: React.FC<Props> = ({ status }) => {
  const getBadgeStyle = (s: LeadStatus) => {
    switch (s) {
      case 'New':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Contacted':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'Quoted':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      case 'Negotiation':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'Won':
        return 'bg-teal-500/10 text-teal-300 border-teal-500/40';
      case 'Lost':
        return 'bg-slate-500/10 text-slate-400 border-slate-500/30';
      default:
        return 'bg-slate-500/10 text-slate-300 border-slate-500/30';
    }
  };

  return (
    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${getBadgeStyle(status)} inline-flex items-center gap-1.5`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
};
