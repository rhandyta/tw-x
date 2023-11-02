"use client";
import Loading from "@/app/loading";
import ButtonBack from "@/components/ButtonBack";
import CustomBoxBorderedBottom from "@/components/CustomBoxBorderedBottom";
import CustomButton from "@/components/CustomButton";
import CustomContainer from "@/components/CustomContainer";
import ErrorMessageField from "@/components/ErrorMessageField";
import InputUpload from "@/components/InputUpload";
import { db, storage } from "@/libs/firebase";
import { slugify } from "@/utils/helpers";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Formik, Form } from "formik";
import { useState } from "react";
import * as yup from "yup";

function generateRandomFileName() {
  const randomString = Math.random().toString(36).substring(7);
  const timestamp = Date.now();
  return `${timestamp}-${randomString}`;
}

const uploadImageAsPromises = (imageFile) => {
  return new Promise(function (resolve, reject) {
    const uniqueFileName = generateRandomFileName();
    let storageRef = ref(storage, `portfolio/images/works/${uniqueFileName}`);
    let uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      }
    );
  });
};

const store = async (data) => {
  console.log(data)
  let dataPictures = [];
  for (let i = 0; i < data.pictures.length; i++) {
    let upload = await uploadImageAsPromises(data.pictures[i]);
    dataPictures.push({
      title: `${data.title} Picture ${i}`,
      picture: upload,
    });
  }
  const { challenge, outcome, ...storeData } = {
    ...data,
    pictures: dataPictures,
  };

  const docRef = await addDoc(collection(db, "works"), {
    ...storeData,
    slug: slugify(data.title),
    projects: [
      {
        description: data.challenge,
        name: "challenge",
      },
      {
        description: data.outcome,
        name: "outcome",
      },
    ],
    updatedAt: serverTimestamp(),
    createdAt: serverTimestamp(),
  });
};

function page() {
  const [isLoading, setIsLoading] = useState(false);

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
    pictures: yup
      .array()
      .min(5)
      .max(5)
      .of(
        yup
          .mixed()
          .test("file-type", "Hanya gambar yang diperbolehkan", (value) => {
            if (!value) return true;
            return /^image\/(jpeg|png|gif)$/.test(value.type);
          })
      ),
  });

  const onSubmit = async (values, props) => {
    setIsLoading(true);
    await store(values);
    props.resetForm();
    setIsLoading(false);
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
                        <InputUpload
                          type="file"
                          multiple
                          name="pictures"
                          onChange={(event) =>
                            props.setFieldValue(
                              "pictures",
                              Array.from(event.target.files)
                            )
                          }
                          onBlur={props.handleBlur}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                {isLoading ? (
                  <Loading />
                ) : (
                  <CustomButton
                    type="submit"
                    sx={{ marginTop: 2, display: "block", width: "100%" }}
                    disabled={
                      !props.isValid || props.isSubmitting || !props.dirty
                    }
                  >
                    Add Data
                  </CustomButton>
                )}
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
