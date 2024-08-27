import { NextRequest, NextResponse } from 'next/server';
import * as JWT from 'jsonwebtoken';

interface CustomRequest extends NextRequest {
    id?: string;
}

export const config = {
    matcher: [
        '/',
        '/login',
        '/signup',
        '/profile',
        '/message',
        '/jobs',
        '/jobs/(.*)',
        '/api/profile',
    ]
};

export function middleware(req: CustomRequest) {
    const publicPath = ['/', '/login', '/signup'];
    const token = req.cookies.get('token')?.value;
    const path = req.nextUrl.pathname;

    if (publicPath.includes(path) && token) {
        if (path !== '/') {
            return NextResponse.redirect(new URL('/', req.url));
        }
    } else if (!publicPath.includes(path) && !token) {
        if (path !== '/login') {
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }

    return NextResponse.next();
}
