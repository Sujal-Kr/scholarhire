interface Staff {
    teaching: number;
    nonTeaching: number;
}

// Define a type for the institution
export interface Institution {
    id: number;
    name: string;
    type: string; // Use string literals for specific institution types
    location: string;
    rating: number; // Assuming ratings are numerical
    students: number;
    image: string; // URL to the image
    description: string;
    staff: Staff; // Using the Staff type
    amenities: string[]; // An array of amenities as strings
}
