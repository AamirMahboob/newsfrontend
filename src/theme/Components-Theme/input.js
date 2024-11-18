import { customPrimaryColors, customSecondaryColors } from "../customColors";

export const inputTextField = {
  defaultProps: {
    fullWidth: false,
    variant: "outlined",
  },

  styleOverrides: {
    root: {
      border: "0px solid red", // This line isn't affecting the actual border
      fontSize: "1rem",
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "white", // This sets the default border color to white
        },
        "&:hover fieldset": {
          borderColor: "white", // This sets the hover state border color to white
        },
        "&.Mui-focused fieldset": {
          borderColor: "white", // This sets the focused state border color to white
        },
      },
    },
  },
};

export const inputTextFilledInput = {
  defaultProps: {
    disableUnderline: true,
    color: "primary",
  },
  styleOverrides: {
    colorPrimary: {
      backgroundColor: customPrimaryColors.light,
      color: customSecondaryColors.main,
    },
    colorSecondary: {
      backgroundColor: customSecondaryColors.main,
      color: customSecondaryColors.main,
    },
    input: {
      padding: "0",
      "&::placeholder": {
        color: customSecondaryColors.white,
      },
    },
  },
};
