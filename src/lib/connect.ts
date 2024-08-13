import mongoose from "mongoose";


const uri: string = process.env.URI!

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

export const connect = async () => {

    if ( !uri)
        throw new Error("URI is missing. Please add URI in .env file")

    if (connection.isConnected && connection.isConnected === 1) {
        console.log("Database connected allready");
        return;
    }
    try {
        const db = await mongoose.connect(uri || "")    

        connection.isConnected = db.connections[0].readyState

        if (connection.isConnected === 1)
            console.log("Database connected successfully")
        else
            console.log("Database connected but not ready")
    } catch (err) {
        console.log("Connection failed: " + err)
    }
}

connect()