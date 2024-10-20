import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";


import User from "@/models/user";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";
import Subscription from "@/models/subscription";




export async function GET(req, context) {
  await dbConnect()





  try {

    let user = await User.findOne({ _id: context.params.id })

    const subscription = await Subscription.findOne({ userId: user._id })
    if (!subscription) {

      return NextResponse.json({ err: "Subscription not  found" })

    }



    return NextResponse.json(subscription)



  } catch (error) {
    console.log(error)



    return NextResponse.json({ err: error.message }, { status: 500 })



  }






}


