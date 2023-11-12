"use client";
import CustomButton from "@/components/CustomButton";
import { auth, db } from "@/libs/firebase";
import { Grid, Stack, TextField } from "@mui/material";
import { red } from "@mui/material/colors";
import { ErrorMessage, Form, Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { verifyCaptcha } from "@/services/captcha/captcha";
import ReCAPTCHA from "react-google-recaptcha";

function FormGuestBook() {
  const [isClient, setIsClient] = useState(false);
  const recaptchaRef = useRef(null);
  const [isVerified, setIsVerified] = useState(false);
  const [user, setUser] = useState(null);

  async function handleCaptchaSubmission(token) {
    await verifyCaptcha(token)
          .then(() => setIsVerified(true))
          .catch(() => setIsVerified(false))
  }

  const initialValues = {
    message: "",
  };

  const validationSchema = yup.object({
    message: yup.string().required().min(3),
  });

  const onSubmit = async (values, props) => {
    await addDoc(collection(db, "messages"), {
      name: auth.currentUser.displayName,
      picture: auth.currentUser.photoURL,
      message: values.message,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    props.resetForm();
  };

  useEffect(() => {
    setIsClient(true);
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser); 
    });

    return () => unsubscribe(); 
  }, []);

  if (!isClient) return false;
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
              <Stack mt={2} alignItems="center">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_KEY_RECAPTCHA_SITE}
                ref={recaptchaRef}
                onChange={handleCaptchaSubmission}
              />
              </Stack>
              <CustomButton
                type="submit"
                sx={{ marginTop: 2, display: "block", width: "100%" }}
                disabled={!props.isValid || props.isSubmitting || !props.dirty || !isVerified}
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
