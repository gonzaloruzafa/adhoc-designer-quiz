import { Archetype, ArchetypeData } from "@/types";
import { ARCHETYPES } from "@/data/archetypes";
import { motion } from "framer-motion";
import { Download, Share2, RefreshCw, Sparkles } from "lucide-react";
import { toPng } from "html-to-image";
import { ShareCard } from "./ShareCard";
import { useRef, useState } from "react";
import Image from "next/image";

interface ResultsViewProps {
  primary: Archetype;
  secondary?: Archetype;
  isCombo: boolean;
  onReset: () => void;
  userName: string;
}

export const ResultsView = ({ primary, secondary, isCombo, onReset, userName }: ResultsViewProps) => {
  const data = ARCHETYPES[primary];
  const secondaryData = secondary ? ARCHETYPES[secondary] : null;
  const shareCardRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    const el = document.getElementById('share-card');
    if (!el || isDownloading) return;
    
    setIsDownloading(true);
    
    try {
      // Esperar un poco para que la imagen esté cargada
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const dataUrl = await toPng(el, {
        width: 1080,
        height: 1920,
        quality: 1,
        cacheBust: true,
        pixelRatio: 1,
        fetchRequestInit: {
          mode: 'cors',
          cache: 'no-cache',
        },
        skipAutoScale: true,
        filter: (node) => {
          // Excluir nodos problemáticos si los hay
          return true;
        },
      });
      
      const link = document.createElement('a');
      link.download = `adhoc-arquetipo-${primary}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Error al descargar:', err);
      alert('Hubo un problema al generar la imagen. Intentá de nuevo.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '¿Qué diseñadora sos?',
          text: `Me tocó ${isCombo ? data.name + ' con ' + secondaryData?.name : data.name}. ¡Hacé el test de Adhoc!`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing', err);
      }
    }
  };

  return (
    <div className="flex flex-col items-center py-8 md:py-12 px-4 md:px-6 max-w-3xl mx-auto min-h-screen">
      {/* Confetti-like decoration */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <div className="inline-flex items-center gap-2 bg-adhoc-coral/10 text-adhoc-coral px-4 py-2 rounded-full text-sm font-medium">
          <Sparkles size={16} />
          ¡Resultado listo!
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100"
      >
        {/* Header with gradient */}
        <div className="bg-gradient-to-br from-adhoc-violet via-adhoc-violet to-adhoc-lavender px-6 md:px-10 py-8 md:py-10 text-center text-white relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <span className="text-sm font-medium tracking-widest opacity-80 uppercase mb-3 block relative z-10">
            Tu personalidad:
          </span>
          <h1 className="text-3xl md:text-5xl font-display leading-tight italic relative z-10">
            {isCombo ? (
              <>
                {data.name.replace('LA ', '')}
                <span className="text-lg md:text-2xl not-italic opacity-90 block mt-3 font-sans font-normal">
                  con toque de {secondaryData?.name.replace('LA ', '')}
                </span>
              </>
            ) : (
              data.name
            )}
          </h1>
        </div>

        {/* Image Section with White Background */}
        <div className="bg-white px-6 md:px-10 py-10 md:py-12 flex justify-center -mt-1">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="relative"
          >
            <div className="w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-gray-50 to-white rounded-3xl flex items-center justify-center p-6 border-4 border-adhoc-violet/10 shadow-2xl shadow-adhoc-violet/10">
              <img 
                src={data.image} 
                alt={data.name} 
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://placehold.co/400x400/7C6CD8/white?text=✨";
                }}
              />
            </div>
          </motion.div>
        </div>

        <div className="p-6 md:p-10 pt-0">
          {/* Tagline & Description */}
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-display text-adhoc-deep mb-3 italic">
              "{data.tagline}"
            </h3>
            <p className="text-gray-500 max-w-md mx-auto text-sm md:text-base leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Tip Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-adhoc-violet/5 to-adhoc-lavender/10 p-6 md:p-8 rounded-2xl border border-adhoc-violet/10 mb-8"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">💡</span>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-adhoc-violet mb-2">
                  Tu tip personalizado
                </h4>
                <p className="text-adhoc-deep leading-relaxed text-sm md:text-base">{data.tip}</p>
              </div>
            </div>
          </motion.div>

          {/* Vibes */}
          <div className="pt-6 border-t border-gray-100">
            <h4 className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">
              🎵 Tu playlist sería algo como...
            </h4>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {data.vibes.map((vibe, i) => (
                <motion.span 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-100 hover:border-adhoc-violet hover:bg-adhoc-violet/5 transition-colors cursor-default"
                >
                  {vibe}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-2 gap-3 mt-6 w-full max-w-md"
      >
        <button 
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex items-center justify-center gap-2 bg-adhoc-deep text-white py-4 px-5 rounded-xl font-medium hover:bg-adhoc-deep/90 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
        >
          <Download size={18} className={isDownloading ? 'animate-bounce' : ''} />
          {isDownloading ? 'Generando...' : 'Descargar'}
        </button>
        <button 
          onClick={handleShare}
          className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-adhoc-deep py-4 px-5 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-300 transition-all text-sm md:text-base"
        >
          <Share2 size={18} />
          Compartir
        </button>
      </motion.div>

      {/* Hidden Share Card for Image Generation */}
      <div className="fixed left-[-9999px] top-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <ShareCard 
          primary={primary} 
          secondary={secondary} 
          isCombo={isCombo} 
          name={userName} 
        />
      </div>
      
      <button 
        onClick={onReset}
        className="mt-8 flex items-center gap-2 text-gray-400 text-sm hover:text-adhoc-violet transition-colors group"
      >
        <RefreshCw size={14} className="group-hover:rotate-180 transition-transform duration-500" />
        Volver a empezar
      </button>

      {/* Footer branding */}
      <div className="mt-auto pt-10">
        <Image src="/adhoc-logo.png" alt="Adhoc" width={70} height={24} className="h-auto opacity-40" />
      </div>
    </div>
  );
};
