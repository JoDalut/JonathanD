import { useState } from 'react';
import { Copy, Check, Search, Sparkles } from 'lucide-react';
import { CATEGORIES, IDEA_PROMPTS } from '../data/prompts';
import { IdeaPrompt } from '../types';

interface IdeaCatalogProps {
  onCopyPrompt: (promptText: string, title: string) => void;
}

export function IdeaCatalog({ onCopyPrompt }: IdeaCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPrompts = IDEA_PROMPTS.filter(p => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.keyFeatures.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  const handleCopy = (prompt: IdeaPrompt) => {
    navigator.clipboard.writeText(prompt.suggestedPrompt);
    setCopiedId(prompt.id);
    onCopyPrompt(prompt.suggestedPrompt, prompt.title);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <section id="ideas" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Prompt Inspiration Library</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Ready-to-Build App Concepts
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Choose an idea below, click <strong className="font-semibold text-slate-800">Copy Prompt</strong>, then paste it directly into the chat prompt to build it right here.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search concepts or features..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:bg-white focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Prompts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrompts.map(prompt => (
            <div
              key={prompt.id}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 p-6 flex flex-col justify-between transition-all hover:shadow-xs group"
            >
              <div>
                {/* Zero-Pill Metadata Line */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <span className="capitalize font-medium text-indigo-600">{prompt.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{prompt.complexity}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                  {prompt.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {prompt.shortDesc}
                </p>

                {/* Key features unboxed list */}
                <div className="pt-3 border-t border-slate-100 mb-6">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Key Features Included:
                  </div>
                  <ul className="space-y-1">
                    {prompt.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="text-xs text-slate-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleCopy(prompt)}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  copiedId === prompt.id
                    ? 'bg-emerald-500 text-white shadow-2xs'
                    : 'bg-slate-50 hover:bg-slate-900 hover:text-white text-slate-800 border border-slate-200 hover:border-slate-900'
                }`}
              >
                {copiedId === prompt.id ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied! Now Paste in Chat</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Prompt to Build</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {filteredPrompts.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">
            No matching application concepts found. Try clearing your search term or select another category.
          </div>
        )}
      </div>
    </section>
  );
}
