"use client"
import EditBanner from "@/components/admin/banner/edit/EditBanner"



export default function Admin({ searchParams }) {


    return (

        <>


            <EditBanner id={searchParams} />


        </>


    )


}