"use client"
import EditNews from "@/components/admin/newsform/edit/EditNews"



export default function Admin({ searchParams }) {


    return (

        <>


            <EditNews id={searchParams} />


        </>


    )


}