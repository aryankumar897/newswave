import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";
import Live from "@/models/live";



export async function GET() {

    await dbConnect()




    try {

        let liveTV = await Live.findOne({})



        return NextResponse.json(liveTV)



    } catch (error) {
        return NextResponse.json({ err: error.message }, { status: 500 });
    }



}


