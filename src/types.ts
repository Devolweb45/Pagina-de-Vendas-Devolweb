export interface DiagnosticFormData {
  step1_challenge: string;
  step1_other: string;
  step2_goal: string;
  step2_other: string;
  step3_budget: string;
  name: string;
  whatsapp: string;
  company: string;
  currentSite: string;
}

export interface Project {
  id: string;
  client: string;
  niche: string;
  category: 'Site Institucional' | 'Landing Page' | 'Presença Local' | 'Portal B2B' | 'Loja Virtual';
  outcome: string;
  metrics?: string;
  description: string;
  image: string;
  tags: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
