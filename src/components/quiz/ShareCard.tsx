import { Archetype, ArchetypeData } from "@/types";
import { ARCHETYPES } from "@/data/archetypes";

interface ShareCardProps {
  primary: Archetype;
  secondary?: Archetype;
  isCombo: boolean;
  name: string;
}

export const ShareCard = ({ primary, secondary, isCombo, name }: ShareCardProps) => {
  const data = ARCHETYPES[primary];
  const secondaryData = secondary ? ARCHETYPES[secondary] : null;

  return (
    <div 
      id="share-card"
      className="fixed left-[-9999px] top-0 w-[1080px] h-[1920px] bg-adhoc-deep text-white flex flex-col items-center justify-between p-20 text-center relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[30%] bg-adhoc-violet blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[30%] bg-adhoc-coral blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center flex-1 justify-center gap-16">
        <div>
          <span className="text-3xl font-bold tracking-[0.3em] uppercase opacity-60 mb-8 block">
            MI ARQUETIPO DE DISEÑADORA:
          </span>
          <h1 className="text-8xl font-display leading-[1.1] italic">
            {isCombo ? (
              <>
                {data.name.replace('LA ', '')} <br />
                <span className="text-[0.5em] not-italic opacity-80 block mt-6">
                  CON {secondaryData?.name.replace('LA ', '')} ASCENDENTE
                </span>
              </>
            ) : (
              data.name
            )}
          </h1>
        </div>

        <div className="w-[600px] h-[600px] bg-adhoc-violet/20 rounded-full flex items-center justify-center p-12 border-8 border-white/10 shadow-2xl">
          <img 
            src={data.image} 
            alt={data.name} 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="max-w-4xl">
          <h2 className="text-5xl font-display italic mb-10">"{data.tagline}"</h2>
          
          <div className="flex justify-center gap-12 mt-12">
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 flex-1">
              <span className="text-5xl mb-6 block">🚀</span>
              <h3 className="font-bold text-xl uppercase tracking-widest opacity-60 mb-4">Superpoder</h3>
              <p className="text-2xl font-medium leading-relaxed">{data.superpower}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 pt-20 border-t border-white/10 w-full flex justify-between items-center px-10">
        <div className="text-left font-display italic">
          <p className="text-5xl text-adhoc-violet">Adhoc</p>
          <p className="text-2xl opacity-60 mt-2">¿Qué diseñadora sos? | quiz.adhoc.com.ar</p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold opacity-80">@{name.toLowerCase().replace(/\s/g, '')}</p>
        </div>
      </div>
    </div>
  );
};
