import { NextResponse } from "next/server";


import dbConnect from "@/utils/dbConnect";


import Category from "@/models/category"


import slugify from "slugify";




export async function PUT(req, context) {

    await dbConnect()

    const body = await req.json()

 console.log( "before update", body)

    try {

        const updatingCategory = await Category.findByIdAndUpdate(

            context.params.id,
            {


                ...body, slug: slugify(body.name)
            },
            { new: true }




        )

        console.log(" after updatingCategory", updatingCategory)

        return NextResponse.json(updatingCategory)

    } catch (err) {
        console.log(err)


        return NextResponse.json({ err: err.message }, { status: 500 });

    }




}







export async function DELETE(req, context) {

    await dbConnect()

    console.log("x", context.params.id)


    try {

        const deletingCategory = await Category.findByIdAndDelete(context.params.id)

 console.log("delete", deletingCategory)

        return NextResponse.json(deletingCategory)
    } catch (err) {
        console.log(err)


        return NextResponse.json({ err: err.message }, { status: 500 });

    }




}
