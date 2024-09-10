import { UserSchemaType } from "@/types/userSchema.types";
import axios from "axios";
import { CookieValueTypes, getCookie } from "cookies-next";

export async function UpdateUserDetails(data: Partial<UserSchemaType>) {
    try {
		const token : CookieValueTypes = getCookie('token')
        console.log(data, "[Current UpdateProfile Data]")

        const response = await axios.patch('/api/basicDetails', data, {
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
        throw new Error("Error while Updating Profile Details", error.message)
    }
}
