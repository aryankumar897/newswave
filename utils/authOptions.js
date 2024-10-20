import CredentialsProvider from "next-auth/providers/credentials";


import User from "@/models/user"


import bcrypt from "bcrypt"

import dbConnect from "@/utils/dbConnect";
import { callbackify } from "util";




export const authOptions = {


    session: {

        strategy: "jwt"
    },


    providers: [





        CredentialsProvider({




            async authorize(credentials, req) {


                await dbConnect()



                const { email, password } = credentials

                const user = await User.findOne({email})

                if (!user) {

                    throw new Error("user not found")
                }

                const isPasswordMatch = await bcrypt.compare(password, user.password)

                if (!isPasswordMatch) {
                    throw new Error("password  or email mismatch")
                }




                return user


            }




        })







    ],

    callbacks: {

        jwt: async ({ token }) => {



            const userByemail = await User.findOne({ email: token.email })



            userByemail.password = undefined;
            token.user = userByemail;
            return token


        },

        session: async ({ session, token }) => {



            session.user = token.user

            return session
        },



        secret: process.env.NEXTAUTH_SECRET,

        pages: {
            signIn: "/login"


        }





    }






}
