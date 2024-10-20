
import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";


import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";

import News from "@/models/newspost";


export async function POST(req) {
  await dbConnect()

  const body = await req.json()

  try {
    let news = await News.findOne({ _id: body.id })

    console.log(news)
    return NextResponse.json(news);

  } catch (err) {
    console.log(err)
    return NextResponse.json({ err: err.message })
  }


}
