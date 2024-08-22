import {Document} from 'mongoose';


export interface UserSchemaType extends Document {
    name: string;
    email: string;
    password: string;
    verifyCode? : number;
    verifyCodeExpiryDate? : Date;
    phone?: number;
    address?: string;
    imageUrl?: string;
    resume?: string;
    headline?: string;
    skills?: string[];
    pSummary?: string;
    education?: EducationType[]
    // professionalExperience: ProfessionalExperience[]
    carrierProfile?: CarrierProfileType[]
    availability?: Availability
}

enum Availability{
    FullTime = 'fulltime',
    PartTime = 'parttime',
    Contractual = 'contractual',
    Internship = 'internship'
}

export interface EducationType{
    institute: string;
    degree: string;
    startDate: Date;
    endDate: Date;
}

export interface CarrierProfileType{
    company: string;
    position: string;
    startDate: Date;
    endDate: Date;
    workSummary: string[]
}