import { styled, Typography } from "@mui/material";

export const CustomTypo = styled(Typography)(({ theme, fontWidth }) => ({
  fontWeight: fontWidth ? fontWidth : "600",
  fontSize: "62px",
  fontFamily: theme.typography.customFonts.Poppins
  
  // color: "#333333",
}));
