import { User } from '@/model/user.model'
import * as JWT from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import Profile, { ProfileType } from '@/model/profile.model'
import { UserSchemaType } from '@/types/userSchema.types'
import { connect } from '@/lib/connect'
import { Types } from 'mongoose'

interface UserProfile extends ProfileType, UserSchemaType {}

connect();

const userDetails  = ["name", "availablity", "phone", "experience", "address"];

export async function GET(req: NextRequest) {
    try {
        const cookieStore = cookies();

        const token = cookieStore.get('token')?.value;

        if (!token) return NextResponse.json({ message: 'Token not found' }, { status: 400 });

        const payload = JWT.verify(token, process.env.JWT_SECRET_KEY! as string) as JWT.JwtPayload;

        const userId = payload.id as string;

        // Fetch user and profile data separately
        // const user1 = await User.findById(userId).select('-password -verifyCode -verifyCodeExpiryDate').lean();
        // const profile = await Profile.findOne({ userId }).lean();

        // if (!user1 || !profile) {
        //     return NextResponse.json({ message: 'User or Profile not found' }, { status: 404 });
        // }

        // // Combine user and profile data into a single object
        // const userProfile = {
        //     ...user1,
        //     ...profile
        // };

        const userProfile = await getUserProfileData(userId)

        //  Existing User
        if(userProfile.length !== 0){
            return NextResponse.json({
                message: 'Profile fetched',
                userProfile: userProfile[0]
            }, { status: 200 });
        }

        // New User who doesn't have a profile yet.

        const newProfile = await Profile.create({
            userId,
        })


        const newUserProfile = await getUserProfileData(userId)

        if(!newProfile){
            return NextResponse.json({
                message: 'Cannot Create Your Profile',
                userProfile: newUserProfile[0]
            }, { status: 500 });
        }

        

        
    } catch (error: any) {
        console.log(error.message, 'Server Error while fetching the profile');
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function PATCH(req:NextRequest){
    try {
        const body = await req.json();
        const token = req.headers.get('authorization')?.split(' ')[1];

        if (!token) return NextResponse.json({ message: 'Token not found' }, { status: 400 });

        const payload = JWT.verify(token, process.env.JWT_SECRET_KEY! as string) as JWT.JwtPayload;

        const userId = payload.id as string;

        console.log(body,"[ Body ]")
        const detailsToUpdate = userDetails.filter((key) => Object.keys(body).includes(key));; 

        console.log(detailsToUpdate,"[ Details Check ]")
        // if()
    } catch (error: any) {
        console.log(error.message, 'Server Error while updating the profile');
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}


const getUserProfileData = async(userId : string) => {
    var userProfile = await Profile.aggregate([
        {
            $match:{
                userId :new Types.ObjectId(userId)
            }
        },
        {
            $lookup:{
                from:"users",
                localField:"userId",
                foreignField:"_id",
                as: "user"
            }
        },
        {
            $unwind: "$user"
        },
        {
            $project:{
                'user.password':0,
                'user.verifyCode':0,
                'user.verifyCodeExpiryDate':0
            }
        }
    ])

    return userProfile
}
