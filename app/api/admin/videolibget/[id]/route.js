import { NextResponse } from "next/server";


import dbConnect from "@/utils/dbConnect"
import Videolib  from "@/models/videolib"



 export  async function GET(req, context){


 await dbConnect()



 try {
    

 const videolib=await Videolib.findOne({_id:context.params.id})

 console.log("videolibx",videolib)


     return NextResponse.json(videolib)



 } catch (error) {
     return NextResponse.json({err:error.message},{status:500})
 }




 }





