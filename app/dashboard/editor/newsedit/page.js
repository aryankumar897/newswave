"use client"
import EditNews from "@/components/editor/newsform/edit/EditNews"



export default function Admin({ searchParams }) {


  return (

    <>


      <EditNews id={searchParams} />


    </>


  )


}