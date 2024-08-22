import { Resend } from 'resend'
import { NextResponse } from 'next/server';
import { EmailTemplate } from '@/helper/Email';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function SendMail({ otp, email, name }: { otp: number, email: string, name: string }) {
    try {
        const { data, error } = await resend.emails.send({
            from: 'myemail@gmail.com',
            to: email,
            subject: 'OTP for verification',
            react: EmailTemplate({ username: name, otp })
        })

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json({
            message: 'Email sent successfully',
            data
        }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}