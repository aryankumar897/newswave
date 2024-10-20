import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect"

import Category from "@/models/category"
import SubCategory from "@/models/subcategory"

import User from "@/models/user"
import Order from "@/models/order"

import Subscription from "@/models/subscription"
import Banner from "@/models/banner"

import Imagelib from "@/models/imagelib"
import Videolib from "@/models/videolib"
import Live from "@/models/live"
import News from "@/models/newspost"

export async function GET() {



  await dbConnect()


  try {




    const categoryCount = await Category.countDocuments({})

    const subcategoryCount = await SubCategory.countDocuments({})

    const userCount = await User.countDocuments({})





    const newspostCount = await News.countDocuments({})

    const orderCount = await Order.countDocuments({})

    const subscriptionCount = await Subscription.countDocuments({})

    const bannerCount = await Banner.countDocuments({})


    const imagelibCount = await Imagelib.countDocuments({})

    const videolibCount = await Videolib.countDocuments({})


    const liveCount = await Live.countDocuments({})



    const allorder = await Order.find({})


    const userRoleCount = await User.countDocuments({ role: "user" })


    const adminRoleCount = await User.countDocuments({ role: "admin" })



    const editorRoleCount = await User.countDocuments({ role: "editor" })



    const totalAmount = await Order.aggregate([
      {


        $group: {


          _id: null
          ,

          total: { $sum: "$totalPrice" }


        }


      }





    ])



 const totalPriceSum=totalAmount.length>0?totalAmount[0].total:0



    console.log({



      categoryCount, subcategoryCount, userCount,
      newspostCount, orderCount, subscriptionCount,
      bannerCount, imagelibCount, videolibCount,
      liveCount, allorder, userRoleCount,
      adminRoleCount, editorRoleCount,
      totalPriceSum


    })


 return NextResponse.json({    



   categoryCount, subcategoryCount, userCount,
   newspostCount, orderCount, subscriptionCount,
   bannerCount, imagelibCount, videolibCount,
   liveCount, allorder, userRoleCount,
   adminRoleCount, editorRoleCount ,
   totalPriceSum


  })

  } catch (error) {
 console.log("errr====",error)


    return NextResponse.json({ err: error.message }, { status: 500 })
  }



}
