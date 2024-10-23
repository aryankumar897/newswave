"use client";
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Snackbar, Alert } from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select, Box } from '@mui/material';
import { Pagination } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useCategory } from '@/context/category';
import { useSubCategory } from '@/context/subcategory';

const categories = [
    { _id: 'cat1', name: 'Electronics' },
    { _id: 'cat2', name: 'Books' },
    { _id: 'cat3', name: 'Clothing' },
    { _id: 'cat4', name: 'Furniture' },
];

const subcategories = [
    { _id: 'sub1', name: 'Smartphones', categoryId: { _id: 'cat1' } },
    { _id: 'sub2', name: 'Laptops', categoryId: { _id: 'cat1' } },
    { _id: 'sub3', name: 'Fiction', categoryId: { _id: 'cat2' } },
    { _id: 'sub4', name: 'Non-fiction', categoryId: { _id: 'cat2' } },
    { _id: 'sub5', name: 'Men\'s Wear', categoryId: { _id: 'cat3' } },
    { _id: 'sub6', name: 'Women\'s Wear', categoryId: { _id: 'cat3' } },
    { _id: 'sub7', name: 'Office Furniture', categoryId: { _id: 'cat4' } },
    { _id: 'sub8', name: 'Home Furniture', categoryId: { _id: 'cat4' } },
];




export default function SubcategoryTable() {
    const [page, setPage] = useState(1);
    const [rowsPerPage] = useState(5);
 
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

  

  
 
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
                 //   onClick={handleClick}
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
                                      
                                        size="small"
                                        sx={{ mr: 1 }}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"

                                      
                                     
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


            <Dialog
         
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete Subcategory"}
                </DialogTitle>
                <DialogContent>
                    {/* <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete the subcategory "{selectedSubcategory?.name}"?
                    </DialogContentText> */}
                </DialogContent>
                <DialogActions>
                    <Button
                    
                     
                      color="primary">
                        Cancel
                    </Button>
                    <Button 
                 
                    
                    color="primary" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>



            <Dialog
           
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
                        
                            label="Select Category"
                        >
                            {/* {categories.map((category) => (
                                <MenuItem key={category._id} value={category._id}>
                                    {category.name}
                                </MenuItem>
                            ))} */}
                        </Select>
                    </FormControl>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Subcategory Name"
                        type="text"
                        fullWidth
                       
                   
                    />
                </DialogContent>
                <DialogActions>
                    <Button 
                   
                     color="primary">
                        Cancel
                    </Button>
                    <Button
                 
                     color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
            {/* <Snackbar open={openAlert} autoHideDuration={2000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity={alertSeverity} sx={{ width: '100%' }}>
                    {alertMessage}
                </Alert>
            </Snackbar> */}
        </>
    );
}