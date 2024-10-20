"use client"
import React, { useState } from "react"
import {
    TextField,
    Button,
    Typography,
    Box,
    Container,
    Grid,
    IconButton,
    InputAdornment,
    Alert,
    AlertTitle

} from '@mui/material'

import { Visibility, VisibilityOff, Close } from "@mui/icons-material";
import BeatLoader from "react-spinners/BeatLoader";

import { useRouter } from 'next/navigation'



export default function RegisterPage() {
    const router = useRouter()
    const [register, setRegister] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    })

    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false)


    const handleChange = (e) => {

        const { name, value } = e.target;

        setRegister((prevRegister) => ({ ...prevRegister, [name]: value }))
        // console.log("Register", register)
    }


    const handleSubmit = async (e) => {

        e.preventDefault();

        console.log("Register", register)

        //simulate form validation




        if (register.name === "" || register.email === "" || register.password === "") {
            setError("please  fill all  required field")

            return
        }


        try {


            setLoading(true)


            const response = await fetch(`${process.env.API}/register`, {

                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    name: register.name,
                    email: register.email,
                    phone: register.phone,
                    password: register.password



                })

            })


            const data = await response.json()



            if (!response.ok) {
                setError(data?.err)
                setLoading(false)
            } else {

                setSuccess(data?.msg)
                setRegister({ name: "", email: "", phone: "", password: "" })

                setShowPassword(false)

                setLoading(false)
              router.push('/login')
            }



        } catch (error) {
            console.log(error)
            setError("an ERROR occurced during registration process")
        }







    }

    const handleCloseError = () => {
        setError("")
    }

    const handleCloseSuccess=()=>{

        setSuccess('')
    }




    return (
        <Box
            display="flex"
            flexDirection="column"

            justifyContent="center"
            alignItems="center"
            minHeight="80vh"
            mb={5}

        >

            <Container maxWidth="md">
                <Box p={8}

                    boxShadow={8}
                    bgcolor="rgba(0, 0, 60, 0.02)" borderRadius={1}>
                    <Typography variant="h4" component="h1" gutterBottom align="center">
                        Register
                    </Typography>



                    {error && (

                        <Alert severity="error" onClose={handleCloseError} sx={{
                            mb: 2, width: "100%"
                        }} >

                            <AlertTitle>Error</AlertTitle>
                            {error}
                        </Alert>


                    )}





                    {success && (

                        <Alert severity="success" onClose={handleCloseSuccess} sx={{
                            mb: 2, width: "100%"
                        }} >

                            <AlertTitle>Success</AlertTitle>
                            {success}
                        </Alert>


                    )}
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Name"
                                    name="name"
                                    fullWidth
                                    value={register.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>




                            <Grid item xs={12}>
                                <TextField
                                    label="Email"
                                    name="email"
                                    fullWidth
                                    value={register.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>



                            <Grid item xs={12}>
                                <TextField
                                    label="Phone"
                                    name="phone"
                                    fullWidth
                                    value={register.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>





                            <Grid item xs={12}>
                                <TextField
                                    label="Password"
                                    name="password"
                                    fullWidth

                                    type={showPassword ? "text" : 'password'}
                                    value={register.password}
                                    onChange={handleChange}
                                    required


                                    InputProps={{


                                        endAdornment: (

                                            <InputAdornment postion="end"   >

                                                <IconButton


                                                    edge="end"
                                                    onClick={() => setShowPassword((prev) => !prev)}

                                                >

                                                    {showPassword ? <VisibilityOff /> : <Visibility />}

                                                </IconButton>


                                            </InputAdornment>



                                        )


                                    }}






                                />
                            </Grid>



                            <Grid item xs={12}  >
                                <Button

                                    type="submit"


                                    variant="contained"
                                    fullWidth


                                    sx={{

                                        backgroundColor: "black",
                                        color: "white",
                                        '&:hover': {


                                            backgroundColor: "black",

                                        }






                                    }}

                                >


                                    <BeatLoader
                                        color="white"
                                        loading={loading}
                                  
                                        size={15}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    />


                           {loading?"":"submit"}

                                </Button>




                            </Grid>



                        </Grid>
                    </form>



                </Box>
            </Container>


        </Box>
    );
}
