type InstitutionType = "University" | "College" | "High School" | "Others";

export interface Institution {
  id: number;
  name: string;
  type: string;
  location: string;
  rating: number;
  students: number;
  image: string;
}