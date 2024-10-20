import { NextResponse } from "next/server"

import bcrypt from "bcrypt"
import dbConnect from "@/utils/dbConnect"
import User from "@/models/user"

export async function GET() {
  await dbConnect()




  try {
    let user = await User.find({role:'admin'})

    return NextResponse.json(user)




  } catch (error) {
    console.log(error)

    return NextResponse.json({ err: error.message }, { status: 500 })

  }




}





export async function POST(req) {
  await dbConnect()

 const body=await  req.json()




 const {name,email,phone,password,username} = body
  try {






    const user=await User.create({  
      name, email, phone,
       password: await bcrypt.hash(password, 10)
      
      
      , username,
      role:"admin", 
      status:"active"


     })


    return NextResponse.json(user)


  } catch (error) {
    console.log(error)

    return NextResponse.json({ err: error.message }, { status: 500 })

  }




}