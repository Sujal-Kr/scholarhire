import axios from "axios";

export async function GetInstitution() {
    try {
		
        const response = await axios.get('/api/institution')
        if(response.status !== 200){
            throw new Error('Opps Something went South...!')
        }
        return { 
            status: 200,  
            message:response.data.message,
            institution: response.data.data
        }
    } catch (error : any) {
        throw new Error(`Error while fetching Institution Details: ${error.message}`)
    }
}
