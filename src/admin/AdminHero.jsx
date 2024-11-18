import { Box, Container, useTheme, TextField, Button } from "@mui/material";
import React from "react";
import { heroSchema } from "../schemas/schemas";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { styled } from "@mui/system";

const AdminHero = () => {
  const theme = useTheme();
  const initialValue = {
    name: "",
    description: "",
    image: "",
    state: "",
    country: "",
  };

  return (
    <Container maxWidth="lg">
      <Box>Admin Hero</Box>
      <Formik
        initialValues={initialValue}
        validationSchema={heroSchema}
        onSubmit={(values) => {
          console.log(values); // Check console for data here
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form
            style={{
              gap: "1rem",
              width: "100%",
              marginTop: "2rem",
            }}
          >
            <Field
              as={StyledTextField}
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              style={{ width: "100%" }}
              error={touched.name && Boolean(errors.name)}
              helperText={<ErrorMessage name="name" />}
            />

            <Field
              as={StyledTextField}
              // label="Upload Image..."
              name="image"
              variant="outlined"
              fullWidth
              style={{ width: "100%" }}
              error={touched.image && Boolean(errors.image)}
              helperText={<ErrorMessage name="image" />}
              sx={{
                marginTop: "1rem",
              }}
              type="file" // Change type to file
              inputProps={{
                accept: "image/*", // Accept only image files
              }}
            />

            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <Field
                as={StyledTextField}
                label="State"
                name="state"
                variant="outlined"
                fullWidth
                error={touched.state && Boolean(errors.state)}
                helperText={<ErrorMessage name="state" />}
                style={{
                  marginTop: "1rem",
                }}
              />
              <Field
                as={StyledTextField}
                label="Country"
                name="country"
                variant="outlined"
                fullWidth
                error={touched.country && Boolean(errors.country)}
                helperText={<ErrorMessage name="country" />}
                style={{
                  marginTop: "1rem",
                }}
              />
            </Box>
            <Field
              as={StyledTextField}
              label="Description"
              name="description"
              variant="outlined"
              multiline
              minRows={3}
              maxRows={5}
              fullWidth
              error={touched.description && Boolean(errors.description)}
              helperText={<ErrorMessage name="description" />}
              style={{
                marginTop: "1rem",
              }}
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

export default AdminHero;

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
