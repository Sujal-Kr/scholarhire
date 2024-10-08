import { ProfileType } from "@/model/profile.model";
import axios from "axios";
import { CookieValueTypes, getCookie } from "cookies-next";

export async function UpdateProfileDetails(data: Partial<ProfileType>) {
    try {
		const token : CookieValueTypes = getCookie('token')
        

        const response = await axios.patch('/api/profile', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        

        if (response.status === 200) {
            return { 
                status: 200, 
                message:"Details Updated Successfully",
                data: response.data 
            }
        }

        return { 
            status: 500,  
            message:"Details Update Failed"
        }
    } catch (error : any) {
        throw new Error(`Error while Updating Profile Details: ${error.message}`)
    }
}
