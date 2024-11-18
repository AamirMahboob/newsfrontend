import React from 'react'
import Container from '@mui/material/Container'
import { CustomTypo } from './common/CustomTypo'
import ExpCard from './common/ExpCard'

const Experience = () => {
  return (
    <Container maxWidth="xxl"
      sx={{
        height: "auto",
        backgroundColor: "#0a101a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:'center',
        paddingY: "60px",
        gap: 5
      }}
      id="experience"
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
          Experience
        </CustomTypo>
          <ExpCard />
          <ExpCard />
          <ExpCard />


    </Container>
  )
}

export default Experience