import { IdeaPrompt } from '../types';

export const CATEGORIES = [
  { id: 'all', label: 'All Ideas' },
  { id: 'productivity', label: 'Productivity' },
  { id: 'dashboards', label: 'Dashboards & SaaS' },
  { id: 'tools', label: 'Tools & Utilities' },
  { id: 'games', label: 'Games & Play' },
  { id: 'creative', label: 'Creative & Media' },
] as const;

export const IDEA_PROMPTS: IdeaPrompt[] = [
  {
    id: 'finance-tracker',
    category: 'productivity',
    title: 'Personal Finance & Budget Tracker',
    shortDesc: 'Track income, expenses, category budgets, and recurring monthly subscriptions with visual summaries.',
    complexity: 'Full App',
    keyFeatures: ['Interactive expense log', 'Budget progress rings', 'Category breakdown charts', 'LocalStorage persistence'],
    suggestedPrompt: 'Build a comprehensive Personal Finance & Expense Tracker app with categories, monthly budget progress bars, recurring subscription management, and localStorage data persistence.'
  },
  {
    id: 'kanban-flow',
    category: 'productivity',
    title: 'Sprint Kanban & Task Planner',
    shortDesc: 'Drag-and-drop task workflow boards with priority labels, due dates, subtasks, and search filtering.',
    complexity: 'Full App',
    keyFeatures: ['Backlog, In Progress, Done columns', 'Priority & tag badges', 'Search & filter bar', 'Task details modal'],
    suggestedPrompt: 'Build an interactive Kanban Sprint Board app with customizable columns, drag-or-move tasks, priority filtering, subtask checklists, and search.'
  },
  {
    id: 'invoice-gen',
    category: 'tools',
    title: 'Client Invoice & Quote Generator',
    shortDesc: 'Professional billing tool with line-item calculations, tax/discount toggles, and instant printable preview.',
    complexity: 'Quick Build',
    keyFeatures: ['Itemized calculation table', 'Custom tax & discount rates', 'Client info manager', 'Print & PDF ready view'],
    suggestedPrompt: 'Build a clean, professional Invoice & Estimate Generator with editable line items, subtotal/tax/discount calculations, client presets, and print/export layout.'
  },
  {
    id: 'compound-calc',
    category: 'tools',
    title: 'Investment & Compound Interest Simulator',
    shortDesc: 'Model long-term wealth growth with monthly contributions, variable interest rates, and inflation adjustments.',
    complexity: 'Quick Build',
    keyFeatures: ['Interactive financial sliders', 'Year-by-year balance table', 'Principal vs Interest split', 'Milestone badges'],
    suggestedPrompt: 'Build an Investment & Compound Interest Simulator with dynamic sliders for principal, monthly contributions, and rate of return, including a year-by-year projection table.'
  },
  {
    id: 'saas-analytics',
    category: 'dashboards',
    title: 'B2B SaaS Metrics & Customer Desk',
    shortDesc: 'Executive analytics suite with MRR tracking, user churn graphs, activity logs, and customer health scoring.',
    complexity: 'Full App',
    keyFeatures: ['Revenue & churn indicators', 'Interactive date range filter', 'Recent customer activity feed', 'Status breakdown cards'],
    suggestedPrompt: 'Build a modern B2B SaaS Executive Dashboard with MRR/ARR trend charts, customer health status table, user activity feed, and date range filters.'
  },
  {
    id: 'support-inbox',
    category: 'dashboards',
    title: 'Support Ticket Hub & Knowledge Base',
    shortDesc: 'Multi-agent customer support desk with priority sorting, ticket assignment, canned responses, and search.',
    complexity: 'Full App',
    keyFeatures: ['Open/Pending/Resolved tabs', 'Canned reply shortcuts', 'Customer profile sidebar', 'Internal notes thread'],
    suggestedPrompt: 'Build a Customer Support Ticket Inbox app with split-pane ticket details, canned reply templates, customer history sidebar, and status workflow filters.'
  },
  {
    id: 'retro-synth',
    category: 'games',
    title: 'Retro 8-Bit Synth & Drum Sequencer',
    shortDesc: 'Interactive 16-step musical sequencer using Web Audio API with synth waveforms, tempo slider, and presets.',
    complexity: 'Advanced',
    keyFeatures: ['16-step grid sequencer', 'Kick, snare, hi-hat & bass notes', 'BPM control & swing', 'Play/Pause loop controller'],
    suggestedPrompt: 'Build an interactive 16-step Beat & Synth Sequencer using the Web Audio API with kick, snare, hi-hat and melody tracks, tempo slider, and audio presets.'
  },
  {
    id: 'pixel-art',
    category: 'creative',
    title: 'Pixel Art Canvas & Sprite Editor',
    shortDesc: 'Create retro sprites with color palettes, pencil, bucket fill, grid sizing, and PNG export.',
    complexity: 'Full App',
    keyFeatures: ['16x16 / 32x32 grid options', 'Custom color palette picker', 'Pencil, eraser, paint bucket', 'Instant PNG export'],
    suggestedPrompt: 'Build a Pixel Art & Sprite Editor with customizable grid sizes, pencil/fill/eraser tools, retro color palettes, undo history, and PNG download.'
  },
  {
    id: 'markdown-studio',
    category: 'creative',
    title: 'Distraction-Free Markdown Studio',
    shortDesc: 'Refined writing environment with live rendered preview, word metrics, document storage, and export.',
    complexity: 'Quick Build',
    keyFeatures: ['Split / distraction-free view', 'Reading time & word count', 'Document drawer', 'Export to HTML / Markdown'],
    suggestedPrompt: 'Build a distraction-free Markdown Editor and Notes app with split-pane live preview, document tabs, statistics counter, and export capabilities.'
  }
];
