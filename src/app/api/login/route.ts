import { connect } from '@/lib/connect'
import { User } from '@/model/user.model'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

connect();

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json()

        const user = await User.findOne({ email })

        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
        }

        // generate token and send it to the client

        return NextResponse.json({
            message: 'Login Success',
            user
        }, { status: 200 })
    } catch (error: any) {
        NextResponse.json({ message: error.message }, { status: 500 })
    }
}