import { Question, Archetype } from "@/types";
import { motion } from "framer-motion";

interface QuestionCardProps {
  question: Question;
  onAnswer: (type: Archetype) => void;
}

export const QuestionCard = ({ question, onAnswer }: QuestionCardProps) => {
  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto w-full px-6 min-h-[75vh] justify-center py-8">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full"
      >
        <motion.h2 
          className="text-2xl md:text-4xl font-display text-center text-adhoc-deep mb-10 md:mb-14 leading-snug"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {question.text}
        </motion.h2>
        
        <div className="flex flex-col gap-3 w-full">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + index * 0.05 }}
              whileHover={{ scale: 1.01, x: 4 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onAnswer(option.type)}
              className="w-full p-4 md:p-5 text-left bg-white rounded-2xl border border-gray-100 hover:border-adhoc-violet hover:bg-adhoc-violet/5 transition-all duration-200 text-sm md:text-base shadow-sm hover:shadow-md group relative"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-adhoc-deep leading-relaxed flex-1">{option.text}</span>
                <span className="text-adhoc-violet opacity-0 group-hover:opacity-100 transition-opacity text-lg">
                  →
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
