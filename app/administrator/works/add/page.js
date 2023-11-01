"use client";
import ButtonBack from "@/components/ButtonBack";
import CustomBoxBorderedBottom from "@/components/CustomBoxBorderedBottom";
import CustomButton from "@/components/CustomButton";
import CustomContainer from "@/components/CustomContainer";
import ErrorMessageField from "@/components/ErrorMessageField";
import styled from "@emotion/styled";
import { CloudUpload } from "@mui/icons-material";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function page() {
  const initialValues = {
    title: "",
    category: "",
    timeline: "",
    position: "Programmer",
    description: "",
    challenge: "",
    outcome: "",
    pictures: [],
  };

  const validationSchema = yup.object().shape({
    title: yup.string().required().min(3),
    category: yup.string().required().min(3),
    timeline: yup.string().required(),
    position: yup.string().required(),
    description: yup.string().required().min(3),
    challenge: yup.string().required().min(3),
    outcome: yup.string().required().min(3),
    pictures: yup.array().min(5).max(5).of(yup.mixed().test('file-type',
    'Hanya gambar yang diperbolehkan',
    (value) => {
      if (!value) return true; // Biarkan kosong
      // Pastikan jenis file adalah gambar (misalnya, jpg, png, gif)
      return /^image\/(jpeg|png|gif)$/.test(value.type);
    })),
  });

  const onSubmit = (values, props) => {
    console.log({ values, props });
  };

  return (
    <CustomBoxBorderedBottom>
      <Typography variant="h2" component="h1">
        Add Work
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <CustomContainer maxWidth="md">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <Grid container columnSpacing={1}>
                  <Grid item xs={12} sm={6}>
                    <Grid container rowSpacing={1}>
                      <Grid item xs={12}>
                        <TextField
                          variant="filled"
                          label="Title"
                          name="title"
                          size="small"
                          fullWidth
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.title}
                        />
                        <ErrorMessageField name="title" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="filled"
                          label="Category"
                          name="category"
                          size="small"
                          fullWidth
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.category}
                        />
                        <ErrorMessageField name="category" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="filled"
                          label="Timeline"
                          name="timeline"
                          size="small"
                          fullWidth
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.timeline}
                        />
                        <ErrorMessageField name="timeline" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="filled"
                          label="Position"
                          name="position"
                          size="small"
                          fullWidth
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.position}
                        />
                        <ErrorMessageField name="position" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Grid container rowSpacing={1}>
                      <Grid item xs={12}>
                        <TextField
                          variant="filled"
                          label="Description"
                          name="description"
                          multiline
                          maxRows={4}
                          fullWidth
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.description}
                        />
                        <ErrorMessageField name="description" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="filled"
                          label="Challenge"
                          name="challenge"
                          multiline
                          maxRows={4}
                          fullWidth
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.challenge}
                        />
                        <ErrorMessageField name="challenge" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="filled"
                          label="Outcome"
                          name="outcome"
                          multiline
                          maxRows={4}
                          fullWidth
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.outcome}
                        />
                        <ErrorMessageField name="outcome" />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          sx={{ width: "100%" }}
                          component="label"
                          variant="contained"
                          startIcon={<CloudUpload />}
                        >
                          Upload file
                          <VisuallyHiddenInput
                            type="file"
                            multiple
                            name="pictures"
                            onChange={(event) => props.setFieldValue('pictures', Array.from(event.target.files))}
                            onBlur={props.handleBlur}
                          />
                        </Button>
                        <ErrorMessageField name="pictures" />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <CustomButton
                  type="submit"
                  sx={{ marginTop: 2, display: "block", width: "100%" }}
                  disabled={
                    !props.isValid || props.isSubmitting || !props.dirty
                  }
                >
                  Add Data
                </CustomButton>
              </Form>
            )}
          </Formik>

          <ButtonBack />
        </CustomContainer>
      </Box>
    </CustomBoxBorderedBottom>
  );
}

export default page;
