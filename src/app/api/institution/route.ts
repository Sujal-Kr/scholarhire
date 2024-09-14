import { connect } from "@/lib/connect";
import InstitutionModel from "@/model/institution.model";
import { NextResponse } from "next/server";

connect();

export async function GET() {
    try {
        const institutionData = await InstitutionModel.find()

        if (!institutionData) {
            return NextResponse.json({ message: "Something went SOUTH" }, { status: 400 })
        }

        return NextResponse.json({
            message: "SuccessFully Fetch Details",
            data: institutionData
        }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ message: `Error occured while fetching institution: ${error.message}` }, { status: 500 })
    }
}
