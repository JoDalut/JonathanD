import { Sparkles, Terminal, Share2 } from 'lucide-react';

interface NavbarProps {
  onQuickCopy: () => void;
  onShareLink: () => void;
}

export function Navbar({ onQuickCopy, onShareLink }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white shadow-sm group-hover:bg-indigo-600 transition-colors">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Studio Guide
          </span>
        </a>

        {/* Zone 2: 4-5 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#how-it-works" className="hover:text-slate-900 transition-colors">How It Works</a>
          <a href="#playground" className="hover:text-slate-900 transition-colors">Live Demos</a>
          <a href="#ideas" className="hover:text-slate-900 transition-colors">Idea Catalog</a>
          <a href="#constructor" className="hover:text-slate-900 transition-colors">Prompt Builder</a>
          <a href="#faq" className="hover:text-slate-900 transition-colors">Capabilities</a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onShareLink}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors whitespace-nowrap shadow-2xs"
            title="Copy live public share link"
          >
            <Share2 className="w-3.5 h-3.5 text-slate-600" />
            <span>Share App</span>
          </button>
          <button
            onClick={onQuickCopy}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shadow-2xs"
            title="Copy a sample prompt to paste in the chat"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Sample Prompt</span>
          </button>
        </div>
      </div>
    </header>
  );
}
