import mongoose, { Schema, Document, ObjectId } from "mongoose";

interface UserSchemaType extends Document {
    username: string;
    email: string;
    password: string;
    profileUrl?: string;
    profileId: ObjectId;
    isVerified: boolean;
    userType: string
} 

const userSchema = new Schema<UserSchemaType>({
    username: {
        type: String,
        required: [true, "Name cannot be empty"],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email cannot be empty"],
    },
    password: {
        type: String,
        minLength: [8, "Password must be at least 8 characters"],
        required: [true, "Password can't be empty"],
    },
    profileId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "profile",  
    },
    profileUrl: {
        type: String,
    },
    isVerified:{
        type: Boolean,
        default: false,
    },
    userType: {
        type: String,
        default:"staff",
        enum:['staff','admin','recuiter']
    }

});

export const userModel = mongoose.models.User || mongoose.model<UserSchemaType>('User', userSchema);
