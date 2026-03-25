import { LucideIcon } from 'lucide-react';

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface Intent {
  id: string;
  patterns: string[];
  responses: string[];
  priority: number;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
