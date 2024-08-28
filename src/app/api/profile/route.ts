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

export async function GET(req: NextRequest) {
    try {
        const cookieStore = cookies();

        const token = cookieStore.get('token')?.value;

        if (!token) return NextResponse.json({ message: 'Token not found' }, { status: 400 });

        const payload = JWT.verify(token, process.env.JWT_SECRET_KEY!) as JWT.JwtPayload;

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

        const userProfile : UserProfile[] = await Profile.aggregate([
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

        return NextResponse.json({
            message: 'Profile fetched',
            user: userProfile[0]
        }, { status: 200 });
    } catch (error: any) {
        console.log(error.message, 'Server Error while fetching the profile');
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
