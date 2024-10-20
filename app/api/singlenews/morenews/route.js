import { NextResponse } from "next/server";


import dbConnect from "@/utils/dbConnect";

import News from "@/models/newspost"




export async function GET() {
  await dbConnect()



  try {
    let news = await News.find({})





    const trendingNews = await News.find().sort({ views: -1 }).limit(5)


    return NextResponse.json({ news, trendingNews })


  } catch (error) {
    console.log(error)
    return NextResponse.json({ err: err.message }, { status: 500 })
  }





}