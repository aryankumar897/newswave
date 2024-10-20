

"use client"
import { useState, useEffect } from "react"
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

import { useRouter } from "next/navigation";
import { useNewsPost } from "@/context/editornewspost"






export default function Home() {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const router = useRouter()
  const { items, deleteItem, fetchItems } = useNewsPost()

  const [open, setOpen] = useState(false)
  const [deleteId, setDeleteId] = useState(null)

  useEffect(() => {
    fetchItems()
  }, [])


  const handleDeleteClick = (id) => {

    setDeleteId(id)
    setOpen(true)

  }








  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDeleteConfirm = () => {

    deleteItem(deleteId)
    handleClose()

  }








  const handleClose = () => {
    setOpen(false)
    setDeleteId(null)

  }
  const handleEditClick = (id) => {
    router.push(`/dashboard/editor/newsedit/?id=${id}`)

  }


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
        <Button
          type="submit"
          variant="contained"
          sx={{
            mb: 10,
            backgroundColor: 'black',
            color: 'white',
            borderColor: 'black',
            ':hover': {
              backgroundColor: 'black',
              color: 'white',
            },
          }}
          onClick={() => router.push('/dashboard/editor/addnews')}
        >
          Add news
        </Button>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} hover>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Image</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Category</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Username</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                <TableRow key={row._id} hover>
                  <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                  <TableCell>
                    <img src={row.image} alt={row.title} style={{ width: 50, height: 50 }} />
                  </TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.categoryId?.name}</TableCell>
                  <TableCell>
                    {/* {row.username} 
                                     */}
                    username
                  </TableCell>
                  <TableCell>
                    <Switch
                      checked={row.status == "active"}

                      color="primary"
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton


                      color="primary"
                      aria-label="edit"
                      onClick={() => handleEditClick(row?._id)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      aria-label="delete"
                      onClick={() => handleDeleteClick(row?._id)}>
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
          count={items.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete this item?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleDeleteConfirm}

            color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};