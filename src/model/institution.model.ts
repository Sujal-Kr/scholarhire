import { Institution, InstitutionType, Staff } from '@/types/institution.type';
import mongoose, { Schema } from 'mongoose';

// Schema for Staff subdocument
const StaffSchema: Schema = new Schema({
    teaching: {
        type: Number,
        required: true
    },
    nonTeaching: {
        type: Number,
        required: true
    }
});

// Institution Schema with enum validation using TypeScript enums
const InstitutionSchema: Schema<Institution> = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        enum: Object.keys(InstitutionType), // Use Object.keys to map the enum directly
        default: InstitutionType.College // Default value set to the enum value
    },
    location: {
        type: String,
        required: true
    },
    students: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    staff: StaffSchema,
    amenities: [{
        type: String, // Array of strings for amenities
    }],
    image: [{
        type: String // Array of image URLs
    }]
});

const InstitutionModel = mongoose.models.Institution || mongoose.model<Institution>("Institution", InstitutionSchema);

export default InstitutionModel;
