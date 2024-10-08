import { connect } from "@/lib/connect";
import { NextRequest, NextResponse } from 'next/server';
import { User } from '@/model/user.model';
import generateOTP from "@/utils/otpGen";
import SendMail from "@/utils/mailTransfer";
import Profile from "@/model/profile.model";

connect();

export async function POST(req: NextRequest) {
    try {
        const { name, email, password } = await req.json()
        // console.log('Request Body : ',await req.json())
        const user = await User.create({
            name: name.charAt(0).toUpperCase() + name.substring(1).toLowerCase(),
            email,
            password
        })

        if (!user)
            return NextResponse.json({ error: "User not created" }, { status: 400 })

        const otp = generateOTP()

        user.verifyCode = otp
        user.verifyCodeExpiryDate = new Date(Date.now() + 60000 * 2)
        await user.save()

        // send Mail to the user
        const response = await SendMail({otp, email, name})

        if( response.status !== 200){
            return NextResponse.json({ error: 'Email Not Sent' }, { status: 500 })
        }

        await Profile.create({
            userId: user._id
        })

        return NextResponse.json({
            success: true,
            message: "User created successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            }
        }, { status: 201 })

    } catch (error: any) {
        console.log(error.message)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
