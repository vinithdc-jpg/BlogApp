import mongoose from "mongoose";

export const ConnetDB = async ()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/blog_app');
    console.log("DB connected")
}