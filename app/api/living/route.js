import { NextResponse, NextRresponses } from "next/server"
import dbConnect from "@/utils/dbConnect"
import News from "@/models/newspost"
import Category from "@/models/category"

export const revalidate = 0;


export async function GET() {

  await dbConnect()


  try {

    const name = "Living"


    const categoryid = await Category.findOne({ name: name })

    const news = await News.find({ categoryId: categoryid })
      .populate("subcategoryId")
      .limit(6)

    return NextResponse.json(news)

  } catch (error) {


    console.log(error)


    return NextResponse.json({ err: error.message }, { status: 500 })
  }





}