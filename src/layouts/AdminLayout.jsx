// AdminLayout.js
import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AppBar, Box, CssBaseline, Toolbar, Typography, IconButton, useTheme } from "@mui/material";
import Sidebar from "../components/admincomponents/Sidebar";
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

const AdminLayout = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const theme = useTheme();
  const location = useLocation();
  
  console.log(location.pathname,"location")

  const handleDrawerToggle = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Header */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)`, xs: "100%" },
          ml: { md: `${drawerWidth}px` },
          backgroundColor:'#1f2937',
        }}
      >
        <Toolbar>
          {/* Show menu icon button on small screens */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Sidebar
        open={openSideBar}
        handleDrawerToggle={handleDrawerToggle}
      />

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)`, xs: "100%" },
          
        }}
      >
        <Toolbar />  
        <Outlet />  
      </Box>
    </Box>
  );
};

export default AdminLayout;
