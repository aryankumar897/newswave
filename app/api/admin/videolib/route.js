import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"



import Videolib from '@/models/videolib'

export async function POST(req) {



    await dbConnect()

    const body = await req.json()

    const { title, image, url } = body



    console.log({ title, image, url })

    try {

        const videolib = await Videolib.create({ title, image, url })
        console.log(videolib)

        return NextResponse.json({ msg: "videolib created" }, { status: 200 })



    } catch (err) {
        console.log(err)


        return NextResponse.json({ err: err.message }, { status: 500 })



    }





}



export async function GET() {

    await dbConnect()

    try {

        const videolib = await Videolib.find({}).sort({ createdAt: -1 })


 console.log("video lib",videolib)

        return NextResponse.json(videolib)




    } catch (error) {



        return NextResponse.json({ err: error.message }, { status: 500 })
    }



}
