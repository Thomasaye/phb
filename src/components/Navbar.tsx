import { HeartPulse, Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md text-white">
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-12">
        <Link to="/" className="flex items-center gap-1.5 md:gap-3 shrink-0 hover:opacity-90 transition-opacity">
          <div className="flex h-7 w-7 md:h-10 md:w-10 items-center justify-center rounded-lg md:rounded-xl bg-[#ffcc00] text-black font-black text-sm md:text-xl shadow-lg shadow-yellow-500/20">
            P
          </div>
          <div className="flex flex-row items-center gap-1 md:gap-1.5">
            <span className="text-[0.85rem] md:text-xl font-black tracking-tight text-white leading-none whitespace-nowrap">
              Premium Health
            </span>
            <span className="text-[0.85rem] md:text-xl font-black tracking-tight text-[#ffcc00] leading-none whitespace-nowrap uppercase">
              Bénin
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-10 text-[0.95rem] font-bold text-white/70">
          <Link to="/" className="text-[#ffcc00]">Accueil</Link>
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Afrique de l'Ouest</a>
          <a href="#" className="hover:text-white transition-colors">Partenariat</a>
        </div>

        <div className="flex items-center gap-2 md:gap-8 shrink-0">
          <div className="hidden sm:flex items-center gap-2 text-sm font-bold text-white/60 border-r border-white/10 pr-6 mr-2">
            <span className="h-2 w-2 rounded-full bg-[#27ae60]" />
            Premium Care
          </div>
          
          <Button className="h-7 md:h-11 px-2.5 md:px-6 bg-[#27ae60] text-white hover:bg-[#219150] rounded-lg md:rounded-xl font-black text-[0.6rem] md:text-sm shadow-lg shadow-green-500/20 transition-all hover:scale-105 ml-1 md:ml-0">
            Consultation
          </Button>

          <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9 text-white hover:bg-white/10">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
