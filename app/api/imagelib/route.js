import { NextResponse } from "next/server";



import Imagelib from "@/models/imagelib"


import dbConnect from "@/utils/dbConnect";



export async function GET(req) {

    await dbConnect()
  console.log("imagelib================================================")
    try {

        const images = await Imagelib.find({})

        console.log(images)

        return NextResponse.json(images)





    } catch (error) {

        console.log(error)

    }


}