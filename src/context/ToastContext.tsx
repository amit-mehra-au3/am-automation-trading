import React, { createContext, useContext, useState } from 'react';

interface Toast {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
  title?: string;
}

interface ToastContextType {
  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'info' | 'warning' | 'error', title?: string) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: 'success' | 'info' | 'warning' | 'error' = 'success', title?: string) => {
    const id = 'toast-' + Date.now() + '-' + Math.random().toString(36).substring(2, 5);
    const newToast: Toast = { id, type, message, title };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
      {children}
      {/* Toast Notification Renderer */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-md w-full pointer-events-none px-4">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto rounded-lg shadow-xl p-4 border flex items-start justify-between transition-all transform duration-300 ${
              toast.type === 'success'
                ? 'bg-slate-900 border-emerald-500 text-slate-100'
                : toast.type === 'error'
                ? 'bg-slate-900 border-red-500 text-slate-100'
                : toast.type === 'warning'
                ? 'bg-slate-900 border-amber-500 text-slate-100'
                : 'bg-slate-900 border-blue-500 text-slate-100'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                {toast.type === 'success' && <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 block animate-pulse" />}
                {toast.type === 'error' && <span className="w-2.5 h-2.5 rounded-full bg-red-500 block" />}
                {toast.type === 'warning' && <span className="w-2.5 h-2.5 rounded-full bg-amber-500 block" />}
                {toast.type === 'info' && <span className="w-2.5 h-2.5 rounded-full bg-blue-500 block" />}
              </div>
              <div>
                {toast.title && <h5 className="text-sm font-semibold text-white mb-0.5">{toast.title}</h5>}
                <p className="text-xs text-slate-300 leading-relaxed">{toast.message}</p>
              </div>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-white text-xs ml-4"
              aria-label="Close notification"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};
