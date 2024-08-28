import { User } from '@/model/user.model'
import * as JWT from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { Types } from 'mongoose'
import Profile from '@/model/profile.model'

export async function GET(req: NextRequest) {
    try {
        const cookieStore = cookies()

        const token = cookieStore.get('token')?.value

        if (!token) return NextResponse.json({ message: 'Token not found' }, { status: 400 })

        const payload = JWT.verify(token, process.env.JWT_SECRET_KEY!) as JWT.JwtPayload

        const userId = new Types.ObjectId(payload.id as string)

        const user = await Profile.aggregate([
            {
                $match:{
                    userId
                }
            },
            {
                $lookup:{
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'user'
                }
            },
            {
                $unwind: '$user'
            },
            {
                $project:{
                    user:{
                        verifyCode: 0,
                        password: 0,
                        verifyCodeExpiryDate:0
                    }
                }
            }
        ])

        console.log(user, "[User Details from the aggregate query]")
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 })
        }
        // const userId = payload.id as string
        return NextResponse.json({
            message: 'Profile fetched',
            user
        }, { status: 200 })
    } catch (error: any) {
        console.log(error.message, 'Server Error while fetching the profile')
        NextResponse.json({ message: error.message }, { status: 500 })
    }
}