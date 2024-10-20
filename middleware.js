import { withAuth } from "next-auth/middleware"


import { NextResponse } from "next/server"



export const config = {
    matcher: [


        "/dashboard/user/:path",
        "/dashboard/editor/:path",

        "/dashboard/admin/:path",


        // "/api/user/:path",

        // "api/admin/:path",

        // "api/editor/:path",


    ]



}


export default withAuth(







    async function middleware(req) {



        const url = req.nextUrl.pathname;
        const userRole = req.nextauth?.token?.user?.role




        if (url?.includes("/admin") && userRole !== "admin") {

            return NextResponse.redirect(new URL("/", req.url))
        }


        if (url?.includes("/user") && userRole !== "user") {

            return NextResponse.redirect(new URL("/", req.url))
        }


        if (url?.includes("/editor") && userRole !== "editor") {

            return NextResponse.redirect(new URL("/", req.url))
        }





    },


    {



        callbacks: {


            authorized: ({ token }) => {

                if (!token) {
                    return false
                }

            }


        }


    }




)
