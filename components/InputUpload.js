import { CloudUpload } from "@mui/icons-material";
import React from "react";
import ErrorMessageField from "./ErrorMessageField";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

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

function InputUpload({ name, ...props }) {
  return (
    <>
      <Button
        sx={{ width: "100%" }}
        component="label"
        variant="contained"
        startIcon={<CloudUpload />}
      >
        Upload file
        <VisuallyHiddenInput name={name} {...props}/>
      </Button>
      <ErrorMessageField name={name} />
    </>
  );
}

export default InputUpload;
