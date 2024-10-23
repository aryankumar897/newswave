"use client"

import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  TablePagination, Button, Dialog, DialogActions, DialogContent,
  DialogContentText, DialogTitle, Switch
} from '@mui/material';
import { useRouter } from 'next/navigation'
import { styled } from '@mui/system';

export default function UserManagement() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [userStatus, setUserStatus] = useState({});
  const router = useRouter();

  const [users, setUsers] = useState([])

  const fetchUsers = async () => {

    const response = await fetch(`${process.env.API}/admin/addnewadmin`); // Adjust endpoint as necessary
    const data = await response.json();
    console.log(data)
    setUsers(data);

  };


  useEffect(() => {
    fetchUsers()

  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUserToDelete(null);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await fetch(`${process.env.API}/admin/addnewadmin/${userToDelete._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      fetchUsers()

      handleClose();
    } catch (error) {
      console.error('There was a problem with the delete request:', error);
    }
  };


  const handleEditClick = (id) => {
    router.push(`/dashboard/admin/addnewadmin/edit/?id=${id}`);
  };

  const CircularImage = styled('img')({
    width: 50,
    height: 50,
    borderRadius: '50%',
  });




  const handleClick = () => {
    router.push(`/dashboard/admin/addnewadmin`);
  };

  return (
    <div>
      <h5>all admin</h5>

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
        onClick={handleClick}
      >
        Add admin
      </Button>

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
                <TableRow key={user.id} sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell><CircularImage src={user.image} alt={user.name} /></TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Switch

                      checked={user.status === 'active'}

                      color="primary"
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleEditClick(user?._id)}
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
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete user {userToDelete?.name}?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}
              color="primary"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button onClick={handleDeleteConfirm}
              variant="outlined" color="error"
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </div>
  );
};