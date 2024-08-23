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
    isVerified: Boolean;
    availability?: Availability
}

enum Availability{
    FullTime = 'fulltime',
    PartTime = 'parttime',
    Contractual = 'contractual',
    Internship = 'internship'
}
