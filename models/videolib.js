import mongoose from "mongoose";


const Schema = mongoose.Schema

const videolibSchema = new Schema({


    title: {

        type: String,
        required: true,
        trim: true,
        unique: true

    },


    image: {

        type: String,
        required: true,
        trim: true,

    },


    url: {



        type: String,
        required: true,
        trim: true,
    },


    postDate: {

        type: Date,
        default: Date.now

    },


}, { timestamps: true })





export default mongoose.models.Videolib || mongoose.model("Videolib", videolibSchema)