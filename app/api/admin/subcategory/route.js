import { NextResponse } from "next/server";


import dbConnect
    from "@/utils/dbConnect";


import Subcategory from "@/models/subcategory"

import slugify from "slugify"

export async function GET() {
    await dbConnect()

    try {

        const subcategory = await Subcategory.find({})
            .populate("categoryId")
            .sort({ createdAt: -1 })


 //console.log("sub",  subcategory)


        return NextResponse.json(subcategory)


    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 });



    }



}




export async function POST(req) {
    await dbConnect()

    const body = await req.json()

    const { name, categoryId } = body

 

    try {

        const subcategory = await Subcategory.create({
            name,
            categoryId,
            slug: slugify(name)
        })

        return NextResponse.json(subcategory)

    } catch(err) {


        console.log("xx",  err)


        return NextResponse.json({ err: err.message }, { status: 500 });


    }
}
