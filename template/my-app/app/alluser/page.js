"use client"

import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  TablePagination, Button, Dialog, DialogActions, DialogContent,
  DialogContentText, DialogTitle, Switch
} from '@mui/material';
import { useRouter } from 'next/navigation'
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { styled } from '@mui/system';

const UserManagement = () => {
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
      <h1>All Users</h1>
      <Paper sx={{ mt: 4, mb: 4, p: 2 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Image</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Role</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, index) => (
                <TableRow key={user._id} sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
                  <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                  <TableCell><CircularImage src={user.image} alt={user.name} /></TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.email}</TableCell>


                  <Switch

                    checked={user.status === 'active'}

                    color="primary"
                  />


                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                     // onClick={() => handleEditClick(user._id)}
                      sx={{ mr: 1 }}
                      startIcon={<EditIcon />}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                     // onClick={() => handleDeleteClick(user)}
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
      //  open={open} 
      //  onClose={handleClose}
        
        >
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete user
               {/* {userToDelete?.name}? */}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
            
            
           //  onClick={handleClose}
              color="primary"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button 
            
           // onClick={handleDeleteConfirm}

              variant="outlined" color="error"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </div>
  );
};

export default UserManagement;