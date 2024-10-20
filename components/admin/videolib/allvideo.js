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
    const [loading, setLoading] = useState(false);
    const [videolibs, setVideolibs] = useState([])
    const [videoToDelete, setVideoToDelete] = useState(null)
 const  router=useRouter()
    const [open, setOpen] = useState(false)

    useEffect(() => {

        fetchVideolib()

    }, [])


    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

    const fetchVideolib = async () => {
        setLoading(true)

        try {

            const response = await fetch(`${process.env.API}/admin/videolib`)
            const data = await response.json()
            await delay(3000)
            setVideolibs(data)


            setLoading(false)
        } catch (error) {

            console.log("error fetching user")
            setLoading(false)
        }




    }


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


    const handleDeleteClick = (video) => {

        setVideoToDelete(video)
        setOpen(true)




    }

    const handleClose = () => {
        setOpen(false)
        setVideoToDelete(null)
    }


    const handleDeleteConfirm = async () => {

        try {


            const response = await fetch(`${process.env.API}/admin/videolib/${videoToDelete?._id}`, {
                method: 'DELETE',



            })


            if (response.ok) {


                setVideolibs(videolibs.filter(video => video._id !== videoToDelete._id))
          
           handleClose()

                fetchVideolib()
  toast.success("video lib  deleted successfully")
          
            }else{


                toast.error('error deleting   video lib')
            }







        } catch (error) {
            toast.error("error deleting videolib")
        }



    }

 const handleClick=()=>{

router.push(`/dashboard/admin/addvideo`)

 }

    const handleEditClick=(id)=>{

        router.push(`/dashboard/admin/videolibedit/?id=${id}`)
    }


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
onClick={handleClick}
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
                            {videolibs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((video, index) => (
                                <TableRow key={video._id} sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
                                    <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                                    <TableCell><CircularImage src={video.image} alt={video.name} /></TableCell>
                                    <TableCell>{video.title}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            onClick={() => handleEditClick(video._id)}
                                            sx={{ mr: 1 }}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            onClick={() => handleDeleteClick(video)}
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
                    count={videolibs.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                <Dialog

                    open={open}
                    onClose={handleClose}

                >
                    <DialogTitle>Confirm Delete</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete user

                            ?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button


                            onClick={handleClose}
                            color="primary"
                            variant="outlined"
                        >
                            Cancel
                        </Button>
                        <Button


                            onClick={handleDeleteConfirm}

                            variant="outlined" color="error"
                        >
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </Paper>

            <Backdrop
                sx={{
                    color: '#fff', zIndex:
                        (theme) => theme.zIndex.drawer + 1
                }
                }
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}