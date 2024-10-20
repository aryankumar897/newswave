import { NextResponse } from "next/server";


import Stripe from "stripe"

import dbConnect from "@/utils/dbConnect";

import User from "@/models/user";
import { getServerSession } from "next-auth/next";

import { authOptions } from "@/utils/authOptions";

const stripeInstance = new Stripe("sk_test_51K5nvYSGgs9C5RdZpIIhINkUXAcMb46wbwGbJiGGWlt2VXjXhjP6wQerucW9lc3AUDCoMZ3ArV3zLIMxCQRSI24100pNDDDSew")
import Subscription from "@/models/subscription";
import Order from "@/models/order";

export async function GET(req, context) {


  await dbConnect()


  const sessionuser = await getServerSession(authOptions)



  try {



    const session = await stripeInstance.checkout.sessions.retrieve(context.params.id)

    console.log("sess", session)



    if (session && session?.payment_status === "paid") {

      const user = await User.findOne({ _id: sessionuser?.user._id })



      const alreadysubscription = await Subscription.findOne({ userId: user?._id })

      const currentDate = new Date()

      const userId = session.metadata.userId

      if (alreadysubscription) {


        if (currentDate < alreadysubscription.endDate) {
          //extend the  end date of the subscription by one year from the  current end date

          //20 days +1 year

          console.log("1++ yaera")
          const updatedEndDate = new Date(alreadysubscription.endDate)

          updatedEndDate.setFullYear(updatedEndDate.getFullYear() + 1)

          alreadysubscription.endDate = updatedEndDate;

          const order = new Order({
            userId,
            transactionId: session.id,
            orderStatus: "Completed",
            paymentMethod: "Credit Card",
            paymentStatus: "Paid",
            totalPrice: "600"

          })

          await order.save()

        } else {

          // if the subscription has expired,extend the subscription for one year from  the  current date

          //+1 year
          console.log("1+ yaera")
          const newEndDate = new Date()

          newEndDate.setFullYear(newEndDate.getFullYear() + 1)
          alreadysubscription.endDate = newEndDate


          const order = new Order({
            userId,
            transactionId: session.id,
            orderStatus: "Completed",
            paymentMethod: "Credit Card",
            paymentStatus: "Paid",
            totalPrice: "600"

          })

          await order.save()

        }

        await alreadysubscription.save()


        console.log("Updated subscription for user:", userId);



      } else {


        const subscription = new Subscription({
          userId,
          stripesubscriptionId: session.id,
          startDate: new Date(),
          endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
          price: "600",

        })


        await subscription.save()


        const order = new Order({
          userId,
          transactionId: session.id,
          orderStatus: "Completed",
          paymentMethod: "Credit Card",
          paymentStatus: "Paid",
          totalPrice: "600"

        })

        await order.save()
        await User.findByIdAndUpdate(userId, { subscription: subscription?._id })

      }






      return NextResponse.json({ success: "payment varify" }, { status: 200 })


    } else {


      return NextResponse.json({ err: "payment failed ,please try again" }, { status: 500 })


    }








  } catch (error) {




    console.log("payment error", error)



    return NextResponse.json({ err: error.message }, { status: 500 })

  }







}
