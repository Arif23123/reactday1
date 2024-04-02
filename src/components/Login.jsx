import { Button, TextField, Typography } from '@mui/material';
import React from 'react'

export const Login = () => {
  return (
    
    <div style={{marginTop:"88px"}}>
        <Typography veriant='h1'>LOGIN</Typography><br></br><br></br>
    <TextField label="enter name"variant='outlined'/><br></br><br></br>
    <TextField label="password"variant='outlined'/><br></br><br></br>
    <Button variant='contained'color='warning'>LOG IN</Button><br></br>
    </div>
    
  );
}
