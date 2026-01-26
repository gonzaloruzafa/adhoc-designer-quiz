import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, User } from "lucide-react";
import Image from "next/image";

interface LeadCaptureProps {
  onComplete: (data: { name: string; email: string }) => void;
}

export const LeadCapture = ({ onComplete }: LeadCaptureProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    onComplete({ name, email });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 max-w-md mx-auto text-center relative">
      {/* Adhoc Logo - Top */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-6 left-1/2 -translate-x-1/2 z-20"
      >
        <Image src="/adhoc-logo.png" alt="Adhoc" width={70} height={24} className="h-auto" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        {/* Success icon */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-20 h-20 bg-gradient-to-br from-adhoc-violet to-adhoc-lavender rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-adhoc-violet/20"
        >
          <span className="text-3xl">🎉</span>
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-display text-adhoc-deep mb-3">
          ¡Ya casi!
        </h2>
        <p className="text-gray-500 mb-8 text-sm md:text-base">
          Dejanos tu nombre y email para ver tu resultado personalizado
        </p>
        
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative">
            <User size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
              className="w-full pl-14 pr-6 py-4 bg-white border border-gray-200 rounded-xl focus:border-adhoc-violet focus:ring-2 focus:ring-adhoc-violet/20 transition-all outline-none text-adhoc-deep"
            />
          </div>
          
          <div className="relative">
            <Mail size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="w-full pl-14 pr-6 py-4 bg-white border border-gray-200 rounded-xl focus:border-adhoc-violet focus:ring-2 focus:ring-adhoc-violet/20 transition-all outline-none text-adhoc-deep"
            />
          </div>
          
          <motion.button
            type="submit"
            disabled={loading || !name || !email}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full bg-adhoc-violet text-white py-4 rounded-xl text-lg font-medium hover:bg-adhoc-violet/90 transition-all shadow-lg shadow-adhoc-violet/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group mt-2"
          >
            {loading ? (
              <>
                <span className="animate-spin">⏳</span>
                Calculando...
              </>
            ) : (
              <>
                Ver mi resultado
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </motion.button>
        </motion.form>
        
        <p className="text-xs text-gray-400 mt-8 leading-relaxed max-w-xs mx-auto">
          No mandamos spam, solo cosas útiles para diseñadoras ✨
        </p>
      </motion.div>
    </div>
  );
};
