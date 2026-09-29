import { ArrowRight, Code2, Play, RefreshCw, MessageSquareCode } from 'lucide-react';

interface HeroProps {
  onExploreIdeas: () => void;
  onOpenConstructor: () => void;
}

export function Hero({ onExploreIdeas, onOpenConstructor }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-18 md:pb-24 border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100/80 text-xs font-medium text-indigo-700 mb-6">
          <MessageSquareCode className="w-3.5 h-3.5" />
          <span>Interactive Onboarding & Quickstart</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight text-balance leading-tight mb-6">
          Describe any web app.<br />
          <span className="text-indigo-600">I will build it live for you.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 text-balance">
          You are inside <strong className="font-semibold text-slate-800">Google AI Studio</strong>. Type your request in the chat panel on the right (or below), and I will generate, style, and compile a complete working application directly in this window.
        </p>

        {/* Primary CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={onExploreIdeas}
            className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-sm hover:shadow"
          >
            <span>Explore App Ideas to Build</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenConstructor}
            className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-2xs"
          >
            <span>Custom Prompt Builder</span>
          </button>
        </div>

        {/* 3-Step Process Grid */}
        <div id="how-it-works" className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4 font-bold text-sm">
              01
            </div>
            <h2 className="text-base font-bold text-slate-900 mb-2">
              Type your idea in chat
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Use plain English. Say things like <em>"Build a budget planner with expense categories"</em> or <em>"Create an 8-bit sound sequencer"</em>.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4 font-bold text-sm">
              <Code2 className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-slate-900 mb-2">
              Code compiles automatically
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              The AI generates React, Tailwind CSS, and TypeScript, tests the build, and spins up the live preview right here in the iframe.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 mb-4 font-bold text-sm">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-slate-900 mb-2">
              Iterate & refine anytime
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Test it, click around, and ask for changes: <em>"Change the theme to dark mode"</em>, <em>"Add export to CSV"</em>, or <em>"Add search filtering"</em>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
