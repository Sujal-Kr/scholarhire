import {Document} from 'mongoose';


export interface UserSchemaType extends Document {
    name: string;
    email: string;
    password: string;
    verifyCode? : number;
    verifyCodeExpiryDate? : Date;
    phone?: number | string;
    address?: string;
    imageUrl?: string;
    isVerified: Boolean;
    availability?: string 
    updatedAt: Date;
}

enum Availability{
    FullTime = 'fulltime',
    PartTime = 'parttime',
    Contractual = 'contractual',
    Internship = 'internship'
}
