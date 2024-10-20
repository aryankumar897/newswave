"use client";
import { createContext, useState, useContext } from "react";
import { toast } from 'react-toastify';

export const NewsPostContext = createContext();

export const NewsPostProvider = ({ children }) => {


    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [imagecaption, setImagecaption] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [subcategoryId, setSubcategoryId] = useState('');
    const [topRight, setTopRight] = useState('inactive');
    const [slider, setSlider] = useState('inactive');
    const [breakingNews, setBreakingNews] = useState('inactive');
    const [analysis, setAnalysis] = useState('inactive');
    const [live, setLive] = useState('inactive');
    const [status, setStatus] = useState('inactive');
    const [podcast, setPodCast] = useState('inactive');
    const [newsLatter, setNewsLatter] = useState('inactive');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });
    const [items, setItems] = useState([]);

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
        if (selectedImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(selectedImage);
        } else {
            setImagePreview('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !subtitle || !imagecaption || !description || !categoryId || !subcategoryId || !image) {
            setNotification({ open: true, message: 'Please fill out all fields.', severity: 'error' });
            return;
        }

        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'ml_default'); // Replace with your Cloudinary upload preset

        try {
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/upload`,
                {
                    method: 'POST',
                    body: formData,
                });
            if (!response.ok) {
                throw new Error('Image upload failed');
            }
            const data = await response.json();
            const image = data.secure_url;
            console.log('Image URL:', image);

            const newItem = {
                title,
                subtitle,
                imagecaption,
                description,
                categoryId,
                subcategoryId,
                topRight,
                slider,
                breakingNews,
                analysis,
                live,
                status,
                podcast,
                newsLatter,
                image
            };



            const createResponse = await fetch(`${process.env.API}/admin/news`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newItem)
            });
            const createdItem = await createResponse.json();
            if (!createResponse.ok) {
                setNotification({ open: true, message: createdItem?.err, severity: 'error' });
            } else {

                setItems([...items, createdItem]);

                setNotification({ open: true, message: createdItem?.msg, severity: 'success' });

            }




        } catch (error) {
            console.log(error)
            setNotification({ open: true, message: 'Image upload failed. Please try again.', severity: 'error' });
        }
    };

    const fetchItems = async () => {
        try {
            const response = await fetch(`${process.env.API}/admin/news`);
            if (!response.ok) {
                throw new Error('Failed to fetch items');
            }
            const data = await response.json();
            setItems(data);
        } catch (error) {
            setNotification({ open: true, message: 'Failed to fetch items. Please try again.', severity: 'error' });
        }
    };





    const updateItem = async (id, updatePost) => {


        console.log("update=>", { id, updatePost })




        try {

            const response = await fetch(`${process.env.API}/admin/news/${id.id}`, {

                method: 'PUT',

                headers: {
                    "Content-Type": "application/json"
                },



                body: JSON.stringify(updatePost)


            })




            const data = await response.json()

            if (!response.ok) {

                toast.error(data?.err)

            } else {


                setItems(items.map(item => (item._id === id ? data : item)))




                toast.success("item Updated successfully")
            }


        } catch (error) {
            toast.error(error)
        }





    }





    const deleteItem = async (id) => {
        try {
            const response = await fetch(`${process.env.API}/admin/news/${id}`, {
                method: 'DELETE'
            });
            const data = await response.json();

            if (!response.ok) {
                toast.error(data?.err)
            } else {

                setItems(items.filter(item => item._id !== id));

                toast.success(data?.msg)

            }




        } catch (error) {
            setNotification({ open: true, message: 'Delete item failed. Please try again.', severity: 'error' });
        }
    };

    const handleClose = () => {
        setNotification({ ...notification, open: false });
    };



    return (
        <NewsPostContext.Provider
            value={{
                title, setTitle,
                subtitle, setSubtitle,
                imagecaption, setImagecaption,
                description, setDescription,
                categoryId, setCategoryId,
                subcategoryId, setSubcategoryId,
                topRight, setTopRight,
                slider, setSlider,
                breakingNews, setBreakingNews,
                analysis, setAnalysis,
                live, setLive,
                status, setStatus,
                podcast, setPodCast,
                newsLatter, setNewsLatter,
                image, setImage,
                imagePreview, setImagePreview,
                notification, setNotification,
                items, setItems,
                handleImageChange,
                handleSubmit,
                fetchItems,
                updateItem,
                deleteItem,
                handleClose,

            }}
        >
            {children}
        </NewsPostContext.Provider>
    );
};

export const useNewsPost = () => useContext(NewsPostContext);