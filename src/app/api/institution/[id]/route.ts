import { connect } from '@/lib/connect'
import InstitutionModel from '@/model/institution.model'
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function GET(req:NextRequest, {params}: {params: {id: string}}){
    try {
        const institutionId = params.id

        console.log(institutionId)
        if(!institutionId){
            return NextResponse.json({message:"Institution has been removed or some error has occured"})
        }

        const institutionData = await InstitutionModel.findById(institutionId)

        if(!institutionData)
            return NextResponse.json({message:"Institution not Got with the specific _ID"})

        return NextResponse.json({
            message:"Successfull Fetched the Details",
            data:institutionData
        })
    } catch (error:any) {
        return NextResponse.json({message:`Something Went SOUTH : ${error.message}`},{status:500})
    }
}
