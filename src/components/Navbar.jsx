import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Redux Toolkit Cart
        </Typography>

        <Box>
          <Button color="inherit">Products</Button>
          <Button color="inherit">Cart</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
