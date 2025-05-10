import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type:string,
        required:true
    },
    email:{
        type:string,
        required:true
    },
    password:{
        type:string,
        required:true
    },
    profilePhoto:{
        type:string,
        required:true
    },

},{timestamps})
export const User = mongoose.model("User",userSchema);