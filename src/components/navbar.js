import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';
import { useAuth } from './auth';

const settings = ['Logout'];

function ResponsiveAppBar() {
  
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { logout } = useAuth();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
     <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to="/home" style={{color:"white",fontWeight:"bold",textDecoration:"none"}}>Home</Link>
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to="/about" style={{color:"white",fontWeight:"bold",textDecoration:"none"}}>About</Link>
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to="/listing" style={{color:"white",fontWeight:"bold",textDecoration:"none"}}>Job Listing</Link>
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to="/contact" style={{color:"white",fontWeight:"bold",textDecoration:"none"}}>Contact</Link>
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to="/showcase" style={{color:"white",fontWeight:"bold",textDecoration:"none"}}>Companies</Link>
              </Button>
              
        
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Menu">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={logout}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
