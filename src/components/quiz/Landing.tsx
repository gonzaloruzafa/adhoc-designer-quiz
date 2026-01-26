import { useQuizStore } from "@/store/useQuizStore";
import { motion } from "framer-motion";

export const Landing = () => {
  const nextStep = useQuizStore((state) => state.nextStep);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-adhoc-violet font-medium tracking-wider text-sm mb-4 block">
          ¿QUÉ DISEÑADORA SOS?
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-adhoc-deep mb-6 leading-tight">
          Tu personalidad de diseñadora, <br className="hidden md:block" />
          <span className="italic text-adhoc-violet">sin filtro.</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
          <span className="font-medium">Mini-juego de segundos.</span>
        </p>
        
        <button
          onClick={nextStep}
          className="bg-adhoc-violet text-white px-10 py-4 rounded-full text-xl font-medium hover:scale-105 transition-transform shadow-lg shadow-adhoc-violet/20"
        >
          Empezar Test
        </button>
        
        <p className="text-sm text-gray-400 mt-6">
          "Esto cambia por temporada, no es un test serio."
        </p>
      </motion.div>
    </div>
  );
};
