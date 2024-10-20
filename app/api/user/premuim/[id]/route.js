import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";
import Subscription from "@/models/subscription";

import User from "@/models/user";
import News from "@/models/newspost";



export async function GET(req, context) {

  await dbConnect()
  const sessions = await getServerSession(authOptions)




  try {


    const user = await User.findOne({ _id: sessions.user._id })

    const res = context.params?.id.toString() === user?._id.toString()

 console.log("res",res)

    console.log("context.params?.id", context.params?.id.toString())
    console.log("user?._id", user?._id.toString())



    if (!res) {

      return NextResponse.json({ err: "unauthorized access" }, { status: 500 })
    }

    const subscription = await Subscription.findById(user?.subscription)



    if (subscription && subscription.endDate > new Date()) {

      const primuim= await News.find({ analisis: "active", status: "active" })

      console.log("primuim artical", primuim)
      return NextResponse.json(primuim)


    } else {


      return NextResponse.json({ err: "subscription expired" }, { status: "500" })

    }






  } catch (error) {
    console.log(error)

    return NextResponse.json({ err: error.message }, { status: 500 })


  }


}