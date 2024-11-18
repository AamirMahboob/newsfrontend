import { Container, Typography, useTheme, useThemeProps } from "@mui/material";
import React from "react";

const FooterBottom = () => {
    const theme = useTheme();
  return (
    <Container maxWidth="xxl" sx={{ padding: "20px",backgroundColor:theme.palette.primary.main }}>
      <Typography
        variant="body2"
        color="white"
        sx={{ textAlign: "center" }}
      >
       © 2024 | Designed and coded with ❤️️ by Aamir Shah
      </Typography>
    </Container>
  );
};

export default FooterBottom;
