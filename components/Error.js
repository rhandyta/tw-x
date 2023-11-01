import { Grid } from "@mui/material";
import { red } from "@mui/material/colors";
import { ErrorMessage } from "formik";
import React from "react";

function Error({name}) {
  return (
    <ErrorMessage name={name}>
      {(error) => (
        <Grid item xs={12} sx={{ color: red[400] }}>
          {error}
        </Grid>
      )}
    </ErrorMessage>
  );
}

export default Error;
