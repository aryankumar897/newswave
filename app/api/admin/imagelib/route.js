import { NextResponse } from "next/server"



import cloudinary from "cloudinary"



import dbConnect from "@/utils/dbConnect"
import Imagelib from "@/models/imagelib"

cloudinary.config({



    cloud_name: "dxhzy8hjp",
    api_key: "732193517963228",
    api_secret: "laHrHWwDnUr_wYP7jdsz8Z7XYyE"
})




export async function POST(req) {


    const { images } = await req.json()



    await dbConnect()
    try {


        const uploadedImages = await Promise.all(images.map(async (image) => {

            const result = await cloudinary.uploader.upload(image)







            const newImage = new Imagelib({ public_id: result.public_id, url: result.secure_url })

            await newImage.save()

            return newImage

        }))







     
        return NextResponse.json(uploadedImages)


    } catch (error) {


        console.log(error)



        return NextResponse.json({ err: error.message }, { status: 500 })


    }








}



export async function DELETE(req) {


    const body = await req.json()

    const { public_id } = body

    await dbConnect()

    try {


        await cloudinary.uploader.destroy(public_id)

        await Imagelib.findOneAndDelete({ public_id })




        console.log("delete successfully")
        return NextResponse.json({ success: "delete successfully" }, { status: 200 })




    } catch (error) {
        console.log(error)

        return NextResponse.json({ err: error.message }, { status: 500 })




    }







}




export async function GET(req) {

    await dbConnect()
    try {

        const images = await Imagelib.find()


        console.log(images)


        return NextResponse.json(images)




    } catch (error) {
        console.log(error)



        return NextResponse.json({ err: error.message }, { status: 500 })

    }



}