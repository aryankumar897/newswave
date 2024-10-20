"use client"

import {signOut} from 'next-auth/react'

import {useRouter} from    "next/navigation"




export default function Logout() {
 const  router=useRouter()

 const  handleLogout=()=>{
   signOut({redirect:false})
 
router.push("/login")

 }




  return (

<div> 
<h6> Logout page</h6>

<button

onClick={handleLogout}
style={{
backgroundColor:"black",
color:"white",

padding:"20px",
border:"1px solid",

cursor:"pointer"

}}


> 


logout

 </button>


 </div>

  )

}

