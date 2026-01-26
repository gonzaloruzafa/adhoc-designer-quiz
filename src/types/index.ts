export type Archetype = 'estructurada' | 'pro' | 'hype' | 'principiante' | 'artista';

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Option {
  text: string;
  type: Archetype;
}

export interface QuizState {
  currentStep: number;
  answers: Record<number, Archetype>;
  setAnswer: (questionId: number, type: Archetype) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetQuiz: () => void;
  getResults: () => { primary: Archetype; secondary?: Archetype; isCombo: boolean };
}

export interface ArchetypeData {
  id: Archetype;
  name: string;
  character: string;
  tagline: string;
  description: string;
  superpower: string;
  risk: string;
  upgrade: string;
  tip: string;
  vibes: string[];
  image: string;
}
