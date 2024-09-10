import { NextResponse, NextRequest } from 'next/server'
import { connect } from '@/lib/connect'
import { User } from '@/model/user.model'

connect()

export async function POST(req: NextRequest, {params}: {params: {id: string}}) {
    try {
        const { otp } = await req.json()
        const id = params.id

        const user = await User.findById(id)


        if (!user) return NextResponse.json({ message: 'Failed' }, { status: 400 })
        
        if (user.verifyCode !== otp ) {
            return NextResponse.json({
                message: 'Invalid OTP'
            }, { status: 400 })
        }

        if(user.verifyCodeExpiryDate < new Date()){
            return NextResponse.json({
                message: 'OTP expired'
            }, { status: 400 })
        }
        
        user.isVerified = true
        await user.save();

        return NextResponse.json({
            message: 'Success',
            data: { otp }
        }, { status: 200 })
    }
    catch (err) {
        return NextResponse.json({ message: 'Failed' }, { status: 400 })
    }
}
