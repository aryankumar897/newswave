
// components/Navbar.js
"use client"
import { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';
import './style.css';
import { GiCrossMark } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowRightSLine } from 'react-icons/ri'; // Import icons from React Icons
import { useRouter } from 'next/navigation';

export default function Navbar() {



 const [isOpen,setIsOpen]=useState(false)

 const [categories,setCategories]=useState([])

 const  router=useRouter()
 const  [activeCategory,setActiveCategory]=useState(null)


  const handleSubcategoryClick=(slug)=>{
    router.push(`/subcategorynews/${slug}`)
  }



  const toggleMenu=()=>{
    setIsOpen(!isOpen)
  }



   useEffect(()=>{
 const  fetchCategories=async()=>{





 try {
   const  response=await  fetch(`${process.env.API}/catewithsubcate`)

 const   data= await  response.json()
 console.log("data.data",data.data)
 if(data.success){


  setCategories(data.data)
 }

 } catch (error) {
   console.log("error fetching categories", error)
 }

 }
 fetchCategories()

   },[])


  const handleToggleCategory=(categoryName)=>{
setActiveCategory((prevCategory)=>prevCategory===categoryName?null:categoryName)

  }


  return (
    <nav className="navbars">
      <div className="container">
        <div className="row">


          <div className="col ">
            <p className="toggleBtn pl-1"
          onClick={toggleMenu}
            >
              <FiMenu size="34" color="black" />
            </p>
          </div>
          <div className="col "  >
            <h1
              className="mr-5"

              style={{
                fontFamily: '"Satisfy", cursive',
                fontWeight: 180,

                fontVariantCaps: 'petite-caps',

                fontSize: '30px',

                color: '#000',
                letterSpacing: '0px',

                marginLeft: '-30px',
                marginBottom: '-30px', // Add margin-bottom
                //  padding: '10px', // Add padding

              }}>
              NewsWaves

            </h1>
          </div>

          <div className="col">
            <a className="btn "><FaUser size="34" /></a>
          </div>
        </div>
      </div>



      <div 
     className={`menu ${isOpen ? 'open' : ''}`}
      >

        <button className="toggleBtn  p-3 "
       onClick={toggleMenu}



        >
          <GiCrossMark size="35" color="black" />
        </button>

        <div className="category-list ">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <div
            onClick={() => handleToggleCategory(category.name)}
                className="category-name mx-3"
              >
{category.name}
{    category.subcategories && category.subcategories.length > 0 && (   


<span>   


{        activeCategory===category.name ?(

                      <RiArrowDropDownLine/>


) :(     


                        <RiArrowRightSLine/>


)}



 </span>



 )}





              </div>

{  



activeCategory===category.name && (  


<ul 

className='subcategory-list'

style={{   cursor:"pointer"}}
  >  


{   

category.subcategories.map((subcategory,index)=>(   

<li   className='mx-1' key={index}   >  



<p   


onClick={()=>handleSubcategoryClick(subcategory.slug)}

   >  
{subcategory.name}

 </p>

 </li>



 ))



 }




 </ul>




 )


 }





            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};


