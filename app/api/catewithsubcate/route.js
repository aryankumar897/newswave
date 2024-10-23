
import Category from "@/models/category"
import SubCategory from "@/models/subcategory"


import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

export const revalidate = 0;

import News from "@/models/newspost"



const getCategoriesWithSubcategories = async () => {

  try {

    const categories = await Category.find().lean().limit(12)




    const categoriesWithSubcategories = await Promise.all(categories.map(async (category) => {


      const subcategories = await SubCategory.find({ categoryId: category._id }).lean()

      return {



        ...category,
        subcategories

      }






    }))


    return categoriesWithSubcategories

  } catch (error) {
    console.log("error fetching categories with subcategories")

    throw error
  }




}








export async function GET() {






  await dbConnect()

  try {

    const data = await getCategoriesWithSubcategories()


 




    return NextResponse.json({
      success: true,
      data: data,
   

    })





  } catch (error) {
    console.log(error)

    return NextResponse.json({ err: error.message }, { status: 500 })

  }



}
