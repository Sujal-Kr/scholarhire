import { NextRequest ,NextResponse } from "next/server";
import jwt from 'jsonwebtoken'


export const protectRoute=async(req:NextRequest)=>{
    try{
        const token= req.cookies.get('token')?.value;
        if(!token){
            return NextResponse.json({
                success: false,
                message:"user not logged in",
            },{status: 401})
        }
        const payload= jwt.verify(token,process.env.SECRET_KEY!)
        if(payload){
            req.id=payload.id
            NextResponse.next()
        }else{
            return NextResponse.json({
                success: false,
                message:"payload verification failed"
            },{status:400})
        }
    }catch(err){
        return NextResponse.json({
            success: false,
            message: err
        },{status:500})
    }
    
}