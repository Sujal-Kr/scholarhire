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
        console.log("middleware encountered ")
        
        if(!token){
            return NextResponse.redirect(new URL('/home', req.url))
        }
        const payload = JWT.verify(token, process.env.JWT_SECRET_KEY!) as JWT.JwtPayload;
        console.log(payload)
        req.id = payload.id;

        return NextResponse.next();
    } catch (error:any) {
        console.log(error.message);
        return NextResponse.json({error: 'Unauthorized'}, {status: 401});
    }
}