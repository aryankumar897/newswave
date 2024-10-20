

import { NextResponse } from "next/server";


import dbConnect
  from "@/utils/dbConnect";


import Subcategory from "@/models/subcategory"


export async function GET() {
  await dbConnect()

  try {

    const subcategory = await Subcategory.find({})
      .populate("categoryId")
      .sort({ createdAt: -1 })





    return NextResponse.json(subcategory)


  } catch (err) {
    return NextResponse.json({ err: err.message }, { status: 500 });



  }



}
