import { create } from 'zustand';
import { QuizState, Archetype } from '@/types';

export const useQuizStore = create<QuizState>((set, get) => ({
  currentStep: 0, // 0 is landing, 1-8 are questions, 9 is capture, 10 is results
  answers: {},
  
  setAnswer: (questionId, type) => {
    set((state) => ({
      answers: { ...state.answers, [questionId]: type },
    }));
  },
  
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: Math.max(0, state.currentStep - 1) })),
  resetQuiz: () => set({ currentStep: 0, answers: {} }),
  
  getResults: () => {
    const { answers } = get();
    const scores: Record<Archetype, number> = {
      estructurada: 0,
      pro: 0,
      hype: 0,
      principiante: 0,
      artista: 0,
    };

    Object.values(answers).forEach((type) => {
      scores[type] += 2;
    });

    // Simple sorting to find top types
    const sorted = (Object.entries(scores) as [Archetype, number][]).sort((a, b) => b[1] - a[1]);
    const primary = sorted[0][0];
    
    // Check for a tie or very close second (within 2 points) for combo flavor
    const secondary = sorted[1][1] === sorted[0][1] ? sorted[1][0] : undefined;
    
    return {
      primary,
      secondary,
      isCombo: !!secondary,
    };
  },
}));
