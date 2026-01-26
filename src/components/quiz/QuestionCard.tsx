import { Question, Archetype } from "@/types";
import { motion, AnimatePresence } from "framer-motion";

interface QuestionCardProps {
  question: Question;
  onAnswer: (type: Archetype) => void;
}

export const QuestionCard = ({ question, onAnswer }: QuestionCardProps) => {
  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto w-full px-6 min-h-[70vh] justify-center">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <h2 className="text-3xl md:text-4xl font-display text-center text-adhoc-deep mb-12 leading-tight">
          {question.text}
        </h2>
        
        <div className="grid grid-cols-1 gap-4 w-full">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              whileTap={{ scale: 0.98 }}
              onClick={() => onAnswer(option.type)}
              className="w-full p-5 text-left border-2 border-transparent bg-white rounded-2xl hover:border-adhoc-violet hover:bg-adhoc-violet/5 transition-all text-lg shadow-sm group relative overflow-hidden"
            >
              <span className="relative z-10">{option.text}</span>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
