"use client";

import { useQuizStore } from "@/store/useQuizStore";
import { Landing } from "@/components/quiz/Landing";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { ProgressBar } from "@/components/quiz/ProgressBar";
import { LeadCapture } from "@/components/quiz/LeadCapture";
import { ResultsView } from "@/components/quiz/ResultsView";
import { QUESTIONS } from "@/data/questions";
import { saveLead } from "@/services/leads";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const { currentStep, nextStep, setAnswer, resetQuiz, getResults } = useQuizStore();
  const [userName, setUserName] = useState("");

  const handleAnswer = (questionId: number, type: any) => {
    setAnswer(questionId, type);
    nextStep();
  };

  const handleLeadCapture = async (data: { name: string; email: string }) => {
    setUserName(data.name);
    const { primary } = getResults();
    await saveLead({
      ...data,
      archetype: primary,
    });
    nextStep();
  };

  const handleReset = () => {
    setUserName("");
    resetQuiz();
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <AnimatePresence mode="wait">
        {currentStep === 0 && (
          <Landing key="landing" />
        )}

        {currentStep >= 1 && currentStep <= 8 && (
          <div key="quiz" className="flex flex-col flex-1">
            <ProgressBar current={currentStep} total={8} />
            <QuestionCard
              question={QUESTIONS[currentStep - 1]}
              onAnswer={(type) => handleAnswer(QUESTIONS[currentStep - 1].id, type)}
            />
          </div>
        )}

        {currentStep === 9 && (
          <LeadCapture key="capture" onComplete={handleLeadCapture} />
        )}

        {currentStep === 10 && (
          <ResultsView
            key="results"
            {...getResults()}
            userName={userName}
            onReset={handleReset}
          />
        )}
      </AnimatePresence>
      
      {/* Brand Footer */}
      <footer className="py-8 text-center text-gray-400 text-xs uppercase tracking-widest mt-auto">
        Una creación de <span className="text-adhoc-violet font-bold">Adhoc</span>
      </footer>
    </main>
  );
}
