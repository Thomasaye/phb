import { HeartPulse, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white shadow-lg shadow-teal-600/20">
                <HeartPulse className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Premium Health <span className="text-teal-600">Bénin</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              La plateforme de référence pour la santé au Bénin. Nous connectons les patients aux meilleurs professionnels de santé pour un accès aux soins simplifié et de qualité.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-teal-500 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-teal-500 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-teal-500 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-teal-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Liens Rapides</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-teal-500 transition-colors">Trouver un médecin</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Établissements de santé</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Pharmacies de garde</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Conseils santé</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Urgences</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Pour les Professionnels</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-teal-500 transition-colors">Inscrire mon cabinet</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Logiciel de gestion</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Visibilité Premium</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Partenariats</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-teal-500 shrink-0" />
                <span>Cotonou, Haie Vive, Immeuble Premium Health</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-teal-500 shrink-0" />
                <span>+229 21 00 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-teal-500 shrink-0" />
                <span>contact@premiumhealth.bj</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2024 Premium Health Bénin. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Mentions Légales</a>
            <a href="#" className="hover:text-slate-300">Politique de Confidentialité</a>
            <a href="#" className="hover:text-slate-300">CGU</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
