
import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";


import Banner from "@/models/banner";
export async function PUT(req, context) {

    await dbConnect()

    const body = await req.json()

    console.log("xx", body)



    try {

        const updatingBanner = await Banner.findByIdAndUpdate(

            context.params.id,

            { ...body }
            ,
            { new: true }

        )

        console.log("xx--", updatingBanner)
        return NextResponse.json(updatingBanner)





    } catch (err) {

        //   console.log(err)
        return NextResponse.json({ err: err.message }, { status: 500 })

    }



}



export async function DELETE(req, context) {

    await dbConnect()
    try {


        const deletingBanner = await Banner.findByIdAndDelete(
            context.params.id
        )

        return NextResponse.json(deletingBanner)

    } catch (error) {
        console.log(err)
        return NextResponse.json({ err: err.message }, { status: 500 })
    }
}