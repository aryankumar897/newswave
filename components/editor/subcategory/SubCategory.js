"use client";
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Snackbar, Alert } from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select, Box } from '@mui/material';
import { Pagination } from '@mui/material';



import { useCategory } from '@/context/category';



import { useSubCategory } from "@/context/subcategory";






export default function SubcategoryTable() {
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(5);
 



  const { categories, fetchCategoriesPublic } = useCategory()

  const { subcategories,
    fetchSubCategoriesPublic

  

  } = useSubCategory()







  useEffect(() => {

    fetchCategoriesPublic()
    fetchSubCategoriesPublic()

  }, [])









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
        
        >
          SubCategory
        </Button>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: '#f5f5f5' }}>
              <TableCell style={{ fontWeight: 'bold' }}>Subcategory Name</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Category Name</TableCell>
             
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










 
    </>
  );
}