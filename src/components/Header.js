import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { logout } from '../redux/actions/authActions';
import TaskIcon from '@mui/icons-material/Task';

const Header = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(logout());
  };
  
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <TaskIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div">
            Advanced Todo App
          </Typography>
        </Box>
        
        {isAuthenticated && (
          <>
            <Typography variant="body1" sx={{ mr: 2 }}>
              Welcome, {user?.username || 'User'}
            </Typography>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;