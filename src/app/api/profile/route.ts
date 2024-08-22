import { User } from '@/model/user.model'
import { NextRequest, NextResponse } from 'next/server'


export async function PUT(req: NextRequest) {
    try {
        const { headline, carrierProfile, education, skills, summary } = await req.json()

        // const resume = req.files[0]
        const resume = ''

        if (!headline && !carrierProfile && !education && !skills && !summary && !resume)
            return NextResponse.json({ message: 'No field updated' }, { status: 400 })

        const updatedUser = await User.findOneAndUpdate({ email: 'user_email@gmail.com' }, { data: 'userData' })
   
    } catch (error: any) {
        console.log(error.message, 'Server Error while updating the profile')
        NextResponse.json({ message: error.message }, { status: 500 })
    }
}