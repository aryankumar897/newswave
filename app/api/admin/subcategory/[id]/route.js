import { NextResponse } from "next/server";


import dbConnect from "@/utils/dbConnect";


import Subcategory from "@/models/subcategory";


import slugify from "slugify";




export async function PUT(req, context) {

    await dbConnect()

    const body = await req.json()

   // console.log("before update", body)

    try {

        const updatingSubcategory = await Subcategory.findByIdAndUpdate(

            context.params.id,
            {


                ...body,
                 slug: slugify(body.name)

            },
            { new: true }




        )

      //  console.log(" after updatingCategory", updatingSubcategory)

        return NextResponse.json(updatingSubcategory)

    } catch (err) {
        console.log(err)


        return NextResponse.json({ err: err.message }, { status: 500 });

    }




}







export async function DELETE(req, context) {

    await dbConnect()

    console.log("x", context.params.id)


    try {

        const deletingSubcategory = await Subcategory.findByIdAndDelete(context.params.id)

        console.log("delete", deletingSubcategory)

        return NextResponse.json(deletingSubcategory)
    } catch (err) {
        console.log(err)


        return NextResponse.json({ err: err.message }, { status: 500 });

    }




}
