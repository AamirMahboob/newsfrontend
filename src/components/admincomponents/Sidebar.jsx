import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CustomTypo } from "../common/CustomTypo";

const drawerWidth = 240;

const Sidebar = ({ open, handleDrawerToggle }) => {
  const theme = useTheme();

  return (
    <>
      {/* Permanent Drawer for larger screens */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" }, // Hide on smaller screens
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor:'#0a101a'
          },
        }}
        open
        
      >
        <Toolbar />
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%",backgroundColor:'#0a101a' }}>
          
          {/* Logo at the Top */}
          <Box sx={{ p: 2, textAlign: "center",marginTop:'-58px' }}>
             <CustomTypo color="white">
             &lt;AM /&gt; 
             </CustomTypo>
          </Box>
          
          <Box sx={{ flexGrow: 1, overflow: "auto" }}>
            <List   >
              <ListItem  button component={Link} to="dashboard">
                <ListItemText sx={{color:'white'}} primary="Dashboard" />
              </ListItem>
              <ListItem  button component={Link} to="hero">
                <ListItemText  sx={{color:'white'}} primary="Hero" />
              </ListItem>
              <ListItem button component={Link} to="admintestimonial">
                <ListItemText sx={{color:'white'}} primary="Testimonials" />
              </ListItem>
              <ListItem button component={Link} to="skills">
                <ListItemText  sx={{color:'white'}} primary="Skills" />
              </ListItem>
              <ListItem button component={Link} to="aboutme">
                <ListItemText sx={{color:'white'}}  primary="About me" />
              </ListItem>
            </List>
          </Box>

          {/* Logout at the Bottom */}
          <Box sx={{ mt: "auto", mb: 2 }}>
            <ListItem button component={Link} to="signin">
              <ListItemText sx={{color:'white'}} primary="Logout" />
            </ListItem>
          </Box>
        </Box>
      </Drawer>

      {/* Temporary Drawer for smaller screens */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" }, // Show on smaller screens
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          
          {/* Logo at the Top */}
          <Box sx={{ p: 2, textAlign: "center" }}>
            <img src="/path/to/logo.png" alt="Logo" style={{ width: "80%", height: "auto" }} />
          </Box>
          
          <Box sx={{ flexGrow: 1, overflow: "auto" }}>
            <List>
              <ListItem button component={Link} to="dashboard" onClick={handleDrawerToggle}>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem button component={Link} to="hero" onClick={handleDrawerToggle}>
                <ListItemText primary="Hero" />
              </ListItem>
              <ListItem button component={Link} to="admintestimonial" onClick={handleDrawerToggle}>
                <ListItemText primary="Testimonials" />
              </ListItem>
              <ListItem button component={Link} to="skills" onClick={handleDrawerToggle}>
                <ListItemText primary="Skills" />
              </ListItem>
              <ListItem button component={Link} to="aboutme" onClick={handleDrawerToggle}>
                <ListItemText primary="About me" />
              </ListItem>
            </List>
          </Box>

          {/* Logout at the Bottom */}
          <Box sx={{ mb: 2 }}>
            <ListItem button component={Link} to="signin" onClick={handleDrawerToggle}>
              <ListItemText primary="Logout" />
            </ListItem>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
