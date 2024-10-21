 import {NextResponse} from "next/server"

 import dbConnect from "@/utils/dbConnect"
export const revalidate = 0;

  import News from "@/models/newspost"


  export async function GET(){


await dbConnect()



try {
  



   let news=await News.find({})
   .populate("categoryId")
   .populate("subcategoryId")
   .limit(12)



  return NextResponse.json(news)



  
} catch (error) {
   console.log(error)


 return NextResponse.json({err:err.message},{status:500})


}

  }