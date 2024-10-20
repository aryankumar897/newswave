import { NextResponse } from "next/server";


import dbConnect from "@/utils/dbConnect";



import Videolib from "@/models/videolib"


export async function GET() {

    await dbConnect()


    try {



        const videolib = await Videolib.find({}).sort({ createdAt: -1 })




        return NextResponse.json(videolib)

    } catch (error) {
        return NextResponse.json({ err: error.message }, { status: 500 })
    }



}