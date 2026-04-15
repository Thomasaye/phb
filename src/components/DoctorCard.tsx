import { Star, MapPin, Phone, Calendar, User } from "lucide-react";
import { Doctor } from "../types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="relative"
    >
      <Card className="overflow-hidden border-border bg-card rounded-xl hover:border-primary transition-all p-5">
        <div className="flex gap-4 mb-4">
          <div className="h-14 w-14 rounded-full bg-slate-100 flex items-center justify-center text-primary border border-border">
            <User className="h-7 w-7" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-[1.1rem] font-bold text-primary mb-0.5 truncate">{doctor.name}</h3>
            <p className="text-[#27ae60] font-bold text-[0.85rem]">{doctor.specialty}</p>
            <div className="flex items-center gap-1 mt-1">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-3 w-3 ${i < Math.floor(doctor.rating) ? 'fill-current' : 'text-slate-300'}`} />
                ))}
              </div>
              <span className="text-[0.75rem] font-bold text-muted-foreground ml-1">{doctor.rating}/5</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-4 space-y-2">
          <div className="flex items-center gap-2 text-[0.85rem] text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{doctor.city}, {doctor.address}</span>
          </div>
          <div className="flex items-center gap-2 text-[0.85rem] text-muted-foreground">
            <Phone className="h-3.5 w-3.5 shrink-0" />
            <span>{doctor.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-[0.85rem] text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 shrink-0" />
            <span className="text-[#27ae60] font-medium">Disponible demain à 08:30</span>
          </div>
        </div>

        <Link to={`/doctor/${doctor.id}`}>
          <Button 
            variant="outline" 
            className="w-full mt-5 border-primary text-primary hover:bg-primary/5 font-bold rounded-md py-2.5 h-auto text-sm"
          >
            Prendre RDV
          </Button>
        </Link>
      </Card>
    </motion.div>
  );
}
