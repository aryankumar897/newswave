"use client";
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Snackbar, Alert } from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select, Box } from '@mui/material';
import { Pagination } from '@mui/material';

import { useRouter } from 'next/navigation';

import { useCategory } from '@/context/category';



import { useSubCategory } from "@/context/subcategory";


// const categories = [
//     { _id: 'cat1', name: 'Electronics' },
//     { _id: 'cat2', name: 'Books' },
//     { _id: 'cat3', name: 'Clothing' },
//     { _id: 'cat4', name: 'Furniture' },
// ];

// const subcategories = [
//     { _id: 'sub1', name: 'Smartphones', categoryId: { _id: 'cat1' } },
//     { _id: 'sub2', name: 'Laptops', categoryId: { _id: 'cat1' } },
//     { _id: 'sub3', name: 'Fiction', categoryId: { _id: 'cat2' } },
//     { _id: 'sub4', name: 'Non-fiction', categoryId: { _id: 'cat2' } },
//     { _id: 'sub5', name: 'Men\'s Wear', categoryId: { _id: 'cat3' } },
//     { _id: 'sub6', name: 'Women\'s Wear', categoryId: { _id: 'cat3' } },
//     { _id: 'sub7', name: 'Office Furniture', categoryId: { _id: 'cat4' } },
//     { _id: 'sub8', name: 'Home Furniture', categoryId: { _id: 'cat4' } },
// ];




export default function SubcategoryTable() {
    const [page, setPage] = useState(1);
    const [rowsPerPage] = useState(5);
    const router = useRouter()

    const [openDelete, setOpenDelete] = useState(false)


    const [openEdit, setOpenEdit] = useState(false)


    const [selectedSubcategory, setSelectedSubcategory] = useState(null)

    const [editSubcategoryName, setEditSubcategoryName] = useState('')


    const [alertMessage, setAlertMessage] = useState('')

    const [selectedCategory, setSelectedCategory] = useState('')
    const [alertSeverity, setAlertSeverity] = useState('error')

    const [openAlert, setOpenAlert] = useState(false)

    const { categories, fetchCategories } = useCategory()

    const { subcategories,
        fetchSubCategories,

        deleteSubCategory,
        updateSubcategory

    } = useSubCategory()







    useEffect(() => {

        fetchCategories()
        fetchSubCategories()

    }, [])


    const handleDeleteClick = (subcategory) => {

        setSelectedSubcategory(subcategory)
        setOpenDelete(true)
    }

    const handleConfirmDelete = async () => {

        try {
            await deleteSubCategory(selectedSubcategory)

            setAlertSeverity('success')
            setAlertMessage('subcategory deleted successfully')


        } catch (error) {

            setAlertSeverity('error')
            setAlertMessage('Faield to  delete subcategory please try again')

        } finally {

            setOpenAlert(true)
            setOpenDelete(false)

            setSelectedSubcategory(null)

        }


    }


    const handleEditClick = (subcategory) => {

        setSelectedSubcategory(subcategory)

        setEditSubcategoryName(subcategory.name)


        setSelectedCategory(subcategory.categoryId)

        setOpenEdit(true)

    }


    const handleCloseEdit = () => {

        setOpenEdit(false)
        setSelectedSubcategory(null)
        setEditSubcategoryName("")
    }


    const handleSaveEdit=async()=>{



 try {
    

     await updateSubcategory({...selectedSubcategory,
    name:editSubcategoryName,
    categoryId:selectedCategory,


})

setAlertSeverity("Subcategory update successfully")





 } catch (error) {
    
     setAlertSeverity('error')
     setAlertMessage("Failed to update subcategory")
 }finally{

    setOpenAlert(true)
    setOpenEdit(false)

    setSelectedSubcategory(null)
setEditSubcategoryName('')
    setSelectedCategory("")


    fetchSubCategories()
 }




    }






    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value)
    }


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleClick = () => {
        router.push('/dashboard/admin/addsubcategory')

    }

    const handleCloseDelete = () => {

        setOpenDelete(false)
        setSelectedCategory(null)
    }

    const handleCloseAlert = () => {
        setOpenAlert(false)
    }

    return (
        <>
            <TableContainer component={Paper} sx={{ maxWidth: 900, mx: 'auto', mt: 4 }}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        borderColor: 'black',
                        ':hover': {
                            backgroundColor: 'black',
                            color: 'white',
                        },
                    }}
                    onClick={handleClick}
                >
                    Create SubCategory
                </Button>
                <Table>
                    <TableHead>
                        <TableRow style={{ backgroundColor: '#f5f5f5' }}>
                            <TableCell style={{ fontWeight: 'bold' }}>Subcategory Name</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Category Name</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? subcategories.slice((page - 1) * rowsPerPage, page * rowsPerPage)
                            : subcategories
                        ).map((subcategory) => (
                            <TableRow
                                key={subcategory._id}
                                sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}
                            >
                                <TableCell>{subcategory.name}</TableCell>
                                <TableCell>{categories.find(cat => cat._id === subcategory.categoryId._id)?.name}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleEditClick(subcategory)}
                                        size="small"
                                        sx={{ mr: 1 }}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"


                                        onClick={() => handleDeleteClick(subcategory)}
                                        size="small"
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination
                count={Math.ceil(subcategories.length / rowsPerPage)}
                page={page}
                onChange={handleChangePage}
                sx={{ alignSelf: 'center', maxWidth: 900, mx: 'auto', mt: 4 }}
            />



            {/* subcategory delete dialog */}


            <Dialog


                open={openDelete}

                onClose={handleCloseDelete}


                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete Subcategory"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete the subcategory "{selectedSubcategory?.name}"?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button

                        onClick={handleCloseDelete}




                        color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={handleConfirmDelete}

                        color="primary" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>







            {/* subcategory edit dialog */}

            <Dialog
                open={openEdit}
                onClose={handleCloseEdit}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Edit Subcategory</DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>
                        To edit the subcategory, please enter the new name here.
                    </DialogContentText> */}
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
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Subcategory Name"
                        type="text"
                        fullWidth

                        value={editSubcategoryName}
                        onChange={(e) => setEditSubcategoryName(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button

                        onClick={handleCloseEdit}
                        color="primary">
                        Cancel
                    </Button>
                    <Button

 onClick={handleSaveEdit}


                        color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar open={openAlert} autoHideDuration={2000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity={alertSeverity} sx={{ width: '100%' }}>
                    {alertMessage}
                </Alert>
            </Snackbar>
        </>
    );
}