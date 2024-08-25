import { NextRequest, NextResponse } from 'next/server';
import * as JWT from 'jsonwebtoken';

interface CustomRequest extends NextRequest{
    id? :   string;
}

export const config = {
    matcher : ['/profile','/message','/jobs','/jobs/(.*)']
}

export function middleware( req: CustomRequest ){
    try {
        const token = req.cookies.get('token')?.value;

        if(!token){
            return NextResponse.redirect('/login');
        }

        const payload = JWT.verify(token, process.env.JWT_SECRET_KEY!) as JWT.JwtPayload;
        
        req.id = payload.id;

        console.log(payload,"[PAYLOAD IN THE MIDDLEWARE]")

        return NextResponse.next();
    } catch (error) {
        NextResponse.json({error: 'Unauthorized'}, {status: 401});
    }
}