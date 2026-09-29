export interface IdeaPrompt {
  id: string;
  category: 'productivity' | 'dashboards' | 'tools' | 'games' | 'creative';
  title: string;
  shortDesc: string;
  keyFeatures: string[];
  suggestedPrompt: string;
  complexity: 'Quick Build' | 'Full App' | 'Advanced';
}

export interface InteractiveTask {
  id: string;
  text: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
  category: string;
}
