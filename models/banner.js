import mongoose from "mongoose"


const bannerSchema = new mongoose.Schema({
    imageUrl: {

        type: String,
        required: true

    },


    title: {

        type: String,
        required: true,
        minLength: 1,
        maxLength: 500,
    },


    top: {


        type: String,

        default: "inactive"

    },


    bottom: {


        type: String,
        default: "inactive"
    },




   left: {


        type: String,
        default: "inactive"
    },



    right: {


        type: String,
        default: "inactive"

    },

    status: {

        type: String,
        default: "inactive"


    },




}, { timestamps: true })



export default mongoose.models.Banner || mongoose.model("Banner", bannerSchema)