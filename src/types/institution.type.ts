// Enum for Institution types
export enum InstitutionType {
    University = "University",
    College = "College",
    HighSchool = "High School"
}

// Define a type for the institution
export interface Institution {
    name: string;
    type: InstitutionType; // Use enum type for institution type
    location: string;
    students: number;
    image?: Array<string>; // Optional array of image URLs
    description: string;
    staff: Staff; // Using the Staff type
    amenities: string[]; // Array of amenities
}

// Staff interface
export interface Staff {
    teaching: number;
    nonTeaching: number;
}
