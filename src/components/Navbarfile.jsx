import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



const Navbarfile = () => {
  return (
    <div>
          <AppBar>
           <Toolbar>
            <Typography variant='h6'>My App</Typography>
            <Button variant='contained' color='error'><Link to={'/'} style={{textDecoration:"none",color:"white"}}>login In</Link></Button>
          
            <Button variant='contained' color='success'> <Link to={'/signup'} style={{textDecoration:"none",color:"white"}}> sign up</Link></Button>
            
           </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbarfile