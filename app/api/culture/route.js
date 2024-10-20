import { NextResponse } from "next/server";



import dbConnect from "@/utils/dbConnect";


import News from "@/models/newspost"



import Category from "@/models/category"


export async function GET() {
    await dbConnect()

    try {


        const name = "Culture"

        const categoryid = await Category.findOne({ name: name })


        let news = await News.find({ categoryId: categoryid }).populate("subcategoryId").limit(6)



        return NextResponse.json(news)


    } catch (error) {
        console.log(error)
    }




}