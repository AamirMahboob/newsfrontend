import { createTheme } from "@mui/material";

import { typography } from "./Components-Theme/typography";
import { muiButton } from "./Components-Theme/muiButton";
import { customPrimaryColors, customSecondaryColors } from "./customColors";
import { inputTextField, inputTextFilledInput } from "./Components-Theme/input";
import { themeBreakPoints } from "./Components-Theme/breakPoints";
import shadows from "@mui/material/styles/shadows";
const theme = createTheme({
  breakpoints: {
    values: {
      ...themeBreakPoints.values,
    },
  },
  shadows: [...shadows],
  palette: {
    primary: {
      ...customPrimaryColors,
    },
    secondary: {
      ...customSecondaryColors,
    },
  },
  typography: typography(),

  shape: {
    borderRadius: "0px",
  },
  components: {
    MuiButton: {
      ...muiButton,
    },
    MuiTextField: {
      ...inputTextField,
    },
    MuiFilledInput: {
      ...inputTextFilledInput,
    },
    MuiTooltip: {
      defaultProps: {
        placement: "right",
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
    },
  },
});
export default theme;
