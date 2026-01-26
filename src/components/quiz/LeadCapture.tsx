import { useState } from "react";
import { motion } from "framer-motion";

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
    // Logic to save to Supabase will go here or in parent
    onComplete({ name, email });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 max-w-lg mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-premium relative overflow-hidden w-full"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-adhoc-violet"></div>
        
        <h2 className="text-3xl font-display text-adhoc-deep mb-4">¡Listo!</h2>
        <p className="text-gray-600 mb-8">
          Dejanos tu nombre y email para ver tus resultados y descargar tu placa personalizada.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1 mb-2 block">
              Nombre
            </label>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="¿Cómo te llamas?"
              className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-adhoc-violet transition-all outline-none"
            />
          </div>
          
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1 mb-2 block">
              Email
            </label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-adhoc-violet transition-all outline-none"
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-adhoc-violet text-white py-4 rounded-2xl text-lg font-medium hover:opacity-90 transition-opacity mt-4 disabled:opacity-50"
          >
            {loading ? "Calculando..." : "Ver mis resultados"}
          </button>
        </form>
        
        <p className="text-[10px] text-gray-400 mt-6 leading-relaxed">
          Al continuar, aceptás recibir novedades de Adhoc. No mandamos spam, solo cosas útiles para diseñadoras.
        </p>
      </motion.div>
    </div>
  );
};
