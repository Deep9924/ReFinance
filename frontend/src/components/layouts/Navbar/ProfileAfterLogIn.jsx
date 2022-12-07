//https://mui.com/material-ui/react-app-bar/#main-content

import React, { useState, } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { Box, IconButton, Menu, Avatar, Tooltip, MenuItem, Typography, ListItemIcon } from "@mui/material";
import Logout from '@mui/icons-material/Logout';
import { useAuth } from '../../../firebase/AuthContext';

const settings = [
  { "name": "Add Stock", "func": "addstock" },
  { "name": "Remove Stock", "func": "removestock" },
  { "name": "Add News", "func": "addnews" },
  { "name": "Remove News", "func": "removenews" }]

const ProfileAfterLogIn = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [error, setError] = useState("");
  const { logout, userProfile } = useAuth();
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    setError("")
    try {
      await logout()
      navigate("/")
    } catch (e) {
      console.log(e)
      setError("Failed to log out");
      console.log(error)
    }
  }

  return (
    <div>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open menu">
          <IconButton onClick={handleOpenUserMenu} sx={{ ml: 3, mr: -1.5, p: 0 }}>
            <Avatar alt={userProfile && userProfile.firstname} src={userProfile && userProfile.avatar} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '40px' }}
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
          <Typography textAlign="left" sx={{ ml: 2, mr: 2, fontSize: 18, fontWeight: 600 }}>{userProfile && ("Hello, " + userProfile.firstname)}</Typography>
          {userProfile && userProfile.role === "admin" ?
            settings.map((setting) => (
              <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                <NavLink to={`/${setting.func}`}>
                  <Typography textAlign="center">{setting.name}</Typography>
                </NavLink>
              </MenuItem>
            )) : ""}
          <MenuItem onClick={() => { handleLogout(); handleCloseUserMenu(); }}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </div>
  )
}

export default ProfileAfterLogIn;