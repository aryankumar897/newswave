"use client"


import { createContext, useState, useContext } from "react"




import { toast } from "react-toastify"




export const CategoryContext = createContext()






export const CategoryProvider = ({ children }) => {

    const [name, setName] = useState("")
    const [categories, setCategories] = useState([])


    const [updatingCategory, setUpdatingCategory] = useState(null)

    const createCategory = async () => {
      

        try {


            const response = await fetch(`${process.env.API}/admin/category`, {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name })




            })

            const data = await response.json()
            if (!response.ok) {
                toast.error(data?.err)

            } 
            

            setName("")
            setCategories([data, ...categories])


        } catch (err) {
            console.log(err)
        }




    }



    const fetchCategories = async () => {

        try {


            const response = await fetch(`${process.env.API}/admin/category`)
            const data = await response.json()




            if (!response.ok) {
                toast.error(data?.err)


            } else {

                setCategories(data)


            }







        } catch (error) {
            console.log(error)
        }



    }




  const fetchCategoriesPublic = async () => {

        try {


            const response = await fetch(`${process.env.API}/categories`)
            const data = await response.json()




            if (!response.ok) {
                toast.error(data?.err)


            } else {

                setCategories(data)


            }







        } catch (error) {
            console.log(error)
        }



    }




    const updateCategory = async (selectedCategory) => {



        try {


            const response = await fetch(`${process.env.API}/admin/category/${selectedCategory?._id}`, {

                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(selectedCategory)
            })

            const data = await response.json()
            if (!response.ok) {
                toast.error(data?.err)
            } else {

                toast.success("category Updated")
                setUpdatingCategory(null)
                setCategories(categories.map((category) => {
                    category._id === selectedCategory._id ? data : category

                }))
            }

        } catch (err) {
            console.log(err)
        }
    }


    const deleteCategory = async (selectedCategory) => {

        try {

            const response = await fetch(`${process.env.API}/admin/category/${selectedCategory?._id}`, {


                method: 'DELETE',




            })

            const data = await response.json()

            if (!response.ok) {

                toast.error(data?.err)

            } else {




                toast.success("category deleted")

                setCategories(categories.filter((category) => category?._id !== selectedCategory?._id))






            }



        } catch (error) {
            console.log(error)
        }



    }


    return (
        <CategoryContext.Provider

            value={{

                name,
                setName,
                categories,
                setCategories,
                updateCategory,
                setUpdatingCategory,
                createCategory,
                fetchCategories,
                updateCategory,
                deleteCategory,
                fetchCategoriesPublic 





            }}

        >


            {children}

        </CategoryContext.Provider>



    )




}

export const useCategory = () => useContext(CategoryContext)