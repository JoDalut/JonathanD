/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Playground } from './components/Playground';
import { IdeaCatalog } from './components/IdeaCatalog';
import { PromptConstructor } from './components/PromptConstructor';
import { FaqSection } from './components/FaqSection';
import { Toast } from './components/Toast';
import { ShareModal } from './components/ShareModal';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleQuickCopySample = () => {
    const sample = 'Build a modern personal budget and subscription tracker with expense categories, monthly spending limits, and localStorage persistence.';
    navigator.clipboard.writeText(sample);
    showToast('Copied budget tracker prompt! Paste it in the chat to build it.');
  };

  const handleCopyPrompt = (_text: string, title: string) => {
    showToast(`Copied prompt for "${title}"! Paste into chat to build.`);
  };

  const scrollToIdeas = () => {
    document.getElementById('ideas')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToConstructor = () => {
    document.getElementById('constructor')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar
        onQuickCopy={handleQuickCopySample}
        onShareLink={() => setIsShareModalOpen(true)}
      />

      <main className="flex-1">
        <Hero
          onExploreIdeas={scrollToIdeas}
          onOpenConstructor={scrollToConstructor}
        />
        <Playground onCopyNotification={showToast} />
        <IdeaCatalog onCopyPrompt={handleCopyPrompt} />
        <PromptConstructor onCopyNotification={showToast} />
        <FaqSection />
      </main>

      <footer className="border-t border-slate-200/80 bg-white py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">Google AI Studio</span>
            <span aria-hidden="true">·</span>
            <span>Real-time Code & App Engine</span>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => setIsShareModalOpen(true)} className="hover:text-slate-900 transition-colors">
              Share App Link
            </button>
            <a href="#how-it-works" className="hover:text-slate-900 transition-colors">How It Works</a>
            <a href="#playground" className="hover:text-slate-900 transition-colors">Interactive Demos</a>
            <a href="#ideas" className="hover:text-slate-900 transition-colors">Idea Catalog</a>
            <a href="#faq" className="hover:text-slate-900 transition-colors">Capabilities</a>
          </div>

          <div>
            <span>Prompt anything to replace this guide with your app</span>
          </div>
        </div>
      </footer>

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        onNotify={showToast}
      />
      <Toast message={toastMessage} />
    </div>
  );
}
