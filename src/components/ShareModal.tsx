import { useState } from 'react';
import { X, Copy, Check, Globe, Users, ExternalLink, Smartphone, Laptop } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNotify: (msg: string) => void;
}

export function ShareModal({ isOpen, onClose, onNotify }: ShareModalProps) {
  const [copiedShare, setCopiedShare] = useState(false);

  if (!isOpen) return null;

  // Prefer the current origin or public Cloud Run URL
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://ais-pre-5ukz2hmp3ab4qehdzlxqij-410424100861.asia-east1.run.app';
  // Use the shared pre-deploy domain if on dev
  const publicShareUrl = currentUrl.replace('ais-dev-', 'ais-pre-');

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedShare(true);
    onNotify('Public link copied! Anyone with this link can use the app.');
    setTimeout(() => setCopiedShare(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-7">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Anyone can run this app!</h3>
            <p className="text-xs text-slate-500">Live cloud deployment on Google Cloud Run</p>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-5">
          Yes! This web application is live. Anyone with your link can immediately run and interact with it in any browser—no account, login, or installation required.
        </p>

        {/* Public link input box */}
        <div className="mb-5">
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
            Public Share Link
          </label>
          <div className="flex items-center gap-2 p-1.5 bg-slate-50 border border-slate-200 rounded-xl">
            <input
              type="text"
              readOnly
              value={publicShareUrl}
              className="flex-1 bg-transparent px-2.5 py-1 text-xs font-mono text-slate-700 outline-hidden select-all"
            />
            <button
              onClick={() => copyUrl(publicShareUrl)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors shrink-0"
            >
              {copiedShare ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Compatibility highlights */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5">
            <Smartphone className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-slate-900">Mobile Friendly</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Works on iPhone & Android browsers</div>
            </div>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5">
            <Laptop className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-slate-900">Desktop & Tablets</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Chrome, Safari, Firefox, Edge</div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-slate-500">
            <Users className="w-3.5 h-3.5 text-slate-400" />
            <span>Instant access for friends & teammates</span>
          </div>

          <a
            href={publicShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-indigo-600 font-semibold hover:underline"
          >
            <span>Open in new tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
