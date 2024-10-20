
import React, { useState, useEffect } from 'react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, TextField, TablePagination } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';




import { useCategory } from '@/context/category';



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


const CategoryTable = () => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);


  const { categories, fetchCategoriesPublic } = useCategory()




  useEffect(() => {


    fetchCategoriesPublic ()
  }, [])






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
        <p
  

          style={{ marginLeft: "25px", fontWeight:"bold" }}
       


        > Category </p>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: '#f5f5f5' }}>
              <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell style={{ fontWeight: 'bold' }} align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories && categories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((category) => (
              <TableRow
                key={category?._id}
                sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}
              >
                <TableCell>
                  {category?.name}

                </TableCell>
                <TableCell align="right">
                
            
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination

          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={categories.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}

        />
      </TableContainer>







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
