import { NextResponse } from "next/server";
import { connect } from '@/lib/connect'

connect() 

export async function GET(){
    try{
        let response = NextResponse.json({
            message:"user logged out successfully"
        },{status:200})
        response.cookies.set('token','')
        return response
    }catch(err:any){
        return NextResponse.json({
            message:"Error"+err.message
        });
    }
}