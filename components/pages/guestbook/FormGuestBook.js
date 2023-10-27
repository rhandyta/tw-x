"use client";
import CustomButton from "@/components/CustomButton";
import { auth } from "@/libs/firebase";
import { Grid, TextField } from "@mui/material";
import { red } from "@mui/material/colors";
import { ErrorMessage, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";

function FormGuestBook() {
  const [isClient, setIsClient] = useState(false) 
  
  const initialValues = {
    message: "",
  };

  const validationSchema = yup.object({
    message: yup.string().required().min(3),
  });

  const onSubmit = (values, props) => {
    console.log(values);
    console.log(props);
    props.resetForm();
  };

  useEffect(() => {
    setIsClient(true)
  }, [])

  if(!isClient) return false;
  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
    >
      {(props) => (
        <Form>
          {auth.currentUser && (
            <>
              <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="standard-basic"
                    label="Message"
                    variant="standard"
                    multiline
                    rows={4}
                    fullWidth
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.message}
                    name="message"
                  />
                </Grid>
                <ErrorMessage name="message">
                  {(error) => (
                    <Grid item xs={12} sx={{ color: red[400] }}>
                      {error}
                    </Grid>
                  )}
                </ErrorMessage>
              </Grid>
              <CustomButton
                type="submit"
                sx={{ marginTop: 2, display: "block", width: "100%" }}
                disabled={!props.isValid || props.isSubmitting || !props.dirty}
              >
                Send Message
              </CustomButton>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
}

export default FormGuestBook;
