import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"#30cfd0"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           WeMONEY
          </Typography>
         
          <AccountCircleIcon  style={{marginRight:"20px"}} />
          <NotificationsIcon />
         
        </Toolbar>
      </AppBar>
    </Box>
      
    </div>
  )
}

export default Header
