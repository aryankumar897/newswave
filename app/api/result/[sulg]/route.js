import { NextResponse } from "next/server";

 import dbConnect from "@/utils/dbConnect"

  import News from "@/models/newspost"



   export async function GET(req,context){


 await dbConnect()

 console.log("GET==========================", context.params.sulg)

 try {
   const  searchResults = await News.find({     

$or:[  

{ title:{   $regex:context.params.sulg,  $options:'i'     }  },
       { subtitle: { $regex: context.params.sulg, $options: 'i' } },

       { description: { $regex: context.params.sulg, $options: 'i' } }

 ]




    })

.populate("categoryId")
.populate("subcategoryId")
.limit(12)


   console.log(" searchResults", searchResults  )

   return NextResponse.json(searchResults)


 } catch (error) {
  
 console.log(error)
 return NextResponse.json({err: error.message},{status:500})

 } 



   }