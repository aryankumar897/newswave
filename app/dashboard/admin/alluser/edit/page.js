"use client"
import { useState, useEffect } from 'react';
import {
  Container, TextField, Button, Grid, Alert, IconButton,

  Typography,
  MenuItem,

  FormControl,
  InputLabel,
  Select,

} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { fetchData } from 'next-auth/client/_utils';

export default function Form({ searchParams }) {

  const { id } = searchParams



  const [username, setUsername] = useState('')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('')


  const [role, setRole] = useState('')


  const [errors, setErrors] = useState({})

  const [successMessage, setSuccessMessage] = useState('')



  useEffect(() => {


    if (id) {
      fetchData(id)
    }

  }, [id])




  const fetchData = async (id) => {




    try {

      const response = await fetch(`${process.env.API}/admin/alluser/edit/${id}`)


      const data = await response.json()


      if (data) {


        setUsername(data?.username)
        setEmail(data?.email)

        setRole(data?.role)
        setName(data?.name)
        setStatus(data?.status)
        setPhone(data?.phone)



      } else {

        console.log("erorr")

      }




    } catch (error) {
      console.log(error)
    }
  }




  const validate = () => {

    const newErrors = {}


    if (!username) newErrors.username = 'Username is required'

    if (!name) newErrors.name = 'name is required'

    if (!email) newErrors.email = 'email is required'


    if (!phone) newErrors.phone = 'hpne is required'


    if (!role) newErrors.role = 'role is required'

    if (!password) newErrors.password = 'password is required'



    setErrors(newErrors)

    return Object.keys(newErrors).length === 0



  }




  const handleSubmit = async (e) => {
    e.preventDefault()








    if (validate()) {



      const response = await fetch(`${process.env.API}/admin/alluser/${id}`, {




        method: 'PUT',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({



          name, email, phone, password, username, status, role
        })

      })

      const data = await response.json()



      if (!response.ok) {

        setErrors(data?.err)
      }
      else {

        setSuccessMessage(data?.msg)
        setErrors({})

      }



    }



  }


  const handleCloseMessage=()=>{
setSuccessMessage('')
setErrors({})

  }

  const handleChange=(setter)=>(e)=>{
setter(e.target.value)
  }


  return (
    <Container maxWidth="xl" sx={{ mt: 15 }}>
      <Typography variant="h6" component="h6" gutterBottom align="center">
        Edit User
      </Typography>
      <Grid item xs={12} sx={{ mb: 2 }}  >
        {successMessage && (
          <Alert
            severity="success"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={handleCloseMessage}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {successMessage}
          </Alert>
        )}
        {Object.keys(errors).length > 0 && (
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={handleCloseMessage}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Please correct the errors above
          </Alert>
        )}
      </Grid>

      <form
        onSubmit={handleSubmit}

      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Username"
              name="username"
              fullWidth
              value={username}
              onChange={handleChange(setUsername)}
              error={!!errors.username}
              helperText={errors.username}
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              name="name"
              fullWidth
              value={name}
              onChange={handleChange(setName)}
              error={!!errors.name}
              helperText={errors.name}
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              value={email}
              onChange={handleChange(setEmail)}
              error={!!errors.email}
              helperText={errors.email}
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone"
              name="phone"
              fullWidth
              value={phone}
              onChange={handleChange(setPhone)}
              error={!!errors.phone}
              helperText={errors.phone}
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              value={password}
              onChange={handleChange(setPassword)}
              error={!!errors.password}
              helperText={errors.password}
              sx={{ width: '100%' }}
            />
          </Grid>


          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel>status</InputLabel>
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel>role</InputLabel>
              <Select
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>

                <MenuItem value="editor">Editor</MenuItem>

              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              style={{ backgroundColor: 'black', color: 'white' }}
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </Grid>

        </Grid>
      </form>
    </Container>
  );
}