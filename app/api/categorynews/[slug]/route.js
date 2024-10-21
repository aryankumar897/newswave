import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"
import News from "@/models/newspost"
import Banner from "@/models/banner"

import Category from "@/models/category"
export const revalidate = 0;

export async function GET(req, context) {


  await dbConnect()


  try {



    let cateId = await Category.findOne({ slug: context.params.slug })



    let news = await News.find({ categoryId: cateId?._id })
      .populate("categoryId")
      .populate("subcategoryId")
      .populate("user_id")




    const name = "Technology"
    const technology = await Category.findOne({ name: name })
    let technews = await News.find({ categoryId: technology?._id })
      .populate("categoryId")
      .populate("subcategoryId")
      .populate("user_id")




    const world = "World News"
    const worldnews = await Category.findOne({ name: world })

    let worldNews = await News.find({ categoryId: worldnews?._id })
      .populate("categoryId")
      .populate("subcategoryId")
      .populate("user_id")



    const education = "Education"

    const educationcat = await Category.findOne({ name: education })

    let educationNews = await News.find({ categoryId: educationcat?._id })
      .populate("categoryId")
      .populate("subcategoryId")
      .populate("user_id")



    let banner = await Banner.find({})


   
    return NextResponse.json({ news, technews, worldNews, educationNews, banner    })




  } catch (error) {
    console.log( "err======== =>   "  ,error)


    return NextResponse.json({ err: error.message }, { status: 500 })
  }



}