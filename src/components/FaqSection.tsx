import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How do I start building what I actually want?',
    answer:
      'Simply type your request in natural language into the chat prompt. You do not need to write code. Describe what the app should do, who it is for, and any special features you want (e.g. "Build an invoice generator with tax calculation and printable view").'
  },
  {
    question: 'How do I ask for changes after an app is created?',
    answer:
      'You can iterate continuously in the chat! For example, say: "Change the primary color to deep navy", "Add a search bar at the top", "Add an export to CSV button", or "Make the tasks persist in localStorage". The agent will update the code and recompile automatically.'
  },
  {
    question: 'Can the app save data across page refreshes?',
    answer:
      'Yes! We can store user data locally in browser localStorage so it never disappears on refresh, or connect persistent Cloud Firestore databases when you need multi-user collaboration and cloud syncing.'
  },
  {
    question: 'Can I add AI features with Gemini?',
    answer:
      'Yes! We can integrate Google Gemini models for features like automated text generation, smart categorization, summarization, conversational assistants, and image analysis.'
  },
  {
    question: 'What libraries and tech stack are supported?',
    answer:
      'The environment runs React 19, Tailwind CSS 4, modern TypeScript, Lucide Icons, and full-stack Express backends when custom APIs or proxies are needed. We can also integrate charts, audio synthesis (Web Audio API), physics, canvas drawing, and more.'
  },
  {
    question: 'How do I share or deploy this application?',
    answer:
      'Your app is already running on a live Cloud Run URL. You can share the preview URL directly with colleagues or test it on your mobile device.'
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-700 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Platform Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Everything you need to know about building and customizing apps with Google AI Studio.
          </p>
        </div>

        <div className="divide-y divide-slate-200/90 border-y border-slate-200/90">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left py-2 group"
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors pr-4">
                    {item.question}
                  </span>
                  <div className={`p-1 text-slate-400 group-hover:text-slate-700 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="pt-2 pb-3 text-sm text-slate-600 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom invitation card */}
        <div className="mt-12 p-8 bg-slate-900 rounded-2xl text-white text-center">
          <h3 className="text-xl font-bold mb-2">Ready to create your app?</h3>
          <p className="text-slate-300 text-sm max-w-lg mx-auto mb-6">
            Pick one of the ideas above or simply type your vision in the chat box on the right.
          </p>
          <a
            href="#ideas"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-semibold text-white transition-colors"
          >
            <span>Browse Idea Catalog &uarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
