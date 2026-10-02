import mongoose from "mongoose";


async function connectDB(connString){
    try{
        if(!connString){

            throw new Error("Connection string is not provided");
        }
        const con = await mongoose.connect(connString);
        console.log("Connected to MongoDB",con.connection.host);
    }catch(err){
        console.log("connection failed",err);
        process.exit(1);
    }
}

export default connectDB;