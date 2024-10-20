import { NextResponse } from "next/server";


import dbConnect from "@/utils/dbConnect";

import Videolib from "@/models/videolib"


 export async function PUT(req, context){

 await dbConnect()
  const body=await req.json()


try {
    

 const updatingVideolib=await Videolib.findByIdAndUpdate(

 context.params.id
,{
...body

},
{new :true}


 )

    return NextResponse.json(updatingVideolib)




} catch (err) {
     console.log("error", err)
      return NextResponse.json({err:err.message},{status:500})
}




 }




  export async function DELETE(req,context){

await dbConnect()
 console.log("vidoe delete", context.params.id)

try {
   




     const deletingVideolib=await Videolib.findByIdAndDelete(context.params.id)


    return NextResponse.json(deletingVideolib)



} catch (error) {
    


     return NextResponse.json({err:error.message},{status:500})
}




  }
