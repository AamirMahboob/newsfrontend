import { Box, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { CustomTypo } from "./CustomTypo";
import upwork from '../../assets/upwork.png'
const ExpCard = () => {
  return (
    <Grid
      container
      spacing={2}
      
      sx={{
        padding:'30px',
        width:"70%",
        // height:"40vh",
        backgroundColor:"#1f2937",
        borderRadius:"20px"
        
      }}
    >
      <Grid
         
         size={{ xs: 12, md: 3 }}

      >
        {/* <CustomTypo
          sx={{
            color: "white",
          }}
        >
            Upwork
        </CustomTypo> */}
        <img src={upwork} alt="" />
      </Grid>
      <Grid
        
        size={{ xs: 12, md: 6 }}


      >
        <CustomTypo
           sx={{
            color: "white",
          }}
        >
          Independent Freelancer
          
        </CustomTypo>
        <span
          style={{
            color: "white",
            lineHeight: "1.9",
          }}
        >
            <li>Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.</li>  
            <li>Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.</li>
          </span>  
      </Grid>
      <Grid
        
        size={{ xs: 12, md: 3 }}
      >
        <Typography
          sx={{
            color: "white",
          }}
        >Nov 2021 - Present</Typography>
      </Grid>
    </Grid>
  );
};

export default ExpCard;
