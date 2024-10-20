import { NextResponse } from "next/server";


import Stripe from "stripe"

import dbConnect from "@/utils/dbConnect";

import User from "@/models/user";
import { getServerSession } from "next-auth/next";

import { authOptions } from "@/utils/authOptions";

const stripeInstance = new Stripe("sk_test_51K5nvYSGgs9C5RdZpIIhINkUXAcMb46wbwGbJiGGWlt2VXjXhjP6wQerucW9lc3AUDCoMZ3ArV3zLIMxCQRSI24100pNDDDSew")



export async function POST() {


  await dbConnect()

  const sessions = await getServerSession(authOptions)


  try {


    console.log(sessions)

    const user = await User.findOne({ _id: sessions?.user?._id })


    console.log("userx", user)


    if (!user) {

      return NextResponse.json({ err: "user not found" }, { status: 500 })

    }



    const session = await stripeInstance.checkout.sessions.create({


      payment_method_types: ['card'
      ],

      line_items: [{

        price_data: {

          currency: "INR",

          product_data: {

            name: "NewsWave Subscription"

          },



          //600 *100

          unit_amount: 60000





        },


        quantity: 1

      }],

      mode: "payment",



      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,

      customer_email: user?.email,
       metadata:{

        userId:user?._id.toString()
       }

    })



    console.log("sessions", session)

 return NextResponse.json({id: session.url})


  } catch (error) {


    console.log(error)

    return NextResponse.json({ err: error.message }, { status: 500 })


  }






}