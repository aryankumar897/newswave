import {NextResponse} from  "next/server"



 import dbConnect from "@/utils/dbConnect"



  import News from  "@/models/newspost"


  import Category from "@/models/category"


export const revalidate = 0;

   export  async function GET(){


 await dbConnect()

  try {
    

    const name ="Sports"


       const categoryid=await Category.findOne({name:name})
 let news =await News.find({categoryId:categoryid}).populate("subcategoryId")


 return NextResponse.json(news)



  } catch (error) {
     console.log(error)


      return NextResponse.json({err:error.message}, {status:500})

  }



   }