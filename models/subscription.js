import mongoose from 'mongoose'
const Schema = mongoose.Schema


import User from './user'

const subscriptionSchema = new Schema({

    userId: {


        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true

    },


    stripesubscriptionId: {

        type: String,
        required: true

    },




    startDate: {

        type: Date,
        default: Date.now

    },


    endDate: {

        type: Date,
        required: true

    },

    price:{

        type: Number,
        default: "600"
    }






} , {   timestamps: true}  )


export default mongoose.models.Subscription || mongoose.model("Subscription", subscriptionSchema)