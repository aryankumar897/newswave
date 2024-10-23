
 "use client"

import React, { useContext, useState } from 'react';
import {
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TablePagination,
    Switch,
    IconButton,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useBanner } from '@/context/banner';
import { useRouter } from 'next/navigation';



const BannerPage = () => {
  
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
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'auto',
                mb: 10,
                mt: 10
            }}
        >
            <Paper sx={{ width: '100%', maxWidth: 1000 }}>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} hover>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Image</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Left</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Right</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Top</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Bottom</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {banners.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                                <TableRow key={row.id} hover>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>
                                        <img src={row.imageUrl} alt={row.title} style={{ width: 50, height: 50 }} />
                                    </TableCell>
                                    <TableCell>{row.title}</TableCell>
                                    <TableCell>{row.left}</TableCell>
                                    <TableCell>{row.right}</TableCell>
                                    <TableCell>{row.top}</TableCell>
                                    <TableCell>{row.bottom}</TableCell>
                                    <TableCell>
                                        <Switch
                                            checked={row.status === 'active'}
                                            color="primary"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <IconButton color="primary" aria-label="edit" onClick={() => handleEditClick(row._id)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton color="secondary" aria-label="delete" onClick={() => handleDeleteClick(row._id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={banners.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <Dialog 
      
             
             >
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <DialogContentText>Are you sure you want to delete this item?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button 

                
                  
                    color="primary">
                        Cancel
                    </Button>
                    <Button 
            
                     color="secondary"
                     >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default BannerPage;
