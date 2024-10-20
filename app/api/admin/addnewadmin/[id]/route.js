import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import User from "@/models/user"


import bcrypt from "bcrypt"
export async function PUT(req, context) {


  await dbConnect()


  const body = await req.json()

  console.log(body)




  try {



    if (body.password) {
      body.password = await bcrypt.hash(body.password, 10)
    }



    const updatingUser = await User.findByIdAndUpdate(
      context.params.id
      ,
      { ...body },
      { new: true }

    )



    return NextResponse.json({ msg: "updated successfylly" }, { status: 200 })

  } catch (error) {
    console.log(error)

    return NextResponse.json({ err: error.message }, { status: 500 })

  }

}





export async function DELETE(req, context) {

  await dbConnect()



  try {

    console.log("context.params.id", context.params.id)
    const deletingUser = await User.findByIdAndDelete(context.params.id)

    console.log("deleteingUser", deletingUser)
    return NextResponse.json(deletingUser)


  } catch (error) {

    console.log("error", error)
    return NextResponse.json({ err: error.message }, { status: 500 })
  }




}