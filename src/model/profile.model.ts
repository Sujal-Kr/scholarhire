import { CareerProfileType, EducationType, ProfessionalAccomplishmentType } from '@/types/userProfile.types';
import mongoose, { Schema, Document } from 'mongoose';

export interface ProfileType extends Document {
    userId: Schema.Types.ObjectId
    resume?: string
    education?: EducationType[]
    professionalAccomplishments?: ProfessionalAccomplishmentType[]
    careerProfile?: CareerProfileType[]
    headline?: string
    skills?: [string]
    summary?: string
}

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
        endDate: {
            type: Date,
            required: true
        },
    }
)

const careerProfileSchema: Schema<CareerProfileType> = new Schema(
    {
        company: {
            type: String,
            required: true
        },
        position: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        }
    }
)

const professionalAccomplishmentsSchema: Schema<ProfessionalAccomplishmentType> = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        endDate: {
            type: String,
            required: true
        }
    }
)

const profileSchema: Schema<ProfileType> = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        resume: {
            type: String,
            required: false
        },
        education: {
            type: [educationSchema],
            required: false
        },
        professionalAccomplishments: {
            type: [professionalAccomplishmentsSchema],
            required: false
        },
        careerProfile: {
            type: [careerProfileSchema],
            required: false
        },
        headline: {
            type: String,
            required: false,
            maxLength: 150
        },
        skills: {
            type: [String],
            required: false
        },
        summary: {
            type: String,
            required: false,
            maxLength: 1500
        }
    }
)

const Profile = mongoose.models.Profile || mongoose.model<ProfileType>('Profile', profileSchema);

export default Profile;
