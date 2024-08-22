import { Resend } from 'resend'
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendMail({otp, email, name}:{otp:number, email:string, name:string}) {
    try {
        const {data, error} = await resend.emails.send({
            from: 'myemail@gmail.com',
            to: email,
            subject: 'OTP for verification',
            react: <Email username={name} otp={otp} />,
        })

        if( error ){
            return NextResponse.json({error: error.message}, {status: 500})
        }
    } catch (error) {
        
    }
}