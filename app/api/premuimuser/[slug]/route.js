import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import News from "@/models/newspost"
export const revalidate = 0;

import User from "@/models/user"
import Subscription from "@/models/subscription"


export async function POST(req, context) {

  await dbConnect()

  const body = await req.json()

  const { userId } = body




  try {

 

    const user = await User.findOne({ _id: userId })

  






    const subscription =  await   Subscription.findOne({ userId: user._id })

 console.log("subxxxxxxxxxxxxxxxxxxx"  , subscription)



    if (!subscription) {



      return NextResponse.json({ err: "Not authenticated" }, { status: 500 })
    }


    const news = await News.findOne({ slug: context.params.slug })
      .populate("categoryId")
      .populate("subcategoryId")
      .populate("user_id")

 console.log("news=============================", news)
 return NextResponse.json(news)

  } catch (error) {

    console.log(error)
    return NextResponse.json({ err: error.message }, { status: 500 })



  }




}


