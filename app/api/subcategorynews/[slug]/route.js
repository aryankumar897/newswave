

import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"
import News from "@/models/newspost"
import Banner from "@/models/banner"
import Subcategory from "@/models/subcategory"
export const revalidate = 0;

export async function GET(req, context) {

  await dbConnect()

  try {

    let subcatId = await Subcategory.findOne({ slug: context?.params?.slug })

 if(!subcatId) {
  return  NextResponse.json({err: "No Subcategory found"})

 }


    let news = await News.find({ subcategoryId: subcatId?._id })
      .populate("categoryId")
      .populate("subcategoryId")

      .populate("user_id")



    const name = "Commercial Real Estate"
    const beauty = await Subcategory.findOne({ name: name })

    console.log("beauty=======================", beauty)
    let beautynews = await News.find({ subcategoryId: beauty?._id })
      .populate("categoryId")
      .populate("subcategoryId")
      .populate("user_id")






    const school = "Schooling"
    const schoolcat = await Subcategory.findOne({ name: school})




    let schoolnews = await News.find({ subcategoryId: schoolcat?._id })
      .populate("categoryId")
      .populate("subcategoryId")
      .populate("user_id")




    const diplomacy = "Startups"


    const diplomacysubcat = await Subcategory.findOne({ name: diplomacy })





    let diplomacyNews = await News.find({ subcategoryId: diplomacysubcat?._id })
      .populate("categoryId")
      .populate("subcategoryId")
      .populate("user_id")







    let banner = await Banner.find({})

    console.log({

      beautynews,
     



    })


    return NextResponse.json({

      news,
      beautynews,
      schoolnews,
      diplomacyNews,
      banner



    })


  } catch (error) {
    console.log("err====", error)



    return NextResponse.json({ err: error.message }, { status: 500 })



  }






}