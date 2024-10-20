import mongoose from 'mongoose';

import User from "./user";

import Category from "./category";
import Subcategory from "./subcategory";




const newsSchema = new mongoose.Schema({

    categoryId: {

        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"

    },

    subcategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subcategory"


    },




    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },



    title: {

        type: String,
        required: true

    },


    subtitle: {
        type: String,
        required: true
    },

    slug: {

        type: String,

        required: true,
        unique: true
    },


    image: {
        type: String,
        required: true,
    },


    imagecaption: {

        type: String,
        required: true

    },




    description: {
        type: String,
        required: true
    },



    topRight: {

        type: String,

        default: "inactive"
    },


    slider: {

        type: String,

        default: "inactive"
    },

    breakingNews: {

        type: String,

        default: "inactive"


    },




    analisis: {

        type: String,

        default: "inactive"


    },


    podcast: {
        type: String,
        default: "inactive"

    },



   newsLatter: {
        type: String,
        default: "inactive"

    },




    live: {
        type: String,
        default: "inactive"

    },



 status:{
     type: String,
     default: "inactive"

 },



views:{
type:Number,
default:0

}



}, { timestamps: true })



export default mongoose.models.News || mongoose.model("News", newsSchema)


