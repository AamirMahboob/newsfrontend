import React from "react";
import Container from "@mui/material/Container";
import { Box, Button, TextField, styled } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { AboutSchema } from "../schemas/schemas";

const Aboutme = () => {
  const initialValues = {
    image: "",
    description: "",
  };

  return (
    <Container maxWidth="lg">
      <Box>About me</Box>
      <Formik
        initialValues={initialValues}
        validationSchema={AboutSchema}
        onSubmit={(values) => {
          console.log(values); // Check console for data here
        }}
      >
        {({ errors, isSubmitting, touched }) => (
          <Form
            style={{
              gap: "1rem",
              width: "100%",
              marginTop: "2rem",
            }}
          >
            <Field
              as={StyledTextField}
              name="image"
              variant="outlined"
              type="file" // Change type to file
              inputProps={{
                accept: "image/*", // Accept only image files
              }}
              fullWidth
              style={{ width: "100%" }}
              error={touched.name && Boolean(errors.name)}
              helperText={<ErrorMessage name="image" />}
            />

            <Field
              as={StyledTextField}
              name="description"
              variant="outlined"
              fullWidth
              style={{ width: "100%",marginTop:"10px" }}
              multiline={true}
              minRows={3}
              maxRows={5}
              error={touched.name && Boolean(errors.name)}
              helperText={<ErrorMessage name="description" />}
              
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              
              sx={{
                marginTop: "1rem",
              }}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Aboutme;

const StyledTextField = styled(TextField)({
  "& .MuiInputLabel-root": {
    color: "gray", // Label color
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "blue",
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: "green", // Hover border color
    },
    "&.Mui-focused fieldset": {
      borderColor: "purple", // Focused border color
    },
  },
  "& .MuiInputBase-input": {
    color: "black", // Text color
  },
});
