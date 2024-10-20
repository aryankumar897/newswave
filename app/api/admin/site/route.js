import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import SiteSetting from "@/models/sitesettings";



export async function POST(req) {



  await dbConnect()


  const body = await req.json()

  const { logo, facebookUrl, youtubeUrl, twitterUrl } = body

  try {

    const siteSettings = await SiteSetting.findOneAndUpdate({}, {




      logo, facebookUrl, youtubeUrl, twitterUrl
    }, { new: true, upsert: true })



    return NextResponse.json(siteSettings)

  } catch (error) {
    return NextResponse.json({ err: error.message }, { status: 500 })
  }







}



export async function GET(req) {




  await dbConnect()

  try {

    const siteSettings = await SiteSetting.findOne({})

    return NextResponse.json(siteSettings)


  } catch (error) {


    return NextResponse.json({ err: error.message }, { status: 500 })


  }




}