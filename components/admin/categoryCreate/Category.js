"use client";

import React from 'react';
import { useState } from "react";
import { useCategory } from "@/context/category"

import { TextField, Button, Box, Typography, Snackbar, Alert } from '@mui/material';

const CategoryForm = () => {

    const { name, setName, createCategory } = useCategory()


    const [openAlert, setOpenAlert] = useState(false)


    const [alertSeverity, setAlertSeverity] = useState("success")

    const [alertMessage, setAlertMessage] = useState('')





    const handleCloseAlert=()=>{

setOpenAlert(false)

    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        if (!name) {

            setAlertSeverity('error')

            setAlertMessage("category  name is required")


            setOpenAlert(true)
            return
        }



        try {

            await createCategory()
            setAlertMessage("category created successfully")

            setAlertSeverity("success")


            setOpenAlert(true)
        } catch (error) {

            setAlertSeverity('error')
            setAlertMessage(error.message)
            setOpenAlert(true)
        }



    }






    return (
        <Box component="form"
            onSubmit={handleSubmit}

            sx={{ maxWidth: 900, mx: 'auto', mt: 4 }}>
            <Typography variant="h6" gutterBottom>
                Create Category
            </Typography>
            <TextField
                label="Category Name"
                variant="outlined"
                fullWidth
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                        backgroundColor: 'black',
                        color: 'white',
                    },
                }}
            >
                Submit
            </Button>
            <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity={alertSeverity} sx={{ width: '100%' }}>
                    {alertMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default CategoryForm;