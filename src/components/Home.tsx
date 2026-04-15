import { useState, useMemo } from "react";
import { Hero } from "./Hero";
import { DoctorCard } from "./DoctorCard";
import { doctors } from "../data/doctors";
import { SPECIALTIES } from "../constants";
import { Filter, SearchX, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";

export function Home() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doc) => {
      const matchSpecialty = !selectedSpecialty || selectedSpecialty === "all" || doc.specialty === selectedSpecialty;
      const matchCity = !selectedCity || selectedCity === "all" || doc.city === selectedCity;
      return matchSpecialty && matchCity;
    });
  }, [selectedSpecialty, selectedCity]);

  const handleSearch = (specialty: string, city: string) => {
    setSelectedSpecialty(specialty);
    setSelectedCity(city);
  };

  return (
    <main>
      <Hero onSearch={handleSearch} />

      {/* Specialty Scrolling Bar */}
      <div className="bg-white border-b border-border sticky top-16 md:top-20 z-30">
        <div className="max-w-[1600px] mx-auto px-4 md:px-12 py-3">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1">
            <button 
              onClick={() => setSelectedSpecialty("")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[0.75rem] md:text-sm font-bold transition-all whitespace-nowrap border ${
                !selectedSpecialty || selectedSpecialty === "all" 
                ? "bg-[#0f4c81] text-white border-[#0f4c81] shadow-lg shadow-blue-900/20" 
                : "bg-[#f8fafc] text-muted-foreground border-border hover:border-[#0f4c81]/30"
              }`}
            >
              <Filter className="h-3.5 w-3.5" />
              Tous les domaines
            </button>
            {SPECIALTIES.map((spec) => (
              <button 
                key={spec}
                onClick={() => setSelectedSpecialty(spec)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[0.75rem] md:text-sm font-bold transition-all whitespace-nowrap border ${
                  selectedSpecialty === spec 
                  ? "bg-[#27ae60] text-white border-[#27ae60] shadow-lg shadow-green-900/20" 
                  : "bg-[#f8fafc] text-muted-foreground border-border hover:border-[#27ae60]/30"
                }`}
              >
                <div className={`h-1.5 w-1.5 rounded-full ${selectedSpecialty === spec ? "bg-white" : "bg-[#27ae60]"}`} />
                {spec}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-8 md:py-12 max-w-[1600px] mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-[1.1rem] md:text-[1.25rem] font-extrabold text-[#0f4c81] flex items-center gap-2 whitespace-nowrap">
              {selectedSpecialty || "Spécialistes"} à {selectedCity || "Cotonou"}
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" className="w-full md:w-auto gap-2 rounded-md border-border text-muted-foreground text-[0.75rem] md:text-sm h-9 md:h-10">
              <Filter className="h-3.5 w-3.5" />
              Filtres avancés
            </Button>
          </div>
        </div>

        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredDoctors.map((doctor, index) => (
                <motion.div
                  key={doctor.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                >
                  <DoctorCard doctor={doctor} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="h-20 w-20 bg-card rounded-full flex items-center justify-center mb-6 border border-border">
              <SearchX className="h-10 w-10 text-muted-foreground/30" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Aucun résultat trouvé</h3>
            <p className="text-muted-foreground mt-2 max-w-md">
              Nous n'avons pas trouvé de médecins correspondant à vos critères. Essayez de modifier votre recherche ou vos filtres.
            </p>
            <Button 
              variant="link" 
              className="mt-4 text-primary font-bold"
              onClick={() => {
                setSelectedSpecialty("");
                setSelectedCity("");
              }}
            >
              Réinitialiser la recherche
            </Button>
          </motion.div>
        )}
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-t border-border py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:flex md:flex-row justify-center items-center gap-8 md:gap-24">
            <div className="text-center">
              <span className="block text-lg md:text-xl font-black text-primary">450+</span>
              <span className="text-[0.65rem] md:text-[0.75rem] text-muted-foreground uppercase tracking-widest font-black">Médecins</span>
            </div>
            <div className="text-center">
              <span className="block text-lg md:text-xl font-black text-primary">85</span>
              <span className="text-[0.65rem] md:text-[0.75rem] text-muted-foreground uppercase tracking-widest font-black">Cliniques</span>
            </div>
            <div className="text-center">
              <span className="block text-lg md:text-xl font-black text-primary">12k</span>
              <span className="text-[0.65rem] md:text-[0.75rem] text-muted-foreground uppercase tracking-widest font-black">Patients</span>
            </div>
            <div className="text-center">
              <span className="block text-lg md:text-xl font-black text-primary">24/7</span>
              <span className="text-[0.65rem] md:text-[0.75rem] text-muted-foreground uppercase tracking-widest font-black">Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f4c81] py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-white/10">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Vous êtes un professionnel de santé au Bénin ?
              </h2>
              <p className="text-blue-100 mt-6 text-lg">
                Rejoignez le réseau Premium Health pour digitaliser votre cabinet, augmenter votre visibilité et simplifier la prise de rendez-vous pour vos patients.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Button className="h-14 px-8 bg-[#27ae60] text-white hover:bg-[#219150] rounded-xl text-lg font-bold gap-2">
                Inscrire mon cabinet
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
