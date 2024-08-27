import { NextRequest, NextResponse } from 'next/server';
import * as JWT from 'jsonwebtoken';

interface CustomRequest extends NextRequest{
    id? :   string;
}

export const config = {
    matcher : [
        '/',
        '/login',
        '/signup',
        '/profile',
        '/message',
        '/jobs',
        '/jobs/(.*)',
        '/api/profile',
    ]
}

export function middleware( req: CustomRequest ){
    const publicPath = ['/','/login', '/signup'];
    
    try {
        const path=req.nextUrl.pathname
        const token = req.cookies.get('token')?.value;
        console.log( "Middleware" );
        if(publicPath.includes(path)&&token){
            return NextResponse.redirect(new URL('/', req.url))
        }
        if(!publicPath.includes(path)&&!token){
            return NextResponse.redirect(new URL('/login', req.url))
        }
    } catch (error:any) {
        console.log(error.message);
        return NextResponse.json({error: 'Unauthorized'}, {status: 401});
    }
}