import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
    <div>
        <Typography variant="h4">REGISTRATION</Typography>
    
    <TextField label="enter name"varient='outlie'/><br></br><br></br>
    <TextField label="password"varient='filles'/><br></br><br></br>
    <TextField label="enter address"varient='filles'/><br></br>
    <Button variant='contained' color='error'>register</Button>
     </div>
  )
}

export default Registration