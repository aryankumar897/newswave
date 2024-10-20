import { NextResponse } from "next/server"


import dbConnect from "@/utils/dbConnect"

import { getServerSession } from "next-auth/next"

import { authOptions } from "@/utils/authOptions"

import Order from "@/models/order"

export async function GET(req, context) {

  await dbConnect()


  const session = await getServerSession(authOptions)





  try {
    const order = await Order.find({ userId: session?.user?._id })

    return NextResponse.json(order)


  } catch (error) {


    console.log(error)
    return NextResponse.json({ err: error.message }, { status: 500 })

  }



}




