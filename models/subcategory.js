import mongoose from "mongoose";

import Category from "./category";


const SubcategorySchema = new mongoose.Schema({



    name: {


        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 60

    },


    categoryId: {


        type: mongoose.Schema.Types.ObjectId,

        ref: 'Category'

    },





    slug: {


        type: String,
        required: true,

        unique: true

    },




}, { timestamps: true })



export default mongoose.models.Subcategory || mongoose.model("Subcategory", SubcategorySchema)