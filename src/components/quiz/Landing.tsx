import { useQuizStore } from "@/store/useQuizStore";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

export const Landing = () => {
  const nextStep = useQuizStore((state) => state.nextStep);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-adhoc-violet/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-adhoc-coral/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-adhoc-lavender/5 rounded-full blur-3xl" />
      </div>

      {/* Adhoc Logo - Top */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-6 left-1/2 -translate-x-1/2 z-20"
      >
        <Image src="/adhoc-logo.png" alt="Adhoc" width={80} height={28} className="h-auto opacity-80" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-2xl"
      >
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-adhoc-violet/10 text-adhoc-violet px-4 py-2 rounded-full text-sm font-medium mb-8"
        >
          <Sparkles size={16} />
          Quiz interactivo
        </motion.div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-adhoc-deep mb-6 leading-[1.1]">
          ¿Qué tipo de{" "}
          <span className="italic text-adhoc-violet relative">
            diseñadora
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
              <path d="M2 6C50 2 150 2 198 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-adhoc-coral"/>
            </svg>
          </span>{" "}
          sos?
        </h1>

        <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-lg mx-auto leading-relaxed">
          Descubrí tu personalidad creativa en menos de 2 minutos
        </p>
        
        <motion.button
          onClick={nextStep}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group bg-adhoc-violet text-white px-10 py-5 rounded-full text-xl font-medium shadow-xl shadow-adhoc-violet/25 hover:shadow-2xl hover:shadow-adhoc-violet/30 transition-all duration-300 flex items-center gap-3 mx-auto"
        >
          Empezar
          <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
        
        <p className="text-sm text-gray-400 mt-10 italic">
          "Esto cambia por temporada, no te lo tomes muy en serio 😉"
        </p>
      </motion.div>

      {/* Adhoc branding - hidden since we have the top logo */}
    </div>
  );
};
