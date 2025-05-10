import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
    to:{
        type:string,
        required:true
    },
    subject:{
        type:string,
        required:true
    },
    message:{
        type:string,
        required:true
    },

},{timestamps})
export const Email = mongoose.model("Email",emailSchema);