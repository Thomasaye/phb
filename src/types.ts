export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  rating: number;
  reviews: number;
  image: string;
  availability: string;
  education: string[];
  languages: string[];
}

export type Specialty = 
  | "Cardiologie"
  | "Gynécologie"
  | "Pédiatrie"
  | "Ophtalmologie"
  | "Dentiste"
  | "Dermatologie"
  | "Médecine Générale"
  | "Neurologie"
  | "Chirurgie"
  | "Clinique"
  | "Hôpital"
  | "ORL";

export type City = 
  | "Cotonou"
  | "Porto-Novo"
  | "Parakou"
  | "Abomey-Calavi"
  | "Bohicon"
  | "Natitingou"
  | "Djougou"
  | "Ouidah";
