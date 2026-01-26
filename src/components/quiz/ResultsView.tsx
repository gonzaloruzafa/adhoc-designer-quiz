import { Archetype, ArchetypeData } from "@/types";
import { ARCHETYPES } from "@/data/archetypes";
import { motion } from "framer-motion";
import { Download, Share2, RefreshCw } from "lucide-react";
import { toPng } from "html-to-image";
import { ShareCard } from "./ShareCard";
import { useRef } from "react";

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

  const handleDownload = async () => {
    const el = document.getElementById('share-card');
    if (!el) return;
    
    try {
      const dataUrl = await toPng(el, {
        width: 1080,
        height: 1920,
        quality: 1,
      });
      
      const link = document.createElement('a');
      link.download = `adhoc-arquetipo-${primary}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('oops, something went wrong!', err);
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
    <div className="flex flex-col items-center py-10 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full bg-white rounded-[3rem] shadow-premium overflow-hidden border border-gray-100"
      >
        <div className="bg-adhoc-violet px-8 py-10 text-center text-white relative">
          <span className="text-xs font-bold tracking-[0.2em] opacity-80 uppercase mb-2 block">
            SOS EL ARQUETIPO:
          </span>
          <h1 className="text-3xl md:text-5xl font-display leading-tight italic">
            {isCombo ? (
              <>
                {data.name.replace('LA ', '')} <br className="md:hidden" />
                <span className="text-[0.6em] not-italic opacity-90 block mt-2">
                  CON {secondaryData?.name.replace('LA ', '')} ASCENDENTE
                </span>
              </>
            ) : (
              data.name
            )}
          </h1>
          
          {/* Sticker Placeholder */}
          <div className="mt-8 flex justify-center">
            <div className="w-48 h-48 bg-adhoc-lavender/30 rounded-full flex items-center justify-center p-4 border-4 border-white/20">
              <img 
                src={data.image} 
                alt={data.name} 
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://placehold.co/400x400/7C6CD8/white?text=Sticker";
                }}
              />
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-display text-adhoc-deep mb-2 italic">
              "{data.tagline}"
            </h3>
            <p className="text-gray-600 max-w-md mx-auto italic">
              {data.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
              <span className="text-xl mb-3 block">🚀</span>
              <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-2">Superpoder</h4>
              <p className="text-sm font-medium leading-relaxed">{data.superpower}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
              <span className="text-xl mb-3 block">🚨</span>
              <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-2">Talón de Aquiles</h4>
              <p className="text-sm font-medium leading-relaxed">{data.risk}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
              <span className="text-xl mb-3 block">⚡</span>
              <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-2">Next Level</h4>
              <p className="text-sm font-medium leading-relaxed">{data.upgrade}</p>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8">
            <h4 className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 font-sans">
              Te emparentás con vibes de...
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {data.vibes.map((vibe, i) => (
                <span key={i} className="px-4 py-2 bg-adhoc-violet/5 text-adhoc-violet rounded-full text-sm font-medium italic">
                  {vibe}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 w-full max-w-2xl">
        <button 
          onClick={handleDownload}
          className="flex items-center justify-center gap-2 bg-adhoc-violet text-white py-4 px-6 rounded-2xl font-medium hover:opacity-90 transition-opacity shadow-lg shadow-adhoc-violet/20"
        >
          <Download size={20} />
          Descargar Story
        </button>
        <button 
          onClick={handleShare}
          className="flex items-center justify-center gap-2 bg-white border-2 border-adhoc-violet text-adhoc-violet py-4 px-6 rounded-2xl font-medium hover:bg-adhoc-violet/5 transition-colors"
        >
          <Share2 size={20} />
          Compartir link
        </button>
      </div>

      {/* Hidden Share Card for Image Generation */}
      <ShareCard 
        primary={primary} 
        secondary={secondary} 
        isCombo={isCombo} 
        name={userName} 
      />
      
      <button 
        onClick={onReset}
        className="mt-8 flex items-center gap-2 text-gray-400 text-sm hover:text-gray-600 transition-colors"
      >
        <RefreshCw size={14} />
        Volver a empezar
      </button>
    </div>
  );
};
