"use client"
import { useState } from 'react';
import { Container, TextField, Button, Grid, Alert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Form() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const validate = () => {
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!phone) newErrors.phone = 'Phone is required';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {

      try {

        console.log({
          name,
          email,
          phone,
          password,
          username
        })
        const response = await fetch(`${process.env.API}/admin/addnewadmin`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            password,
            username
          }),
        });

        const data = await response.json();
        console.log(data)
        if (!response.ok) {
          setErrors(data?.err);

        } else {
          setSuccessMessage(data?.msg);
          setErrors({});

        }
      } catch (error) {
        console.log(error)
        setErrors('An error occurred during New admin  creation');

      }

    } else {
      setSuccessMessage('');
    }
  };

  const handleCloseMessage = () => {
    setSuccessMessage('');
    setErrors({});
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 15 }}>

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

      <form onSubmit={handleSubmit}>
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