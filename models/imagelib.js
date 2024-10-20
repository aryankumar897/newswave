import mongoose from "mongoose";




const ImagelibSchema = new mongoose.Schema({



    public_id: {


        type: String,
        required: true,


    },


    url: {


        type: String,
        required: true,


    },




}, { timestamps: true })



export default mongoose.models.Imagelib || mongoose.model("Imagelib", ImagelibSchema)