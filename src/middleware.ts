import { NextRequest, NextResponse } from 'next/server';

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

export function middleware(req: NextRequest) {
    const publicPath = ['/', '/login', '/signup'];
    const token = req.cookies.get('token')?.value;
    const path = req.nextUrl.pathname;

    if (publicPath.includes(path) && token) {
        if (path !== '/') {
            NextResponse.redirect(new URL('/', req.url));
        }
    } else if (!publicPath.includes(path) && !token) {
        if (path !== '/login') {
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }
    return NextResponse.next();
}
