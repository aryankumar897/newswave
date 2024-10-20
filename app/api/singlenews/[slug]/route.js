import { NextResponse } from "next/server";


import dbConnect from "@/utils/dbConnect";


import News from "@/models/newspost"

import Banner from "@/models/banner"
export async function GET(req, context) {

  await dbConnect()
  console.log("single news")

  try {

    let news = await News.findOne({

      slug: context.params.slug

    }).populate("categoryId")
      .populate("subcategoryId")
      .populate("user_id")



    if (news) {


      news.views += 1;
      await news.save()

    }



    let relateNews

    if (news) {


      relateNews = await News.find({
        categoryId: news.categoryId._id,

        _id: {
          $ne: news._id
        }

      }).populate("categoryId")
        .populate("subcategoryId")
        .populate("user_id")




    }

    let banner = await Banner.find({})





    return NextResponse.json({
      news, relateNews, banner


    })

  } catch (error) {




    console.log(error)
    return NextResponse.json({ err: error.message }, { status: 500 })
  }






}