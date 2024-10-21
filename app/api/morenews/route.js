import { NextResponse } from "next/server";



import dbConnect from "@/utils/dbConnect";


import News from "@/models/newspost"

export const revalidate = 0;



export async function GET() {


    await dbConnect()

    try {
        let news = await News.find({}).populate("subcategoryId")
        return NextResponse.json(news)


    } catch (error) {
        return NextResponse.json({ err: error.message }, { status: 500 });
    }



}