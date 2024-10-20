import { createContext, useState, useEffect, useContext } from "react";


const BannerContext = createContext()


export const BannerProvider = ({ children }) => {


    const [banners, setBanners] = useState([])

    const [alert, setAlert] = useState(null)

    const [imageUrl, setImageUrl] = useState('')
    const [title, setTitle] = useState('')

    const [status, setStatus] = useState('')
    const [
        image,
        setImage
    ] = useState("")


    const [left, setLeft] = useState('')
    const [right, setRight] = useState('')
    const [top, setTop] = useState('')
    const [bottom, setBottom] = useState('')


    const createBanner = async (banner) => {



        try {


            const response = await fetch(`${process.env.API}/admin/banner`, {

                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(banner)

            })

            const data = await response.json()

            if (!response.ok) {
                setAlert({ type: 'error', message: "Failed to create banner" })

            } else {

                setBanners([...banners, data])

                setAlert({ type: 'success', message: 'banner created successfully' })


            }


        } catch (error) {

            console.log(error)
            setAlert({ type: 'error', message: "Failed to create banner" })





        }


    }





    const uploadImageToCloudinary = async (file) => {


        const formData = new FormData()

        formData.append("file", file)
        formData.append('upload_preset', 'ml_default')


        try {

            const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/upload`, {

                method: 'POST',

                body: formData





            })


            const data = await response.json()

            return data.secure_url

        } catch (error) {
            throw new Error("image Upload failed")
        }



    }


    const fetchBanners = async () => {
        try {





            const response = await fetch(`${process.env.API}/admin/banner`)
            const data = await response.json()



            setBanners(data)

        } catch (error) {
            setAlert({ type: 'error', message: "Failed  to fetch banner" })
        }





    }




    useEffect(() => {

        fetchBanners()

    }, [])





    const deleteBanner = async (id) => {


        try {

            await fetch(`${process.env.API}/admin/banner/${id}`, {



                method: 'DELETE'
            })


            setBanners(banners.filter(banner => banner._id !== id))

            setAlert({ type: "success", message: "banner deleted successfully" })


        } catch (error) {

            setAlert({ type: 'error', message: "Failed to delete banner" })




        }


    }


 const updateBanner =async(id,updateBanner)=>{


    try {
        
 const  response=await fetch(`${process.env.API}/admin/banner/${id.id}`,{





     method:"PUT",
     headers:{
        'Content-Type': 'application/json'
        
        },
        body: JSON.stringify(updateBanner)
 })

 const data = await response.json()



 setBanners(banners.map(banner=>banner._id===id?data:banner))
 setAlert({type:'success',message:'Banner updated successfully'})




    } catch (error) {
        



setAlert({ type: 'error', message: "Failed to update banner"})


    }



 }




    return (


        <BannerContext.Provider

            value={{
                banners, alert, setAlert,
                imageUrl, setImageUrl, title, setTitle,
                status, setStatus,
                left, setLeft, right, setRight, top, setTop, bottom, setBottom,

                createBanner,
                image,
                setImage,
                uploadImageToCloudinary,

                fetchBanners,
                deleteBanner,
                updateBanner 



            }}





        >

            {children}

        </BannerContext.Provider>


    )






}


export const useBanner = () => useContext(BannerContext)