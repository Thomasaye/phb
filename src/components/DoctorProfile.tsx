import { useParams, Link } from "react-router-dom";
import { doctors } from "../data/doctors";
import { 
  MapPin, 
  Phone, 
  Mail, 
  GraduationCap, 
  Globe, 
  Clock, 
  CalendarCheck, 
  User, 
  ArrowLeft,
  ChevronRight,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";

export function DoctorProfile() {
  const { id } = useParams<{ id: string }>();
  const doctor = doctors.find(d => d.id === id);

  if (!doctor) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-foreground">Cabinet non trouvé</h2>
        <p className="text-muted-foreground mt-2">Le cabinet que vous recherchez n'existe pas ou a été déplacé.</p>
        <Link to="/">
          <Button className="mt-6 bg-[#0f4c81] text-white">Retour à l'accueil</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24 md:pb-20">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-border sticky top-20 z-40 md:relative md:top-0">
        <div className="container mx-auto px-4 md:px-12 py-3 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-[#0f4c81] font-bold hover:underline text-sm md:text-base">
            <ArrowLeft className="h-4 w-4" />
            Retour
          </Link>
          <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">{doctor.name}</span>
          </div>
        </div>
      </div>

      {/* Profile Header - Optimized for all devices */}
      <section className="bg-white border-b border-border py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12">
            <div className="flex-1 w-full">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className="bg-[#e6eff7] text-[#0f4c81] hover:bg-[#e6eff7] border-none rounded-md px-3 py-1 font-bold text-[0.75rem] uppercase tracking-wider">
                  {doctor.specialty}
                </Badge>
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm">{doctor.rating} ({doctor.reviews} avis)</span>
                </div>
              </div>
              
              <h1 className="text-2xl md:text-5xl font-black tracking-tight mb-6 text-[#0f4c81] leading-tight">
                {doctor.name}
              </h1>
              
              <div className="flex flex-col gap-4 text-muted-foreground text-[0.95rem] md:text-[1.05rem]">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#0f4c81] mt-0.5 shrink-0" />
                  <span className="font-medium">{doctor.city}, {doctor.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#0f4c81] shrink-0" />
                  <span className="font-bold text-foreground">{doctor.phone}</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-center justify-center h-48 w-48 rounded-3xl bg-[#f8fafc] border border-border shadow-inner">
              <User className="h-20 w-20 text-[#0f4c81]/20" />
              <div className="mt-4 px-4 py-1.5 bg-[#27ae60]/10 rounded-full border border-[#27ae60]/20">
                <span className="text-[0.65rem] uppercase font-black tracking-widest text-[#27ae60]">Profil Vérifié</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-12 mt-8 md:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Left Column: Detailed Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                <section>
                  <h3 className="text-[0.8rem] font-black uppercase tracking-[0.2em] text-[#0f4c81] mb-6 flex items-center gap-3">
                    <GraduationCap className="h-5 w-5" />
                    Expertise & Formation
                  </h3>
                  <ul className="space-y-4">
                    {doctor.education.map((edu, i) => (
                      <li key={i} className="text-foreground text-[0.95rem] leading-relaxed flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#27ae60] mt-2 shrink-0" />
                        <span className="font-semibold">{edu}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-[0.8rem] font-black uppercase tracking-[0.2em] text-[#0f4c81] mb-6 flex items-center gap-3">
                    <Globe className="h-5 w-5" />
                    Langues de consultation
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {doctor.languages.map((lang) => (
                      <span key={lang} className="px-4 py-2 bg-[#f8fafc] rounded-lg text-foreground text-[0.85rem] font-bold border border-border">
                        {lang}
                      </span>
                    ))}
                  </div>
                </section>
              </div>

              <Separator className="my-10 bg-border" />

              <section>
                <h3 className="text-[0.8rem] font-black uppercase tracking-[0.2em] text-[#0f4c81] mb-4">
                  Présentation de l'établissement
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[1rem]">
                  Le {doctor.name} est un établissement de santé de référence situé à {doctor.city}. 
                  Nous nous engageons à fournir des soins de haute qualité avec un plateau technique moderne 
                  et une équipe dévouée au bien-être des patients. Notre expertise en {doctor.specialty} 
                  nous permet de répondre aux besoins les plus complexes avec professionnalisme et humanité.
                </p>
              </section>
            </div>
          </div>

          {/* Right Column: Booking & Contact (Sticky on Desktop) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-border overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#27ae60]" />
                
                <h3 className="text-[1.1rem] font-black text-[#0f4c81] mb-8 flex items-center gap-3">
                  <Clock className="h-6 w-6 text-[#27ae60]" />
                  Prendre RDV
                </h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center justify-between">
                    <span className="text-[0.7rem] uppercase font-black text-muted-foreground tracking-widest">Disponibilité</span>
                    <Badge variant="outline" className="border-[#27ae60] text-[#27ae60] font-bold">
                      {doctor.availability}
                    </Badge>
                  </div>
                  
                  <Separator className="bg-border" />
                  
                  <div className="space-y-3">
                    <span className="text-[0.7rem] uppercase font-black text-muted-foreground tracking-widest block">Contact Professionnel</span>
                    <div className="flex items-center gap-3 p-3 bg-[#f8fafc] rounded-xl border border-border">
                      <Mail className="h-5 w-5 text-[#0f4c81]" />
                      <span className="text-[#0f4c81] font-bold text-[0.9rem] truncate">{doctor.email}</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full h-14 bg-[#27ae60] hover:bg-[#219150] text-white rounded-xl gap-3 font-black text-lg shadow-lg shadow-[#27ae60]/20 transition-all active:scale-95">
                  <CalendarCheck className="h-6 w-6" />
                  Réserver en ligne
                </Button>
                
                <p className="text-center text-[0.75rem] text-muted-foreground mt-4 font-medium">
                  Confirmation immédiate · Service gratuit
                </p>
              </div>

              <div className="bg-[#0f4c81]/5 rounded-2xl p-6 border border-[#0f4c81]/10">
                <h4 className="text-[0.85rem] font-bold text-[#0f4c81] mb-2">Besoin d'aide ?</h4>
                <p className="text-[0.8rem] text-[#0f4c81]/70 leading-relaxed">
                  Notre support patient est disponible de 8h à 18h pour vous accompagner dans vos démarches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Quick Actions Bar - Sticky Bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] flex gap-3">
        <Button 
          variant="outline" 
          className="flex-1 h-12 border-[#0f4c81] text-[#0f4c81] font-bold rounded-xl gap-2"
          onClick={() => window.location.href = `tel:${doctor.phone}`}
        >
          <Phone className="h-4 w-4" />
          Appeler
        </Button>
        <Button className="flex-[2] h-12 bg-[#27ae60] text-white font-black rounded-xl gap-2">
          <CalendarCheck className="h-4 w-4" />
          Prendre RDV
        </Button>
      </div>
    </div>
  );
}
