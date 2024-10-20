"use client"
import React, { useState, useRef, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { AiOutlineMenu } from 'react-icons/ai';
import './style.css'; // Import the CSS file
import { VscTriangleLeft } from "react-icons/vsc";
import { IoCloseSharp } from "react-icons/io5";


import { useRouter } from 'next/navigation';
export default function Home() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [categories, setCategories] = useState([]);
  const router = useRouter()




  useEffect(() => {

    const fetchCategories = async () => {

      try {

        const response = await fetch(`${process.env.API}/catewithsubcate`)

        const data = await response.json()


        if (data.success) {
          setCategories(data.data)
          console.log(data.data)
        }

      } catch (error) {



        console.log("error fetching categories", error);
      }




    }




    fetchCategories()

  }, [])



  const toggleDrawer = () => {

    setIsDrawerOpen(!isDrawerOpen)
  }

  const handleCategoryClick = (categoryName) => {
    setIsDrawerOpen(false)
    router.push(`/categorynews/${categoryName}`)
  }


  const handleSubcategoryClick=(subcategoryName)=>{
    setIsDrawerOpen(false)
router.push(`/subcategorynews/${subcategoryName}`)

  }



  return (
    <div>

      <div className="hanger-menu  p-2"
        onClick={toggleDrawer}
      >
        <AiOutlineMenu size={24} />
      </div>
      <div

        className={`drawer ${isDrawerOpen ? 'open' : ''}`}

      >

        <div className="hanger-menu  p-2  "
          onClick={toggleDrawer}

        >
          <IoCloseSharp size={24} />
        </div>




        {



          categories.map((category) => (

            <div key={category._id} className="category"  >

              <span

                className="text-center"
                onClick={() => handleCategoryClick(category.slug)}

              >

                {category.name}

              </span>




              {category.subcategories.length > 0 && (


                <FiChevronRight className="arrow" />
              )}



              <ul>
                {

                  category.subcategories.length > 0 && (

                    <>



                      <li

                        className={`tooltip ${category.subcategories.length > 0 ? "above" : ""}`}
                      >


                        {

                          category.subcategories.map((subcategory) => (

                            <p
                              className="tool"
                              onClick={() => handleSubcategoryClick(subcategory.slug)}
                              key={subcategory._id}
                            >


                              {subcategory.name}

                            </p>

                          ))


                        }

<div   className="triangle"    ></div>
                      </li>







                    </>





                  )

                }






              </ul>





            </div>
















          ))




        }






      </div>
    </div>
  );
}
