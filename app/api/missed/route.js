
import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect"
import News from "@/models/newspost"

import moment from 'moment';
export async function GET(req) {

    await dbConnect()


    try {

        const tenDaysAgo = moment().subtract(30, 'days').toDate();
        const news = await News.find({ createdAt: { $gte: tenDaysAgo } })


 console.log("news=======================xxxxxx===========",news)


        return NextResponse.json({
            success: true,
            data: news,


        });



    } catch (err) {
        console.log(err)
        return NextResponse.json({ err: err.message }, { status: 500 })
    }

}









