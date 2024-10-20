"use client"
import React, { useState, useEffect } from 'react';

import { FormControl, InputLabel, MenuItem, Select, TextField, Button, Box, Typography, Snackbar } from '@mui/material';

import { Alert } from '@mui/material';

import { useCategory } from "@/context/category"
import { useSubCategory } from "@/context/subcategory"





export default function SubcategoryForm() {

    const [selectedCategory, setSelectedCategory] = useState("");

    const [subcategoryName, setSubcategoryName] = useState("");

    const [openAlert, setOpenAlert] = useState("error");

    const [alertSeverity, setAlertSeverity] = useState("error")

    const [alertMessage, setAlertMessage] = useState("")

    const { categories, fetchCategories } = useCategory()
    const { createSubCategory } = useSubCategory()

    useEffect(() => {
        fetchCategories()
    }, [])

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value)

    }




    const handleSubmit = async (e) => {

        e.preventDefault()






        if (!selectedCategory) {

            setAlertSeverity('error')
            setAlertMessage(" please selecet a category")



            setOpenAlert(true)
            return
        }


        if (!subcategoryName.trim()) {

            setAlertSeverity('error')
            setAlertMessage("Please select a subcategory name")
            setOpenAlert(true)
            return
        }

        try {

            await createSubCategory({ name: subcategoryName, categoryId: selectedCategory })

            setAlertSeverity('success')

            setAlertMessage('Subcategory created successfully')


            setSelectedCategory("")

            setSubcategoryName("")

        } catch (error) {
            setAlertSeverity('error')


            setAlertMessage("Failed  to create subcategory . please try again later")
        } finally {
            setOpenAlert(true)
        }








    }

    const handleCloseAlert=()=>{
        setOpenAlert(false)
    }





    return (
        <Box component="form"
            onSubmit={handleSubmit}
            sx={{ maxWidth: 900, mx: 'auto', mt: 4 }}
        >
            <Typography variant="h6" gutterBottom>
                Create Subcategory
            </Typography>
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="category-select-label">Select Category</InputLabel>
                <Select
                    labelId="category-select-label"
                    id="category-select"
                    value={selectedCategory}
                    onChange={handleCategoryChange}


                    label="Select Category"
                >
                    {categories.map((category) => (
                        <MenuItem key={category._id} value={category._id}>
                            {category.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                label="Subcategory Name"
                variant="outlined"
                fullWidth
                required
                value={subcategoryName}
                onChange={(e) => setSubcategoryName(e.target.value)}
                sx={{ mb: 2 }}
            />
            <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    borderColor: 'black',
                    ':hover': {
                        backgroundColor: 'primary',
                        color: 'white',
                    },
                }}
            >
                Submit
            </Button>
            <Snackbar open={openAlert} autoHideDuration={2000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity={alertSeverity} sx={{ width: '100%' }}>
                    {alertMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};