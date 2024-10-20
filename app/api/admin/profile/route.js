import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";



import User from "@/models/user";


import { getServerSession } from "next-auth/next";

import { authOptions } from "@/utils/authOptions";



export async function PUT(req) {
    await dbConnect()

    const body = await req.json()



    const { name, username, email, phone, image } = body








    const session = await getServerSession(authOptions);
    try {


        let user = await User.findOne({ _id: session.user._id })

        if (!user) {

            return NextResponse.json({ err: "User not  found" }, { status: 404 })

        }


        if (user) {



            user.name = name || user?.name
            user.username = username || user?.username
            user.email =  user?.email
            user.phone = phone || user?.phone
            user.image = image || user?.image


             await user.save()

        } else {

            const user = await User.create({

                name, username, email, phone, image





            })




        }



        return NextResponse.json({ msg: " profile created successfully" }, { status: 200 })


    } catch (err) {

        console.log(err)
        return NextResponse.json({ err: err.message }, { status: 500 })

    }






}





export async function GET() {

    await dbConnect()

    const session = await getServerSession(authOptions)


    try {

        let user = await User.findOne({ _id: session.user._id })
        return NextResponse.json(user)




    } catch (error) {
        console.log(err)
        return NextResponse.json({ err: err.message }, { status: 500 })

    }



}