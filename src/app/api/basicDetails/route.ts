import { User } from "@/model/user.model";
import * as JWT from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
    try {
        const body = await req.json()

        const token = req.headers.get("authorization")?.split(" ")[1]

        if (!token) return NextResponse.json({ message: 'Token not found' }, { status: 400 });

        const payload = JWT.verify(token, process.env.JWT_SECRET_KEY as string) as JWT.JwtPayload

        const userId = payload.id as string

        const user = await User.findOneAndUpdate({ _id: userId }, body, { new: true })

        if(!user){
            return NextResponse.json({
                message:"User Not Found to Update",
            },{status:500})
        }

        return NextResponse.json({
            message:"User Details Updated Successful",
            user
        },{status:200})

    } catch (error: any) {
        return NextResponse.json({
            message:"Failed to Update"
        },{status:500})
    }
}
