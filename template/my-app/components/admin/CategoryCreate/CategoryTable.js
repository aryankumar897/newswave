
import React, { useState, useEffect } from 'react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, TextField, TablePagination } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
    typography: {
        button: {
            textTransform: 'none',
        },
    },
});

const categories = [
    {
        _id: '1',
        name: 'Technology',
    },
    {
        _id: '2',
        name: 'Health',
    },
    {
        _id: '3',
        name: 'Education',
    },
    {
        _id: '4',
        name: 'Entertainment',
    },
    {
        _id: '5',
        name: 'Finance',
    },
    {
        _id: '6',
        name: 'Travel',
    },
    {
        _id: '7',
        name: 'Food',
    }
];



const CategoryTable = () => {
 
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
   












    














    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <>
            <TableContainer
             component={Paper}
              sx={{ maxWidth: 900, mx: 'auto', mt: 4 }}
              
              >
                <Button
                    type="submit"
                    variant="outline"
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
                    Create Category
                </Button>
                <Table>
                    <TableHead>
                        <TableRow style={{ backgroundColor: '#f5f5f5' }}>
                            <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }} align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((category) => (
                            <TableRow
                                key={category._id}
                                sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}
                            >
                                <TableCell>
                                {/* {category.name} */}
                                
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                     
                                        size="small"
                                        startIcon={<EditIcon />}
                                        sx={{ marginRight: 1 }}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"

                                        size="small"
                                        startIcon={<DeleteIcon />}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination

                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={ 5|| categories.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
             
                />
            </TableContainer>

            {/* Delete Confirmation Dialog */}
            <Dialog 
            
          
            >
                <DialogTitle>Delete Category</DialogTitle>
                <DialogContent>
                    {/* <Typography variant="body1">
                        Are you sure you want to delete {selectedCategory && selectedCategory.name}?
                    </Typography> */}
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                     
                        color="primary"
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        startIcon={<DeleteIcon />}
                      
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Edit Category Dialog */}
         
         
         
            <Dialog 
           // open={openEdit}
           // onClose={handleCloseEdit}
            
            >
                <DialogTitle>Edit Category</DialogTitle>
                <DialogContent sx={{ minWidth: 500 }}>



                    <TextField
                        autoFocus
                        margin="dense"
                        label="Category Name"
                        fullWidth
                        variant="outlined"

                   
                   
                   
                    />


                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                     
                        color="primary"
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                    
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
      
      
      
      
      
        </>
    );
};

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <main>
                <CategoryTable />
            </main>
        </ThemeProvider>
    );
}