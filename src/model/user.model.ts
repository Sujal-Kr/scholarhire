import mongoose, { Schema } from "mongoose";
import { UserSchemaType, EducationType, CarrierProfileType } from "@/types/userSchemaTypes";


const educationSchema: Schema<EducationType> = new Schema(
    {
        institute: {
            type: String,
            required: true
        },
        degree: {
            type: String,
            required: true
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: Date,
    }
)

const carrierProfileSchema: Schema<CarrierProfileType> = new Schema({
    company: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    workSummary: {
        type: [String],
        required: true
    },
    endDate: Date
})


const userSchema: Schema<UserSchemaType> = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [6, 'Password should be atleast 6 characters']
    },
    phone: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    availability: {
        type: String,
        enum: ['fulltime', 'parttime', 'contractual', 'internship']
    },
    carrierProfile: [carrierProfileSchema],
    imageUrl: String,
    resume: String,
    headline: String,
    skills: [String],
    pSummary: String,
    education: [educationSchema]
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model<UserSchemaType>('User', userSchema);