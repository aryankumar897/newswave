import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import bcrypt from "bcrypt"
import User from "@/models/user";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";
export const revalidate = 0;



export async function PUT(req) {
  await dbConnect()


  const body = await req.json()





  const { oldPassword, newPassword } = body




  const session = await getServerSession(authOptions)


  try {
    let user = await User.findOne({ _id: session.user._id })

    if (!user) {
      return NextResponse.json({ err: "User not found" }, { status: 404 })

    }

    const passwordMatch = await bcrypt.compare(oldPassword, user.password)

    if (!passwordMatch) {

      return NextResponse.json({ err: "Incorrect old password" }, { status: 400 })



    }


    const hashedPassword = await bcrypt.hash(newPassword, 10)

    user.password = hashedPassword
    await user.save()

    return NextResponse.json({ msg: "password  changed  successfully" }, { status: 200 })


  } catch (err) {
    console.log(err)
    return NextResponse.json({ err: err.message }, { status: 500 })

  }





}