import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const progress = (current / total) * 100;

  return (
    <div className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-sm font-medium text-adhoc-violet">
          {current} de {total}
        </span>
        <div className="flex-1 mx-6 h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-adhoc-violet to-adhoc-lavender rounded-full" 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
        <span className="text-sm text-gray-400">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
};
