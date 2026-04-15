import { Search, MapPin, Stethoscope, ShieldCheck, Award, Lock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { SPECIALTIES, CITIES } from "../constants";
import { motion } from "motion/react";

interface HeroProps {
  onSearch: (specialty: string, city: string) => void;
}

export function Hero({ onSearch }: HeroProps) {
  const [specialty, setSpecialty] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const handleSearch = () => {
    onSearch(specialty, city);
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
          alt="Medical Facility" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center text-white pt-2 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-6xl lg:text-8xl font-black tracking-tight mb-4 md:mb-6 leading-[1.1]">
            Le réseau de santé <span className="text-[#ffcc00]">premium</span> du Bénin
          </h1>
          
          <p className="text-base md:text-xl lg:text-2xl text-white/70 mb-8 md:mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Connectez-vous à la meilleure médecine béninoise, où que vous soyez.
          </p>

          <div className="flex flex-row items-center justify-center gap-3 md:gap-4 mb-12 md:mb-16">
            <Button 
              onClick={() => document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="h-11 md:h-14 px-4 md:px-8 bg-[#ffcc00] text-black hover:bg-[#e6b800] rounded-lg md:rounded-xl text-sm md:text-lg font-black gap-2 transition-all"
            >
              Trouver un médecin
              <Search className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
            
            <Button 
              variant="outline"
              className="h-11 md:h-14 px-4 md:px-8 border-[#27ae60]/30 bg-[#27ae60]/10 backdrop-blur-md text-white hover:bg-[#27ae60]/20 rounded-lg md:rounded-xl text-sm md:text-lg font-bold gap-2 transition-all"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-[#27ae60] animate-pulse" />
              Urgence
            </Button>
          </div>
        </motion.div>

        {/* Compact Search Bar */}
        <motion.div
          id="search-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto max-w-4xl"
        >
          <div className="flex flex-col gap-0 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-xl p-1.5 md:p-2 shadow-2xl md:flex-row md:items-center border border-white/10">
            <div className="flex flex-1 flex-col items-start px-4 md:px-6 py-2 md:py-0 border-b md:border-b-0 md:border-r border-white/10">
              <label className="text-[0.55rem] md:text-[0.65rem] uppercase text-[#27ae60] font-black mb-0.5 tracking-widest">Spécialité</label>
              <Select value={specialty} onValueChange={setSpecialty}>
                <SelectTrigger className="border-none bg-transparent focus:ring-0 text-white font-bold p-0 h-auto text-sm md:text-base">
                  <SelectValue placeholder="Cardiologue" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-white/10 text-white">
                  <SelectItem value="all">Toutes les spécialités</SelectItem>
                  {SPECIALTIES.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-1 flex-col items-start px-4 md:px-6 py-2 md:py-0 border-b md:border-b-0 md:border-r border-white/10">
              <label className="text-[0.55rem] md:text-[0.65rem] uppercase text-[#27ae60] font-black mb-0.5 tracking-widest">Ville</label>
              <Select value={city} onValueChange={setCity}>
                <SelectTrigger className="border-none bg-transparent focus:ring-0 text-white font-bold p-0 h-auto text-sm md:text-base">
                  <SelectValue placeholder="Cotonou" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-white/10 text-white">
                  <SelectItem value="all">Toutes les villes</SelectItem>
                  {CITIES.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={handleSearch}
              className="h-12 md:h-14 mt-1 md:mt-0 px-8 md:px-12 bg-[#ffcc00] text-black hover:bg-[#e6b800] rounded-lg md:rounded-xl text-base font-black transition-all"
            >
              Rechercher
            </Button>
          </div>
        </motion.div>

        {/* Certifications - Moved back down and restyled */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-6 md:gap-12 mt-8 md:mt-10"
        >
          <div className="flex items-center gap-2 group">
            <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-[#27ae60]" />
            <span className="text-[0.6rem] md:text-[0.75rem] font-bold text-white/60">Agrément</span>
          </div>
          <div className="flex items-center gap-2 group">
            <Award className="h-4 w-4 md:h-5 md:w-5 text-[#ffcc00]" />
            <span className="text-[0.6rem] md:text-[0.75rem] font-bold text-white/60">Standards</span>
          </div>
          <div className="flex items-center gap-2 group">
            <Lock className="h-4 w-4 md:h-5 md:w-5 text-[#27ae60]" />
            <span className="text-[0.6rem] md:text-[0.75rem] font-bold text-white/60">Sécurité</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
