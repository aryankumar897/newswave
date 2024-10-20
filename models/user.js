import mongoose from "mongoose";


const Schema = mongoose.Schema;




const UserSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,

    },


    password: {
        type: String,
        required: true,


    },



    image: {

        type: String,
        required: false,
        default: 'https://placehold.co/600x400?text=News+Wave'
    },



    role: {
        type: String,
        enum: ['user', 'admin', "editor"],
        default: 'user'

    },

    status: {
        type: String,
        enum: ['active', 'inactive', "pending"],
        default: 'inactive'

    },


    subscription: {
        type: String,


    },



}, { timestamps: true })




export default mongoose.models.User|| mongoose.model("User", UserSchema)