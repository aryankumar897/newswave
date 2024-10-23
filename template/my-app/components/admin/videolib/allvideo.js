import * as React from 'react';
import { useState, useEffect } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
    TablePagination, Button, Dialog, DialogActions, DialogContent,
    DialogContentText, DialogTitle, Backdrop, CircularProgress
} from '@mui/material';

import { useRouter } from 'next/navigation';

import { styled } from '@mui/system';

import { toast } from 'react-toastify';


export default function VideolibManagement() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
   






    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

  

    const CircularImage = styled('img')({
        width: 50,
        height: 50,
        borderRadius: '50%',
    });








    return (
        <div>
            <h5>All Video Library</h5>

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
                Add Video Library
            </Button>

            <Paper sx={{ mt: 4, mb: 4, p: 2 }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                                <TableCell sx={{ fontWeight: 'bold' }}>No.</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Image</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, index) => (
                                <TableRow key={user.id} sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
                                    <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                                    <TableCell><CircularImage src={user.image} alt={user.name} /></TableCell>
                                    <TableCell>{user.title}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            onClick={() => handleEditClick(user._id)}
                                            sx={{ mr: 1 }}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            onClick={() => handleDeleteClick(user)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={users.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                <Dialog 
          
                
                
                >
                    <DialogTitle>Confirm Delete</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete user {userToDelete?.name}?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button 

                   

                            color="primary"
                            variant="outlined"
                        >
                            Cancel
                        </Button>
                        <Button 

                   


                            variant="outlined" color="error"
                        >
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </Paper>

            <Backdrop
                sx={{ color: '#fff', zIndex: 
                (theme) => theme.zIndex.drawer + 1 }
                }
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}