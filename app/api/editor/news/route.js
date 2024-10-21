import { NextResponse } from "next/server";


import dbConnect from "@/utils/dbConnect";

export const revalidate = 0;
import slugify from "slugify"

import User from "@/models/user";


import News from "@/models/newspost"

import { getServerSession } from "next-auth/next";


import { authOptions } from "@/utils/authOptions";


export async function GET() {

  await dbConnect()

  const session = await getServerSession(authOptions)


  try {

    let user = await User.findOne({ _id: session.user._id })

    const news = await News.find({


      user_id: user?._id,

    })
      .populate("categoryId")
      .populate("subcategoryId")
      .sort({ createAt: -1 })


    return NextResponse.json(news)






  } catch (err) {
    console.log(err)

    return NextResponse.json({ err: err.message }, { status: 500 })

  }

}


export async function POST(req) {

  await dbConnect()



  const body = await req.json()

  const session = await getServerSession(authOptions)




  let user = await User.findOne({ _id: session.user._id })



  if (!user) {

    return NextResponse.json({ err: "No user  found" }, { status: 404 })

  }

  const {

    categoryId, subcategoryId, title, subtitle, image, imagecaption,

    description, topRight, slider, breakingNews, analisis, live, status, podcast, newsLatter

  } = body



  try {

    const news = await News.create({

      user_id: user?._id,


      categoryId, subcategoryId, title, subtitle, image, imagecaption,

      description, topRight, slider, breakingNews, analisis, live, status, podcast,
      newsLatter,

      slug: slugify(title)



    })

    console.log("success", news)

    return NextResponse.json({ msg: "news created successfully" },
      { status: 200 })



  } catch (err) {
    console.log("err", err)

    return NextResponse.json({ err: err.message }, { status: 500 })

  }

}