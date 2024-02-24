import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";
const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("MongoDB connected successfully");
    }
    catch(error)
    {
        console.error("MongoDB connection failed");
    }
}
export default connectDB;
