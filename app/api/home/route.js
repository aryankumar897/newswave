import { NextResponse } from "next/server"



import dbConnect from "@/utils/dbConnect"

import News from "@/models/newspost"




import Banner from "@/models/banner"




export async function GET() {


    await dbConnect()


    try {

        const news = await News.find({}).populate("categoryId").populate("subcategoryId")

        const ban = await Banner.find({})
    

         const breakingNews=await News.find({
status:"active",

             breakingNews:"active"

         })

       // console.log(ban)



        return NextResponse.json({ success: true, data: news, banner: ban,  

            breaking: breakingNews
            })



    } catch (error) {

        console.log(error)


        return NextResponse.json({ err: error.message }, { status: 500 })




    }




}