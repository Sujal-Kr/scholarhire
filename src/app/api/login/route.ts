import { connect } from '@/lib/connect';
import { User } from '@/model/user.model';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import * as JWT from 'jsonwebtoken';

connect();

export const cookieConfig = {
    httpOnly: false,
    maxAge: 60 * 60 * 24,
    sameSite: 'strict' as const,  // Ensuring TypeScript knows this is a specific string
};

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
        }

        // generate token and send it to the client
        const token = JWT.sign({
            id: user._id,
            email: user.email,
        }, process.env.JWT_SECRET_KEY!, { expiresIn: '1d' });

        const response = NextResponse.json({
            message: 'Login Success',
            user,
        }, { status: 200 });

        // Correctly set the cookie with the token
        response.cookies.set({
            name: 'token',
            value: token,
            ...cookieConfig,
        });

        return response;
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
