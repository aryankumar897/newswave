
import { NextResponse } from "next/server"


import dbConnect from "@/utils/dbConnect";



import slugify from "slugify"



import Banner from "@/models/banner"


export async function POST(req) {


    await dbConnect()

    const body = await req.json()


     console.log(body)
    const {


        title, imageUrl,
        top,
        right,
        left,
         bottom,
        status

    } = body




    try {

        const banner = await Banner.create({


            title,
            imageUrl, top, right, left, bottom, status
        })

        return NextResponse.json(banner)



    } catch (err) {
        console.log(err)



        return NextResponse.json({ err: err.message }, { status: 500 })

    }



}




export async function GET() {

    await dbConnect()



    try {

        const banner = await Banner.find({}).sort({ createdAt: -1 })

        return NextResponse.json(banner)

    } catch (err) {

        console.log(err)

        return NextResponse.json({ err: err.message }, { status: 500 })
    }



}