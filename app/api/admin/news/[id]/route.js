import { NextResponse } from "next/server";


import dbConnect from "@/utils/dbConnect";


import slugify from "slugify"

import User from "@/models/user";


import News from "@/models/newspost"

import { getServerSession } from "next-auth/next";


import { authOptions } from "@/utils/authOptions";


export async function PUT(req, context) {


    await dbConnect()
    const body = await req.json()







    try {


        const updatingNews = await News.findByIdAndUpdate(
            context.params.id
            ,
            {

                ...body
            },

            { new: true }
        )



        console.log("updatingNews", updatingNews)

        return NextResponse.json(updatingNews)

    } catch (err) {



        return NextResponse.json({ err: err.message }, { status: 500 })
    }


}





export async function DELETE(req, context) {


    await dbConnect()

    try {



        const deleteingNews = await News.findByIdAndDelete(
            context.params.id
        )


       return NextResponse.json({msg:"news deleted successfully"},{status:200})

    } catch (err) {

        return NextResponse.json({ err: err.message }, { status: 500 })


    }


}