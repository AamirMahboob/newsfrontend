import React from 'react'
import Container from '@mui/material/Container'
import { useTheme,  } from '@mui/material'
import { CustomTypo } from './common/CustomTypo'
import Grid from "@mui/material/Grid2";

 

const Skills = () => {
    const theme = useTheme()
  return (
     <Container maxWidth="xxl" sx={{backgroundColor:theme.palette.primary.main,height:'30vh'}}>
       <CustomTypo variant="h2" color="white" sx={{ mb: 4 }}>Skills</CustomTypo>
       <Grid container spacing={0}>
                        <Grid item xs={12} md={4}>   
                        </Grid>
                        <Grid item xs={12} md={4}>
                            
                        </Grid>
                         
       </Grid>
     </Container>
  )
}

export default Skills