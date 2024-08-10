import mongoose from "mongoose";


const uri=process.env.URI 
type ConnectionObject={
    isConnected?:number
}
const connection:ConnectionObject={}
export const connect=async ()=>{
    if(connection.isConnected){
        console.log("Database connected allready");
    }
    try{
        const db=await mongoose.connect(uri || "",{})
        connection.isConnected=db.connections[0].readyState
    }catch(err){
        console.log("Connection failed: " + err)   
    }
}
connect()