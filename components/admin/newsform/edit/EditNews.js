"use client"
import { useCategory } from '@/context/category';
import { useSubCategory } from '@/context/subcategory';
import { useNewsPost } from '@/context/newspost';

import React, { useEffect, useState } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, Box, Grid, Snackbar, Alert } from '@mui/material';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
export default function FormComponent({ id }) {

    const {
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
        imagePreview, setImagePreview,
        notification, handleClose,
        handleImageChange,
        updateItem

    } = useNewsPost();








    const { categories, fetchCategories } = useCategory();

    const { subcategories, fetchSubCategories } = useSubCategory();


    useEffect(() => {
        fetchCategories();
        fetchSubCategories()

        if (id) {

            fetchData(id)
        }

    }, [id]);








    const fetchData = async (id) => {

        const response = await fetch(`${process.env.API}/admin/newsedit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(id)
        });

        console.log(response)
        const data = await response.json()
        //setA(data)
        if (data) {
            setTitle(data.title);
            setSubtitle(data.subtitle);
            setImagecaption(data.imagecaption);
            setDescription(data.description);
            setCategoryId(data.categoryId);
            setSubcategoryId(data.subcategoryId);
            setTopRight(data.topRight);
            setSlider(data.slider);
            setBreakingNews(data.breakingNews);
            setAnalysis(data.analisis);
            setLive(data.live);
            setImagePreview(data?.image)
            setStatus(data.status);
            setPodCast(data.podcast);
            setNewsLatter(data.newsLatter);
        }
    };


    const handleFormSubmit=(e )=>{
e.preventDefault();


 const updatePost={

 title,subtitle,
 imagecaption,description,
 categoryId,
 subcategoryId,
 topRight,
 slider,
 breakingNews,
 analysis,
 live,status,
 podcast,newsLatter,
 image:imagePreview




 }

updateItem(id,updatePost)



    }



    return (

        <Box component="form"


onSubmit={handleFormSubmit}


            sx={{ p: 2, maxWidth: 800, mx: 'auto', mt: 5 }}>
            {/* {JSON.stringify({a},null,4)} */}

            <Grid item md={12} sx={{ m: 2 }}>
                {imagePreview && (
                    <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px' }} />
                )}
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Title"
                        variant="outlined"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        sx={{ backgroundColor: 'white' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Subtitle"
                        variant="outlined"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        sx={{ backgroundColor: 'white' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Image Caption"
                        variant="outlined"
                        value={imagecaption}
                        onChange={(e) => setImagecaption(e.target.value)}
                        sx={{ backgroundColor: 'white' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Description"
                        variant="outlined"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        sx={{ backgroundColor: 'white' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel id="category-select-label">Select Category</InputLabel>
                        <Select
                            labelId="category-select-label"
                            id="category-select"
                            value={categoryId}
                            onChange={(e) => setCategoryId(e.target.value)}
                            label="Select Category"
                        >
                            {categories.map((category) => (
                                <MenuItem key={category._id} value={category._id}>
                                    {category.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel id="subcategory-select-label">Select SubCategory</InputLabel>
                        <Select
                            labelId="subcategory-select-label"
                            id="subcategory-select"
                            value={subcategoryId}
                            onChange={(e) => setSubcategoryId(e.target.value)}
                            label="Select SubCategory"
                        >
                            {subcategories.map((subcategory) => (
                                <MenuItem key={subcategory._id} value={subcategory._id}>
                                    {subcategory.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>

                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        fullWidth
                        sx={{
                            backgroundColor: "black"

                        }}
                    >
                        Upload file
                        <input
                            hidden

                            type="file" accept="image/*" onChange={handleImageChange} />


                    </Button>

                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel>Top Right</InputLabel>
                        <Select
                            value={topRight}
                            onChange={(e) => setTopRight(e.target.value)}
                            label="Top Right"
                            sx={{ backgroundColor: 'white' }}
                        >
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="inactive">Inactive</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel>Slider</InputLabel>
                        <Select
                            value={slider}
                            onChange={(e) => setSlider(e.target.value)}
                            label="Slider"
                            sx={{ backgroundColor: 'white' }}
                        >
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="inactive">Inactive</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel>Breaking News</InputLabel>
                        <Select
                            value={breakingNews}
                            onChange={(e) => setBreakingNews(e.target.value)}
                            label="Breaking News"
                            sx={{ backgroundColor: 'white' }}
                        >
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="inactive">Inactive</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel>Analysis</InputLabel>
                        <Select
                            value={analysis}
                            onChange={(e) => setAnalysis(e.target.value)}
                            label="Analysis"
                            sx={{ backgroundColor: 'white' }}
                        >
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="inactive">Inactive</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel>Live</InputLabel>
                        <Select
                            value={live}
                            onChange={(e) => setLive(e.target.value)}
                            label="Live"
                            sx={{ backgroundColor: 'white' }}
                        >
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="inactive">Inactive</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel>Podcast</InputLabel>
                        <Select
                            value={podcast}
                            onChange={(e) => setPodCast(e.target.value)}
                            label="Podcast"
                            sx={{ backgroundColor: 'white' }}
                        >
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="inactive">Inactive</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel>Newsletter</InputLabel>
                        <Select
                            value={newsLatter}
                            onChange={(e) => setNewsLatter(e.target.value)}
                            label="Newsletter"
                            sx={{ backgroundColor: 'white' }}
                        >
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="inactive">Inactive</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel>Status</InputLabel>
                        <Select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            label="Status"
                            sx={{ backgroundColor: 'white' }}
                        >
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="inactive">Inactive</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            borderColor: 'black',
                            ':hover': {
                                backgroundColor: 'black',
                                color: 'white',
                            },
                        }}
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
            <Snackbar open={notification.open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={notification.severity} sx={{ width: '100%' }}>
                    {notification.message}
                </Alert>
            </Snackbar>
        </Box>
    );
}