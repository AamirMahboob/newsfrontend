import React from "react";
import { Box, Container, Stack, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import img from "../assets/img.jpeg";
import { CustomTypo } from "./common/CustomTypo";

const Aboutme = () => {
  const theme = useTheme();
  return (
    <Container
      maxWidth="xxl"
      sx={{
        height: "auto",
        backgroundColor: theme.palette.secondary.dark,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:'center',
        paddingY: "60px",
        gap: 5
      }}
      id="about"
    >
      <CustomTypo
          variant="h6"
          sx={{
            backgroundColor: "#374151",
            textAlign: "center",
            paddingX: "20px",
            paddingY: "6px",
            borderRadius: "20px",
            marginTop: 2,
            width: "10em",
          }}
          color="white"
        >
           About me
        </CustomTypo>
      <Box
       sx={{
        [theme.breakpoints.up('md')]: {
           marginX:'100px'
        },


      }}
      > 
        
      <Grid container spacing={2}  >
        
        <Grid size={{ xs: 12, md: 6 }} sx={{display:"flex",alignItems:'center',justifyContent:"center"}}  >
          <Box sx={{ position: "relative", width: "350px", height: "350px",   }}>
            <Box
              sx={{
                position: "absolute",
                backgroundColor: "#374151",
                
                width: "300px",
                height: "300px",
                 
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                backgroundColor: "black",
                width: "300px",
                height: "300px",
                bottom: 80,
                left: "40px",
                border: '10px solid black'
              }}
            >
              <img
                src={img}
                alt="Profile"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
               <CustomTypo variant="h5" fontWidth={500} color="white">Curious about me? Here you have it:</CustomTypo>
               <CustomTypo variant="h5" fontWidth={500} color="white">I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</CustomTypo>
               <CustomTypo variant="h5" fontWidth={500} color="white">I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</CustomTypo>
               <CustomTypo variant="h5" fontWidth={500} color="white">I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</CustomTypo>
               <CustomTypo variant="h5" fontWidth={500} color="white">When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.

</CustomTypo>
               <CustomTypo variant="h5" fontWidth={500} color="white">Finally, some quick bits about me.

B.E. in Computer Engineering
Full time freelancer
Avid learner
Aspiring indie hacker</CustomTypo>
            </Stack>
             <Stack>
                <CustomTypo variant="h5" fontWidth={500} color="white">One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</CustomTypo>
             </Stack>

        </Grid>
      </Grid>
      </Box>
    </Container>
  );
};

export default Aboutme;
