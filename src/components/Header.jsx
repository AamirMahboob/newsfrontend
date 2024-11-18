import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material';
import amircv from '../../public/CV.pdf'
const pages = [
  { name: 'About', link: '#about' },
  { name: 'Work', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#footer' },
  { name: 'Signin', link: '/admin/signin' }


];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [scrolling, setScrolling] = React.useState(false);

  const theme = useTheme(); // Ensure ThemeProvider wraps this component
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar 
      position="fixed"
      sx={{
        // backgroundColor: scrolling ? theme.palette.primary.main : 'transparent',
        backgroundColor:"black",
        transition: 'background-color 0.3s ease-in-out',
        boxShadow: scrolling ? theme.shadows[4] : 'none',
        borderBottom: scrolling && "1px solid transparent"
      }} 
    >
      <Container maxWidth="xl">
        <Box 
          sx={{
            [theme.breakpoints.up('md')]: {
               marginX:'100px'
            },


          }}
        >
        <Toolbar disableGutters>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            &lt;AA /&gt; 
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map(({ name, link }) => (
                <MenuItem key={name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex',  md: 'none' },
              justifyContent: 'flex-end',
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            AA
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map(({ name, link }) => (
              <Button
                key={name}
                href={link}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <a href="/CV.pdf" download="amircv.pdf" target='blank' >
            <Button variant="contained">
              Download CV
            </Button>
            </a>
            
          </Box>
        </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Header;



// import React, { useState } from "react";
// import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, useTheme } from "@mui/material";

// const Hero = () => {
//   const theme = useTheme();
//   const [category, setCategory] = useState("all");

//   // Dummy Data for news items
//   const newsData = [
//     {
//       id: 1,
//       title: "Political Changes in the Middle East",
//       date: "Nov 1, 2024",
//       summary: "A look into recent political changes impacting the Middle East and global relations.",
//       category: "politics",
//       image: "https://via.placeholder.com/300x180?text=Politics+News"
//     },
//     {
//       id: 2,
//       title: "Middle East Stock Markets Rally",
//       date: "Nov 3, 2024",
//       summary: "Stock markets in the Middle East are on the rise as new economic reforms are implemented.",
//       category: "business",
//       image: "https://via.placeholder.com/300x180?text=Business+News"
//     },
//     {
//       id: 3,
//       title: "New Cultural Festival Announced",
//       date: "Nov 5, 2024",
//       summary: "A new cultural festival celebrating Middle Eastern heritage will be held in Dubai next month.",
//       category: "culture",
//       image: "https://via.placeholder.com/300x180?text=Culture+News"
//     },
//     {
//       id: 4,
//       title: "Football Fever in the Middle East",
//       date: "Nov 6, 2024",
//       summary: "Football fans across the Middle East gear up for the upcoming regional championships.",
//       category: "sports",
//       image: "https://via.placeholder.com/300x180?text=Sports+News"
//     },
//     {
//       id: 5,
//       title: "Economic Growth on the Rise",
//       date: "Nov 7, 2024",
//       summary: "Middle Eastern economies are expected to grow significantly over the next few years.",
//       category: "business",
//       image: "https://via.placeholder.com/300x180?text=Business+News"
//     }
//   ];

//   // Filter news based on category
//   const filteredNews = category === "all" ? newsData : newsData.filter(item => item.category === category);

//   return (
//     <Container maxWidth="lg" sx={{ py: 5, backgroundColor: theme.palette.background.default }}>
//       {/* Header Section */}
//       <Typography variant="h3" sx={{ textAlign: "center", mb: 4, fontWeight: 'bold' }}>
//         Middle East News
//       </Typography>
//       <Typography variant="subtitle1" sx={{ textAlign: "center", color: theme.palette.text.secondary }}>
//         Get the latest updates from the Middle East, covering politics, business, sports, and more.
//       </Typography>

//       {/* Category Filter */}
//       <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, my: 4 }}>
//         {["All", "Politics", "Business", "Sports", "Culture"].map((cat) => (
//           <Typography
//             key={cat}
//             onClick={() => setCategory(cat.toLowerCase())}
//             sx={{
//               cursor: "pointer",
//               color: category === cat.toLowerCase() ? theme.palette.primary.main : theme.palette.text.primary,
//               fontWeight: category === cat.toLowerCase() ? "bold" : "normal"
//             }}
//           >
//             {cat}
//           </Typography>
//         ))}
//       </Box>

//       {/* News Grid */}
//       <Grid container spacing={4}>
//         {filteredNews.map((newsItem) => (
//           <Grid item xs={12} sm={6} md={4} key={newsItem.id}>
//             <Card sx={{ maxWidth: 345, backgroundColor: "#f5f5f5", borderRadius: 3 }}>
//               <CardMedia
//                 component="img"
//                 height="180"
//                 image={newsItem.image}
//                 alt={newsItem.title}
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   {newsItem.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//                   {newsItem.date}
//                 </Typography>
//                 <Typography variant="body2" color="text.primary">
//                   {newsItem.summary}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Footer */}
//       <Box sx={{ mt: 8, textAlign: "center", color: theme.palette.text.secondary }}>
//         <Typography variant="body2">© 2024 Middle East News | Follow us on social media</Typography>
//       </Box>
//     </Container>
//   );
// };

// export default Hero;
// // 