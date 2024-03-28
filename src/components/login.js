import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth';
import Navbar from './navbar';
import axios from 'axios';



export default function Login() {


  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const auth = useAuth();



  let data = JSON.stringify({
    "email": user,
    "password": pwd
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3001/api/v1/users/login',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };


  const handleLogin = async (event) => {
    event.preventDefault();
    try{
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
      auth.login(user);
      navigate("/home")
    } catch(error){
      console.log(error)
      console.log(error.response.status);
      if (error.response.status == 404) {
        setErrMsg("Username not found");
      }
      else if (error.response.status == 401) {
        setErrMsg("Invalid credentials");
      }
    }
  }




  return (
    <>
      {(auth.user != null) ?

        <section>
          <Navbar></Navbar>
          <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid
              item
              xs={false}
              sm={4}
              md={4}
              sx={{
                backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >

                <Box mt={15}>
                  <Typography variant="h5" style={{ textAlign: 'left', fontWeight: 'bold' }} >
                    You are logged in
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </section> :
        <section>
          <Navbar></Navbar>
          <Grid container component="main" sx={{ height: '100vh' }}>
            {/* <Grid
              item
              xs={false}
              sm={4}
              md={4}
              sx={{
                backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            /> */}
            <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box mt={15}>
                  <Typography variant="h5" style={{ textAlign: 'left', fontWeight: 'bold' }} >
                    Sign in to job portal
                  </Typography>
                </Box>
                <Box mt={2} >
                  <h4 style={{ color: "red" }} >{errMsg}</h4>
                </Box>
                <Box component="form" noValidate onSubmit={(event) => handleLogin(event)} sx={{ mt: 5 }}>
                  <h4 style={{ marginBottom: 2, paddingBottom: 2 }} >Email</h4>
                  <TextField
                    //margin="normal"
                    required
                    fullWidth
                    id="email"
                    //label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={(e) => setUser(e.target.value)}
                  />
                  <br></br>
                  <h4 style={{ marginBottom: 2, paddingBottom: 2 }} >Password</h4>
                  <TextField
                    //margin="normal"
                    required
                    fullWidth
                    name="password"
                    //label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => setPwd(e.target.value)}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </section>
      }
    </>

  );


}