interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const progress = (current / total) * 100;

  return (
    <div className="w-full h-1.5 bg-gray-100 sticky top-0 z-50 overflow-hidden">
      <div 
        className="h-full bg-adhoc-violet transition-all duration-300 ease-out" 
        style={{ width: `${progress}%` }}
      />
      <div className="absolute top-4 right-6 text-xs font-medium text-gray-400">
        {current}/{total}
      </div>
    </div>
  );
};
