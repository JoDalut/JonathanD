import { useState } from 'react';
import { Sliders, Copy, Check, Sparkles } from 'lucide-react';

interface PromptConstructorProps {
  onCopyNotification: (msg: string) => void;
}

const APP_TYPES = [
  'Productivity & Organizer',
  'Executive Analytics Dashboard',
  'Financial / Mathematical Tool',
  'Interactive Game or Puzzle',
  'Document & Content Studio',
  'E-Commerce & Store Showcase'
];

const STYLES = [
  'Modern Minimalist Slate',
  'Editorial Serif & Warm Canvas',
  'Vibrant Modern Indigo',
  'Clean Monospaced Terminal'
];

const AVAILABLE_FEATURES = [
  'Browser LocalStorage Persistence (saves data across reloads)',
  'Real-time Search & Multi-criteria Filtering',
  'Data Visualization (Progress bars, Charts, Breakdowns)',
  'Print & Export (PDF / CSV / JSON)',
  'Keyboard Shortcuts & Fast Hotkeys',
  'Tabbed Views & Multi-screen Navigation'
];

export function PromptConstructor({ onCopyNotification }: PromptConstructorProps) {
  const [selectedType, setSelectedType] = useState<string>(APP_TYPES[0]);
  const [customTopic, setCustomTopic] = useState<string>('Personal daily habit & goal tracker');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    AVAILABLE_FEATURES[0],
    AVAILABLE_FEATURES[1],
    AVAILABLE_FEATURES[2],
  ]);
  const [selectedStyle, setSelectedStyle] = useState<string>(STYLES[0]);
  const [copied, setCopied] = useState<boolean>(false);

  const toggleFeature = (feat: string) => {
    setSelectedFeatures(prev =>
      prev.includes(feat) ? prev.filter(f => f !== feat) : [...prev, feat]
    );
  };

  // Generated prompt output
  const generatedPrompt = `Build a complete, production-grade ${selectedType} for "${customTopic}".

Visual Aesthetic: ${selectedStyle} with clean typographic hierarchy and intuitive layout.

Core Features:
${selectedFeatures.map(f => `- ${f}`).join('\n')}

Please make all interactive buttons, forms, and filters fully functional with responsive desktop and mobile support.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    onCopyNotification('Prompt copied! Now paste it into the chat to build your app.');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="constructor" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700 mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Prompt Builder</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Construct your custom app prompt
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Configure the exact type of software you need. We will compose a clear, structured prompt for you to send in the chat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            {/* 1. App Type */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                1. What kind of app do you want?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {APP_TYPES.map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`px-3 py-2 text-xs font-medium rounded-xl border text-left transition-all truncate ${
                      selectedType === type
                        ? 'border-indigo-600 bg-indigo-50/60 text-indigo-900 font-semibold'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Specific Subject */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                2. What is the specific subject or topic?
              </label>
              <input
                type="text"
                value={customTopic}
                onChange={e => setCustomTopic(e.target.value)}
                placeholder="e.g. Freelance client invoicing, coffee roasting log, chess tactics..."
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-indigo-500 focus:bg-white transition-colors"
              />
            </div>

            {/* 3. Included Features */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                3. Which features should be included?
              </label>
              <div className="space-y-2">
                {AVAILABLE_FEATURES.map(feat => {
                  const isChecked = selectedFeatures.includes(feat);
                  return (
                    <button
                      key={feat}
                      type="button"
                      onClick={() => toggleFeature(feat)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-xs text-left transition-all ${
                        isChecked
                          ? 'border-indigo-600/70 bg-indigo-50/40 text-slate-900 font-medium'
                          : 'border-slate-200 hover:border-slate-300 text-slate-600 bg-white'
                      }`}
                    >
                      <span>{feat}</span>
                      <div
                        className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ml-2 ${
                          isChecked ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Visual Style */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                4. Visual design vibe
              </label>
              <div className="grid grid-cols-2 gap-2">
                {STYLES.map(style => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => setSelectedStyle(style)}
                    className={`px-3 py-2 text-xs font-medium rounded-xl border text-left transition-all truncate ${
                      selectedStyle === style
                        ? 'border-indigo-600 bg-indigo-50/60 text-indigo-900 font-semibold'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Prompt Output Column */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg border border-slate-800">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ready-to-Use Prompt</span>
                </div>
                <span className="text-[11px] text-slate-400">Paste in chat</span>
              </div>

              <div className="font-mono text-xs leading-relaxed text-slate-300 whitespace-pre-wrap bg-slate-950/60 p-4 rounded-xl border border-slate-800 max-h-96 overflow-y-auto">
                {generatedPrompt}
              </div>

              <button
                onClick={handleCopy}
                className={`w-full mt-5 py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  copied
                    ? 'bg-emerald-500 text-white'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Prompt Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Prompt to Build This</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-indigo-50/60 border border-indigo-100 rounded-xl p-4 text-xs text-indigo-900">
              <span className="font-semibold block mb-1">What happens after copying?</span>
              Click the prompt input box in the chat on your right or bottom, press <kbd className="px-1.5 py-0.5 bg-white border border-indigo-200 rounded font-mono text-[10px]">Ctrl+V</kbd> or <kbd className="px-1.5 py-0.5 bg-white border border-indigo-200 rounded font-mono text-[10px]">Cmd+V</kbd>, and hit Enter. The app will replace this guide and run live!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
