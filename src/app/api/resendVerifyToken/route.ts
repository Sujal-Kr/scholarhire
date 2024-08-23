import { NextRequest, NextResponse } from 'next/server';
import { User } from '@/model/user.model';
import generateOTP from "@/utils/otpGen";
import SendMail from "@/utils/mailTransfer";


export async function POST(req: NextRequest){
    try {
        const {id :userId} = await req.json() 
        const otp = generateOTP()

        const user = await User.findById(userId)

        if(!user) 
            return NextResponse.json({ message: "User not found" }, { status: 404 })

        const response = await SendMail({otp, email:user.email, name:user.name})

        if(response.status !== 200){
            return NextResponse.json({ message: "failed to send OTP" }, { status: 500 })
        }

        user.verifyCode = otp
        user.verifyCodeExpiryDate = new Date(Date.now() + 1000*60*2 )
        await user.save()

        return NextResponse.json({ message: "OTP sent successfully" }, { status: 200 })
    } catch (error: any) {
        console.log(error.message)
        return NextResponse.json({ error: error.message }, { status: 500 })
        
    }
}