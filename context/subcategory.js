"use client"

import { createContext, useState, useContext } from "react"

import { toast } from "react-toastify"

export const SubCategoryContext = createContext();




export const SubCategoryProvider = ({ children }) => {


    const [name, setName] = useState("")


    const [categoryId, setCategoryId] = useState("")

    const [subcategories, setSubcategories] = useState([])



    const createSubCategory = async ({ name, categoryId }) => {

        console.log({ name, categoryId })




        try {

            const response = await fetch(`${process.env.API}/admin/subcategory`, {

                method: "POST",
                headers: {
                    "Content-Type": "application/json"

                },
                body: JSON.stringify({ name, categoryId })

            })


            const data = await response.json()


            if (!response.ok) {

                toast.error(data?.err)
            } else {



                setName("")
                setCategoryId("")
                setSubcategories([data, ...subcategories])




            }




        } catch (err) {



            console.log(err)
        }


    }




    const fetchSubCategories = async () => {


        try {

            const response = await fetch(`${process.env.API}/admin/subcategory`)

            const data = await response.json()

            if (!response.ok) {
                toast.error(data?.err)
            } else {


                setSubcategories(data)

            }


        } catch (error) {
            console.log(error)
        }


    }




    const fetchSubCategoriesPublic = async () => {


        try {

            const response = await fetch(`${process.env.API}/subcategories`)

            const data = await response.json()

            if (!response.ok) {
                toast.error(data?.err)
            } else {


                setSubcategories(data)

            }


        } catch (error) {
            console.log(error)
        }


    }




    const updateSubcategory = async (selectedSubCategory) => {

        console.log("x", selectedSubCategory)

        try {

            const response = await fetch(`${process.env.API}/admin/subcategory/${selectedSubCategory?._id}`, {

                method: "PUT",
                headers: {
                    "Content-Type": "application/json"


                },
                body: JSON.stringify(selectedSubCategory)

            })

            const data = await response.json()


            if (!response.ok) {
                toast.error(data?.err)
            } else {


                toast.success("subcategory updated")





                setSubcategories(subcategories.map((subcategory) =>

                    subcategory._id === selectedSubCategory?._id ? data : subcategory


                ))







            }


        } catch (error) {
            console.log(error)
        }


    }






    const deleteSubCategory = async (selectedSubCategory) => {

        try {


            const response = await fetch(`${process.env.API}/admin/subcategory/${selectedSubCategory?._id}`, {
                method: 'DELETE'



            })





            const data = await response.json();

            if (!response.ok) {
                toast.error(data?.err)
            } else {



                toast.error("subcategory deleted")
                setSubcategories(subcategories.filter((subcategory) => subcategory?._id !== selectedSubCategory?._id))





            }




        } catch (error) {
            console.log(error)
        }



    }


    return (

        <SubCategoryContext.Provider


            value={{



                name, setName,
                subcategories,
                setSubcategories,
                createSubCategory,
                fetchSubCategories,
                updateSubcategory,
                deleteSubCategory,
                fetchSubCategoriesPublic

            }}


        >

            {children}

        </SubCategoryContext.Provider>

    )



}




export const useSubCategory = () => useContext(SubCategoryContext)