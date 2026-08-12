import React, { useState, useRef } from 'react';
import { UploadCloud, FileText, X, CheckCircle, FileSpreadsheet, Image as ImageIcon } from 'lucide-react';
import type { RfqAttachment } from '../../types';

interface FileUploadWidgetProps {
  onFilesSelected: (attachments: RfqAttachment[]) => void;
  maxFiles?: number;
}

export const FileUploadWidget: React.FC<FileUploadWidgetProps> = ({
  onFilesSelected,
  maxFiles = 3
}) => {
  const [files, setFiles] = useState<RfqAttachment[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selected = Array.from(e.target.files);

    const newAttachments: RfqAttachment[] = selected.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type || getExtensionType(file.name)
    }));

    const updated = [...files, ...newAttachments].slice(0, maxFiles);
    setFiles(updated);
    onFilesSelected(updated);
  };

  const getExtensionType = (filename: string) => {
    const ext = filename.split('.').pop()?.toLowerCase();
    if (ext === 'pdf') return 'application/pdf';
    if (['xls', 'xlsx', 'csv'].includes(ext || '')) return 'application/vnd.ms-excel';
    if (['jpg', 'jpeg', 'png', 'webp'].includes(ext || '')) return 'image/jpeg';
    return 'application/octet-stream';
  };

  const removeFile = (index: number) => {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
    onFilesSelected(updated);
  };

  const getFileIcon = (type: string) => {
    if (type.includes('pdf')) return <FileText className="w-5 h-5 text-red-400" />;
    if (type.includes('excel') || type.includes('sheet') || type.includes('csv'))
      return <FileSpreadsheet className="w-5 h-5 text-emerald-400" />;
    if (type.includes('image')) return <ImageIcon className="w-5 h-5 text-blue-400" />;
    return <FileText className="w-5 h-5 text-amber-400" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="w-full">
      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
        Upload Specification / Purchase Requirement
      </label>

      <div
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-slate-700 hover:border-blue-500 bg-slate-900/60 hover:bg-slate-900 rounded-xl p-4 text-center cursor-pointer transition-all duration-200 group"
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf,.xls,.xlsx,.csv,.doc,.docx,.png,.jpg,.jpeg"
          onChange={handleFileChange}
          className="hidden"
        />

        <UploadCloud className="w-8 h-8 mx-auto text-slate-500 group-hover:text-blue-400 transition-colors mb-2" />
        <p className="text-xs text-slate-200 font-medium">
          Drag & drop your requirement document or <span className="text-blue-400 underline">browse file</span>
        </p>
        <div className="flex justify-center items-center gap-2 mt-2">
          <span className="text-[10px] px-2 py-0.5 bg-slate-800 text-slate-400 rounded">PDF</span>
          <span className="text-[10px] px-2 py-0.5 bg-slate-800 text-slate-400 rounded">Excel</span>
          <span className="text-[10px] px-2 py-0.5 bg-slate-800 text-slate-400 rounded">Image</span>
          <span className="text-[10px] px-2 py-0.5 bg-slate-800 text-slate-400 rounded">Document</span>
        </div>
      </div>

      {/* Selected files preview */}
      {files.length > 0 && (
        <div className="mt-3 space-y-2">
          {files.map((file, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-slate-900 border border-slate-800 p-2.5 rounded-lg text-xs"
            >
              <div className="flex items-center gap-2.5 truncate">
                {getFileIcon(file.type)}
                <span className="text-slate-200 font-medium truncate max-w-[200px]">
                  {file.name}
                </span>
                <span className="text-[10px] text-slate-500">({formatFileSize(file.size)})</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <button
                  type="button"
                  onClick={() => removeFile(idx)}
                  className="text-slate-500 hover:text-red-400 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
