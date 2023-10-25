import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

function CustomButton({ text = "view all work", children, ...props }) {
  return (
    <Button
      variant="outlined"
      sx={{
        display: "block",
        width: "100%",
        color: "secondary.main",
        border: `1px solid ${grey[600]}`,
        "&:hover": {
          color: "primary.main",
        },
      }}
      {...props}
    >
      { children ? children : text }
    </Button>
  );
}

export default CustomButton;
