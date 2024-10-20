import { NextResponse } from "next/server";


import dbConnect from "@/utils/dbConnect";


import User from "@/models/user";

import { generateFromEmail } from "unique-username-generator";

import bcrypt from "bcrypt"
export async function POST(req) {


    await dbConnect()
    const body = await req.json()
    console.log(body)
    const { name, email, phone, password } = body
    try {



        const username = generateFromEmail(email, 4)

        const user = await new User({
            username,
            name,
            email,
            phone,
            password: await bcrypt.hash(password, 10)



        }).save()


        console.log("user created successfully", user)
        return NextResponse.json({ msg: "register successfully" }, { status: 200 })
    } catch (err) {
        console.log(err)

        return NextResponse.json({ err: err.message }, { status: 500 })

    }

}


