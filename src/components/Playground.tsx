import { useState, useId } from 'react';
import { Check, Plus, Trash2, Calculator, ListTodo, FileText, Copy, TrendingUp } from 'lucide-react';
import { InteractiveTask } from '../types';

interface PlaygroundProps {
  onCopyNotification: (msg: string) => void;
}

export function Playground({ onCopyNotification }: PlaygroundProps) {
  const [activeTab, setActiveTab] = useState<'tasks' | 'calculator' | 'notes'>('tasks');
  const initialDepositId = useId();
  const monthlyDepositId = useId();
  const interestRateId = useId();
  const yearsId = useId();

  // Task state
  const [tasks, setTasks] = useState<InteractiveTask[]>([
    { id: '1', text: 'Define product requirements & layout', priority: 'high', completed: true, category: 'Planning' },
    { id: '2', text: 'Build interactive UI components in React', priority: 'high', completed: false, category: 'Engineering' },
    { id: '3', text: 'Polish typography and responsive layouts', priority: 'medium', completed: false, category: 'Design' },
    { id: '4', text: 'Ship v1.0 and collect user feedback', priority: 'low', completed: false, category: 'Launch' },
  ]);
  const [newTaskText, setNewTaskText] = useState('');
  const [taskFilter, setTaskFilter] = useState<'all' | 'active' | 'completed'>('all');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    setTasks(prev => [
      ...prev,
      {
        id: String(Date.now()),
        text: newTaskText.trim(),
        priority: 'medium',
        completed: false,
        category: 'Task',
      },
    ]);
    setNewTaskText('');
  };

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t => {
    if (taskFilter === 'active') return !t.completed;
    if (taskFilter === 'completed') return t.completed;
    return true;
  });

  const completedCount = tasks.filter(t => t.completed).length;

  // Calculator state
  const [principal, setPrincipal] = useState<number>(5000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(300);
  const [annualRate, setAnnualRate] = useState<number>(8);
  const [years, setYears] = useState<number>(10);

  // Compound interest calculation
  const months = years * 12;
  const monthlyRate = annualRate / 100 / 12;
  const futureValuePrincipal = principal * Math.pow(1 + monthlyRate, months);
  const futureValueContributions =
    monthlyRate > 0
      ? monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
      : monthlyContribution * months;
  const totalValue = Math.round(futureValuePrincipal + futureValueContributions);
  const totalPrincipalDeposited = Math.round(principal + monthlyContribution * months);
  const totalInterestEarned = Math.max(0, totalValue - totalPrincipalDeposited);

  // Notes state
  const [notesContent, setNotesContent] = useState<string>(
    `# Project Blueprint: My Custom App\n\n- Goal: Solve a real daily problem cleanly\n- Target Audience: Knowledge workers & designers\n- Key Tech: React, Tailwind CSS, TypeScript\n\n## Next Steps\n1. Type desired features in AI Studio chat\n2. Test interactive controls\n3. Iterate with style tweaks`
  );

  const wordsCount = notesContent.trim() ? notesContent.trim().split(/\s+/).length : 0;
  const charsCount = notesContent.length;

  const setTemplate = (type: 'notes' | 'spec' | 'tasks') => {
    if (type === 'notes') {
      setNotesContent(
        `# Weekly Team Sync\n\n**Date:** October 2026\n**Attendees:** Product, Engineering\n\n## Highlights\n- Delivered customer dashboard MVP\n- Improved load times by 40%\n\n## Action Items\n- [ ] Finalize API integration\n- [ ] Conduct user interviews`
      );
    } else if (type === 'spec') {
      setNotesContent(
        `# Feature Specification: Automated Export\n\n### Objective\nAllow users to export report tables directly into CSV and PDF formats with custom date ranges.\n\n### Requirements\n- Single click export button\n- Formatted currency numbers\n- Timestamped filename`
      );
    } else {
      setNotesContent(
        `# Product Brainstorm\n\n- [ ] Micro-SaaS for freelance time tracking\n- [ ] Web Audio ambient background noise maker\n- [ ] Interactive recipe meal prep calculator\n- [ ] Pixel art retro avatar creator`
      );
    }
  };

  return (
    <section id="playground" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-xs font-semibold text-slate-700 mb-3">
            <span>Hands-on Preview</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            See what you can build right now
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            These 3 live widgets show the kind of responsive, interactive tools AI Studio builds in seconds. Test them out:
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center p-1 bg-slate-200/70 rounded-xl">
            <button
              onClick={() => setActiveTab('tasks')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'tasks' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ListTodo className="w-4 h-4" />
              <span>Task & Goal Tracker</span>
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'calculator' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Interest Calculator</span>
            </button>
            <button
              onClick={() => setActiveTab('notes')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'notes' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Document Scratchpad</span>
            </button>
          </div>
        </div>

        {/* Tab Content 1: Tasks */}
        {activeTab === 'tasks' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Sprint Roadmap & Tasks</h3>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                  <span>{tasks.length} total tasks</span>
                  <span aria-hidden="true">·</span>
                  <span>{completedCount} completed</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold text-emerald-600">
                    {tasks.length ? Math.round((completedCount / tasks.length) * 100) : 0}% progress
                  </span>
                </div>
              </div>

              {/* Filter controls */}
              <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start sm:self-auto">
                <button
                  onClick={() => setTaskFilter('all')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    taskFilter === 'all' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setTaskFilter('active')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    taskFilter === 'active' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Active
                </button>
                <button
                  onClick={() => setTaskFilter('completed')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    taskFilter === 'completed' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Done
                </button>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-slate-100 h-2 rounded-full my-6 overflow-hidden">
              <div
                className="bg-indigo-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${tasks.length ? (completedCount / tasks.length) * 100 : 0}%` }}
              />
            </div>

            {/* Task list */}
            <div className="space-y-2.5 mb-6">
              {filteredTasks.length === 0 ? (
                <div className="text-center py-8 text-sm text-slate-400">
                  No tasks match this filter. Add one below!
                </div>
              ) : (
                filteredTasks.map(task => (
                  <div
                    key={task.id}
                    className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                      task.completed
                        ? 'bg-slate-50/70 border-slate-200 text-slate-400'
                        : 'bg-white border-slate-200/90 text-slate-800 hover:border-slate-300 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <button
                        onClick={() => toggleTask(task.id)}
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all shrink-0 ${
                          task.completed
                            ? 'bg-emerald-500 border-emerald-500 text-white'
                            : 'border-slate-300 hover:border-slate-400 bg-white'
                        }`}
                        aria-label={task.completed ? 'Mark task incomplete' : 'Mark task complete'}
                      >
                        {task.completed && <Check className="w-3.5 h-3.5" />}
                      </button>
                      <span className={`text-sm truncate ${task.completed ? 'line-through text-slate-400' : 'font-medium'}`}>
                        {task.text}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 ml-3">
                      <span className="text-xs text-slate-500 hidden sm:inline">
                        {task.category}
                      </span>
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="text-slate-400 hover:text-red-500 p-1 transition-colors"
                        title="Delete task"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Add task form */}
            <form onSubmit={handleAddTask} className="flex gap-2">
              <input
                type="text"
                value={newTaskText}
                onChange={e => setNewTaskText(e.target.value)}
                placeholder="Add a new task (e.g. Integrate user authentication)..."
                className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-indigo-500 focus:bg-white transition-colors"
              />
              <button
                type="submit"
                className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors whitespace-nowrap"
              >
                <Plus className="w-4 h-4" />
                <span>Add Task</span>
              </button>
            </form>
          </div>
        )}

        {/* Tab Content 2: Compound Interest Calculator */}
        {activeTab === 'calculator' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 md:p-8">
            <div className="mb-6 pb-6 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900">Compound Growth Simulator</h3>
              <p className="text-xs text-slate-500 mt-1">
                Real-time financial modeling with reactive formulas and mathematical projections.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Sliders */}
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-700 mb-1.5">
                    <label htmlFor={initialDepositId}>Initial Principal</label>
                    <span className="font-mono tabular-nums text-slate-900 font-bold">${principal.toLocaleString()}</span>
                  </div>
                  <input
                    id={initialDepositId}
                    type="range"
                    min="500"
                    max="50000"
                    step="500"
                    value={principal}
                    onChange={e => setPrincipal(Number(e.target.value))}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-700 mb-1.5">
                    <label htmlFor={monthlyDepositId}>Monthly Contribution</label>
                    <span className="font-mono tabular-nums text-slate-900 font-bold">${monthlyContribution.toLocaleString()}/mo</span>
                  </div>
                  <input
                    id={monthlyDepositId}
                    type="range"
                    min="50"
                    max="2000"
                    step="25"
                    value={monthlyContribution}
                    onChange={e => setMonthlyContribution(Number(e.target.value))}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-700 mb-1.5">
                    <label htmlFor={interestRateId}>Annual Rate of Return</label>
                    <span className="font-mono tabular-nums text-slate-900 font-bold">{annualRate}%</span>
                  </div>
                  <input
                    id={interestRateId}
                    type="range"
                    min="1"
                    max="15"
                    step="0.5"
                    value={annualRate}
                    onChange={e => setAnnualRate(Number(e.target.value))}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-700 mb-1.5">
                    <label htmlFor={yearsId}>Investment Horizon</label>
                    <span className="font-mono tabular-nums text-slate-900 font-bold">{years} years</span>
                  </div>
                  <input
                    id={yearsId}
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={years}
                    onChange={e => setYears(Number(e.target.value))}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                </div>
              </div>

              {/* Results display */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 mb-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Projected Future Value</span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tabular-nums mb-6">
                  ${totalValue.toLocaleString()}
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-200/80 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Your Total Contributions:</span>
                    <span className="font-mono tabular-nums font-semibold text-slate-800">
                      ${totalPrincipalDeposited.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Compound Interest Earned:</span>
                    <span className="font-mono tabular-nums font-semibold text-emerald-600">
                      +${totalInterestEarned.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Return Multiple:</span>
                    <span className="font-mono tabular-nums font-semibold text-slate-800">
                      {totalPrincipalDeposited > 0 ? (totalValue / totalPrincipalDeposited).toFixed(2) : 0}x
                    </span>
                  </div>
                </div>

                <button
                  onClick={() =>
                    onCopyNotification(
                      'Copied calculator prompt! Paste into the chat to build this into a full investment app.'
                    )
                  }
                  className="w-full mt-6 py-2.5 px-4 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Ask AI to build a full Investment Suite</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 3: Notes & Markdown Scratchpad */}
        {activeTab === 'notes' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Distraction-Free Notepad</h3>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                  <span className="font-mono tabular-nums">{wordsCount} words</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">{charsCount} characters</span>
                  <span aria-hidden="true">·</span>
                  <span>Auto-saved locally</span>
                </div>
              </div>

              {/* Template quick switches */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">Presets:</span>
                <button
                  onClick={() => setTemplate('notes')}
                  className="px-2.5 py-1 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md transition-colors"
                >
                  Meeting
                </button>
                <button
                  onClick={() => setTemplate('spec')}
                  className="px-2.5 py-1 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md transition-colors"
                >
                  Spec
                </button>
                <button
                  onClick={() => setTemplate('tasks')}
                  className="px-2.5 py-1 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md transition-colors"
                >
                  Brainstorm
                </button>
              </div>
            </div>

            {/* Note Editor */}
            <div className="mt-6">
              <textarea
                value={notesContent}
                onChange={e => setNotesContent(e.target.value)}
                rows={9}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl font-mono text-sm text-slate-800 leading-relaxed focus:bg-white focus:outline-hidden focus:border-indigo-500 transition-colors"
                placeholder="Type your notes or specifications here..."
              />
            </div>

            <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(notesContent);
                  onCopyNotification('Copied notes to clipboard!');
                }}
                className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-lg transition-colors"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Content</span>
              </button>

              <button
                onClick={() =>
                  onCopyNotification(
                    'Prompt copied! Paste it in the chat: "Build a rich Markdown note-taking app with folders, tagging, and PDF export"'
                  )
                }
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 hover:underline"
              >
                Want a full Notes App with Folders? Ask in Chat &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
