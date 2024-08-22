import mongoose, { Schema } from "mongoose";
import { UserSchemaType, EducationType, CarrierProfileType } from "@/types/userSchemaTypes";
import bcrypt from "bcrypt";


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
        minLength: [8, 'Password should be atleast 6 characters']
    },
    availability: {
        type: String,
        enum: ['fulltime', 'parttime', 'contractual', 'internship']
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    phone: Number,
    address: String,
    carrierProfile: [carrierProfileSchema],
    imageUrl: String,
    resume: String,
    headline: String,
    skills: [String],
    pSummary: String,
    education: [educationSchema],
    verifyCode: Number,
    verifyCodeExpiryDate: Date
}, { timestamps: true });

userSchema.index({ email: 1 }, { unique: true });

userSchema.pre<UserSchemaType>('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})

export const User = mongoose.models.User || mongoose.model<UserSchemaType>('User', userSchema);