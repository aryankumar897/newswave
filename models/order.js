import mongoose from "mongoose";


const Schema = mongoose.Schema;


import User from "./user"

const OrderSchema = new Schema({

  userId: {
    type: Schema.Types.ObjectId,

    ref: "User",
    required: true
  },
  orderStatus: {
    type: String,
    default: "Completed"
  },

  paymentMethod: {
    type: String,
    default: "Credit Card"
  },
  paymentStatus: {

    type: String,
    default: 'Paid'

  },

  transactionId: {

    type: String,
    required: true


  },

  totalPrice: {

    type: Number,
    required: true
  }

}, { timestamps: true })




export default mongoose.models.Order || mongoose.model("Order", OrderSchema)