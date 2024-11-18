import React from "react";
import { Typography, Box, Container } from "@mui/material";
import JavascriptIcon from "@mui/icons-material/Code"; // Example MUI icon, replace with tech icons
// Import other icons from material-ui/icons or external sources
import Grid from "@mui/material/Grid2";

const skills = [
  { name: "Javascript", icon: <JavascriptIcon /> },
  { name: "Typescript", icon: <JavascriptIcon /> }, // Use correct icon
  { name: "React", icon: <JavascriptIcon /> }, // Use correct icon
  { name: "Next.js", icon: <JavascriptIcon /> },
  { name: "Next.js", icon: <JavascriptIcon /> }, // Use correct icon
  { name: "Next.js", icon: <JavascriptIcon /> },
  { name: "Next.js", icon: <JavascriptIcon /> },
  { name: "Next.js", icon: <JavascriptIcon /> },
  { name: "Next.js", icon: <JavascriptIcon /> },
  { name: "Next.js", icon: <JavascriptIcon /> },
  { name: "Next.js", icon: <JavascriptIcon /> },
  { name: "Next.js", icon: <JavascriptIcon /> },
   
  // Add more skills and correct icons
];

const SkillsSection = () => {
  return (
    <Container maxWidth="xxl" sx={{
        border:'2px solid white',
        backgroundColor: "#111827",
    }}  >
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingY: 5,
       
      }}  >
      <Typography variant="h5" color="white" align="center" gutterBottom
        sx={{
            backgroundColor: "#374151",
            paddingX: "20px",
            paddingY: "6px",
            borderRadius: "20px",
            marginTop: 2,
            width: "7em",
            margin: 3,


        }}
      >
        Skills
      </Typography>
      <Typography variant="h6" align="center" gutterBottom color="white">
        The skills, tools, and technologies I am really good at:
      </Typography>
      <Grid container spacing={4} justifyContent="center" marginTop={4}>
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Box textAlign="center" color="white">
              {skill.icon }
              <Typography color="white" variant="subtitle1" sx={{ mt: 1 }}>
                {skill.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
  );
};

export default SkillsSection;
