import { connect } from "@/lib/connect";
import { NextRequest, NextResponse } from 'next/server';
import { User } from '@/model/user.model';
import generateOTP from "@/utils/otpGen";

connect();

export async function POST(req: NextRequest) {
    try {
        const { name, email, password } = await req.json()
        // console.log('Request Body : ',await req.json())
        const user = await User.create({ name, email, password })

        if (!user)
            return NextResponse.json({ error: "User not created" }, { status: 400 })

        const otp = generateOTP()

        user.verifyCode = otp
        user.verifyCodeExpiryDate = new Date(Date.now() + 60000 * 2)
        await user.save()

        return NextResponse.json({
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