import React from 'react';
import { ArrowLeft, Home, Cpu } from 'lucide-react';
import { SeoHead } from '../components/common/SeoHead';

interface Props {
  setActiveTab: (tab: string) => void;
}

export const NotFoundPage: React.FC<Props> = ({ setActiveTab }) => {
  return (
    <>
      <SeoHead title="404 - Page Not Found" description="The requested industrial automation page could not be found." />
      <div className="bg-slate-950 text-slate-100 min-h-[70vh] flex items-center justify-center p-6">
        <div className="bg-slate-900 border border-slate-800 p-10 rounded-2xl max-w-md w-full text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 bg-blue-600/10 text-blue-400 border border-blue-500/30 rounded-2xl flex items-center justify-center mx-auto">
            <Cpu className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <span className="text-4xl font-extrabold text-blue-400 font-mono">404</span>
            <h1 className="text-xl font-bold text-white">Page Not Found</h1>
            <p className="text-xs text-slate-400">
              The automation page or product URL you requested does not exist or has been relocated.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('home')}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>
        </div>
      </div>
    </>
  );
};
