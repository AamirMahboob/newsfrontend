import React from "react";
import Container from "@mui/material/Container";
import { Box, Stack, useTheme } from "@mui/material";
import { CustomTypo } from "./common/CustomTypo";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
 
import { Tooltip, Snackbar } from '@mui/material';
import FooterBottom from "./FooterBottom";
import { Margin } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Footer = () => {
    const theme = useTheme()
    const email = "amirmehboob16@gmail.com";
    const handleCopy = () => {
      navigator.clipboard.writeText(email);
      alert("Email copied to clipboard!");
    };
  return (
    <>
    <Container
      maxWidth="xxl"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingY: "60px",
        // backgroundColor:theme.palette.primary.main
        backgroundColor:'black'
        
      }}
    >
      <Box sx={{ padding: "10px",display:'flex',flexDirection:'column',justifyContent:"center",alignItems:'center',width:'50%',gap:"10px" }}>
      <CustomTypo variant="h6" sx={{backgroundColor:"#374151",textAlign:'center',paddingX:'20px',paddingY:'6px',borderRadius:'20px'} }   color="white">Get in Touch</CustomTypo>
          
          <Stack spacing={1} marginTop={2} >
          <CustomTypo  fontSize={"20px"} fontWeight={400}  sx={{textAlign:"center"}} lineHeight={"28px"}   color="#d1d5db">
          What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.
          </CustomTypo>
          </Stack>
          <Stack marginTop={3} spacing={1}>
          <CustomTypo variant="h2" sx={{textAlign:"center"}}     color="rgb(249, 250, 251)">
          {email}
          <Tooltip title="Copy Email" arrow>
        {/* <EmailIcon 
          sx={{ fontSize: 40, color: '#333', cursor: 'pointer' ,}} 
          onClick={handleCopy} 
          
        /> */}
      </Tooltip>
          </CustomTypo>
          <CustomTypo variant="h2" sx={{textAlign:"center"}}    color="white">
          +92 3159142436
          </CustomTypo>
          </Stack>
          <Stack marginTop={3} spacing={1}>
          <CustomTypo variant="h5" fontWidth={'400px'} sx={{textAlign:"center"}}    color="#d1d5db">
            you may also find me on these platform
             
          </CustomTypo>
         <CustomTypo sx={{textAlign:"center", marginTop:'10px'}} >
          <a href="https://www.linkedin.com/in/syed-aamir-shah-7322ba1ab/" target="_blank" rel="noopener noreferrer"><LinkedInIcon  sx={{ fontSize: 40, color: '#333' }} /></a>
          <FacebookIcon style={{ fontSize: 40, color: '#1877F2' }} />
          <a href="https://github.com/AamirMahboob" target="_blank"><GitHubIcon style={{ fontSize: 40, color: '#333' }} /></a>
         </CustomTypo>
          </Stack>
          
      </Box>
      
    </Container>
    <FooterBottom />
    </>
  );
};

export default Footer;
