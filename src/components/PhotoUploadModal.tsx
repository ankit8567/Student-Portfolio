import React, { useState } from 'react';
import { X, Upload, Image as ImageIcon, RotateCcw, Check, Sparkles, UserCheck } from 'lucide-react';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string | null;
  onUpdatePhoto: (photoUrl: string | null) => void;
}

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  onUpdatePhoto,
}) => {
  const [urlInput, setUrlInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setErrorMsg('Please select a valid image file (PNG, JPG, WebP).');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        onUpdatePhoto(result);
        setErrorMsg('');
        onClose();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;
    onUpdatePhoto(urlInput.trim());
    setUrlInput('');
    onClose();
  };

  const handleSelectDefaultSvg = () => {
    onUpdatePhoto('/profile.svg');
    onClose();
  };

  const handleReset = () => {
    onUpdatePhoto(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="fixed inset-0 bg-neutral-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col z-10">
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-[#F7F7F5]">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-neutral-800" />
            <span className="text-xs uppercase tracking-wider font-semibold text-neutral-800">
              Profile Photo Manager
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-500 hover:text-neutral-900 rounded-lg hover:bg-neutral-200/60"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Current photo preview badge */}
          {currentPhoto && (
            <div className="p-3 bg-[#FAF9F5] border border-neutral-200/80 rounded-2xl flex items-center gap-3">
              <div className="w-12 h-14 rounded-xl bg-neutral-900 overflow-hidden border border-neutral-300 shrink-0">
                <img
                  src={currentPhoto}
                  alt="Current Profile Preview"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-xs space-y-0.5">
                <span className="font-semibold text-neutral-900 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Profile Photo Active</span>
                </span>
                <p className="text-[11px] text-neutral-500">
                  Rendered across hero, about section, and mobile views.
                </p>
              </div>
            </div>
          )}

          {/* Upload from file */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-neutral-800 block">
              1. Upload your photo file (IMG_20261003_231421.jpg)
            </label>
            <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-neutral-300 rounded-2xl cursor-pointer hover:border-neutral-900 bg-[#FAF9F5] hover:bg-neutral-100 transition-colors">
              <div className="flex flex-col items-center justify-center pt-2 pb-2">
                <Upload className="w-6 h-6 text-neutral-600 mb-1" />
                <p className="text-xs text-neutral-800 font-semibold">Click to select photo from device</p>
                <p className="text-[10px] text-neutral-400">JPG, PNG, or WebP · Saved to browser & Vercel ready</p>
              </div>
              <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
            </label>
            {errorMsg && <p className="text-xs text-rose-600">{errorMsg}</p>}
          </div>

          {/* Quick presets */}
          <div className="space-y-2 pt-1">
            <label className="text-xs font-semibold text-neutral-800 block">
              2. Or choose studio vector portrait
            </label>
            <button
              type="button"
              onClick={handleSelectDefaultSvg}
              className="w-full flex items-center justify-between p-3 rounded-xl border border-neutral-200 hover:border-neutral-400 bg-white text-xs font-medium text-neutral-800 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Studio Suit Portrait (/profile.svg)</span>
              </div>
              <span className="text-[10px] text-neutral-400 font-mono">Instant Crisp Vector</span>
            </button>
          </div>

          <div className="relative flex py-1 items-center">
            <div className="grow border-t border-neutral-200"></div>
            <span className="shrink mx-3 text-neutral-400 text-xs uppercase font-medium">Or</span>
            <div className="grow border-t border-neutral-200"></div>
          </div>

          {/* Paste URL */}
          <form onSubmit={handleUrlSubmit} className="space-y-2">
            <label className="text-xs font-semibold text-neutral-800 block">
              3. Paste image URL
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                placeholder="https://example.com/photo.jpg"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                className="flex-1 px-3 py-2 text-xs border border-neutral-300 rounded-xl focus:outline-neutral-900 bg-white"
              />
              <button
                type="submit"
                className="px-3 py-2 text-xs font-medium text-white bg-neutral-900 rounded-xl hover:bg-neutral-800 shrink-0 cursor-pointer"
              >
                Apply
              </button>
            </div>
          </form>

          {/* Reset button */}
          {currentPhoto && (
            <div className="pt-2 border-t border-neutral-100">
              <button
                type="button"
                onClick={handleReset}
                className="w-full flex items-center justify-center gap-1.5 py-2 text-xs text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-xl border border-neutral-200 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Monogram</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
