import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect"



 import Banner from "@/models/banner"



  export async function POST(req){


await dbConnect()

const body=await req.json()


 console.log(body)

 const {id}=body


if(!id){


return NextResponse.json({err:"id is required"},{status:400})


}


try {
    
 const  banner=await Banner.findOne({_id:id})

 if(!banner){

 return NextResponse.json({err:"Banner not found"},{status:404})

 }

 return NextResponse.json(banner)

} catch (err) {
   console.log(err)
   
    return NextResponse.json({err:err.message },{status:500})

}



  }