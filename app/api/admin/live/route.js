import { NextResponse } from "next/server";


import dbConnect from "@/utils/dbConnect";


import Live from "@/models/live";





export async function POST(req) {

    await dbConnect()
    const body = await req.json()

    const { image, videourl } = body;

    try {


        let liveTV = await Live.findOne({})

        if (liveTV) {

            liveTV.image = image

            liveTV.videourl = videourl

            await liveTV.save()



            return NextResponse.json({ msg: "Live Tv updated successfully" }, { status: 200 })
        } else {



            liveTV = new Live({ image, videourl });


        
            await liveTV.save()
console.log("live tv " ,liveTV)
            return NextResponse.json({ msg: "Live TV created successfully" }, { status: 200 })



        }








    } catch (error) {

        console.log(error)
        return NextResponse.json({ err: error.message }, { status: 500 });
    }




}


export async function GET() {




    await dbConnect()
    try {

        let liveTV = await Live.findOne({})

         console.log("live tv " , liveTV)
        return NextResponse.json(liveTV)

    } catch (error) {
         console.log(error)
        return NextResponse.json({ err: error.message }, { status: 500 })
    }


}