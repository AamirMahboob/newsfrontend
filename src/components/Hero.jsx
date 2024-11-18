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



// import React, { useEffect, useState } from "react";
// import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, CircularProgress, useTheme } from "@mui/material";
// import axios from "axios";

// const News = () => {
//   const theme = useTheme();
//   const [category, setCategory] = useState("all");
//   const [sportsData, setSportsData] = useState([]);
//   const [loading, setLoading] = useState(false);

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
//     // ... (other dummy data items)
//   ];

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true); // Start loading
//       try {
//         const response = await axios.get("http://localhost:5000/api/articles");
//         console.log("data:", response?.data);
//         setSportsData(response?.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false); 
//       }
//     };

//     fetchData();
//   }, []);

//   // Filter news based on category
//   const filteredNews = category === "all" ? sportsData : sportsData.filter(item => item.category === category);

//   return (
//     <Container maxWidth="xxl" sx={{ py: 5, backgroundColor: theme.palette.background.default }}>
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

//       {/* News Grid or Loading Indicator */}
//       {loading ? (
//         <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
//           <CircularProgress />
//         </Box>
//       ) : (
//         <Grid container spacing={4} maxWidth="xxl">
//           {filteredNews.map((newsItem) => (
//             <Grid item xs={12} sm={6} md={4} key={newsItem.id}>
//               <Card sx={{ maxWidth: 345, backgroundColor: "#f5f5f5", borderRadius: 3 }}>
//                 <CardMedia
//                   component="img"
//                   height="180"
//                   image={newsItem.image}
//                   alt={newsItem.title}
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     {newsItem.title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//                     {newsItem.date}
//                   </Typography>
//                   <Typography variant="body2" color="text.primary">
//                     {newsItem.summary}
//                   </Typography>
//                   <Typography variant="body2" color="text.primary">
//                     <a target="_blank" rel="noopener noreferrer" href={newsItem.link}>Read More</a>
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}

//       {/* Footer */}
//       <Box sx={{ mt: 8, textAlign: "center", color: theme.palette.text.secondary }}>
//         <Typography variant="body2">© 2024 Middle East News | Follow us on social media</Typography>
//       </Box>
//     </Container>
//   );
// };

// export default News;

import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import All from "./newscomps/alljazeera/All";
import Filtered from "./newscomps/alljazeera/filtered";

const Hero = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Tab content for different sections
  const TabContent = ({ index, children }) => {
    return selectedTab === index ? (
      <Box sx={{ p: 3 }}>
        {children}
      </Box>
    ) : null;
  };

  // Example components for each tab
 

  return (
    <Box sx={{ width: "100%",marginTop:"100px", bgcolor: "background.paper" }}>
      {/* Tab Navigation */}
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        centered
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="All" />
        <Tab label="Filtered" />
         
      </Tabs>

      {/* Tab Content */}
      <TabContent index={0}>
        <All />
      </TabContent>
      <TabContent index={1}>
        <Filtered />
      </TabContent>
       
    </Box>
  );
};

export default Hero;
