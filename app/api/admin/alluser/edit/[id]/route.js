import { NextResponse } from "next/server"


import dbConnect from "@/utils/dbConnect"
import User from "@/models/user"

export async function GET(req, context) {
  await dbConnect()




  try {
    let user = await User.findOne({_id:context.params.id})

    return NextResponse.json(user)




  } catch (error) {
    console.log(error)

    return NextResponse.json({ err: error.message }, { status: 500 })

  }




}