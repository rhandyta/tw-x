"use client"
import { IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import styled from "@emotion/styled";

const CustomButtonIcon = styled(IconButton)(({ theme }) => ({
  border: `1px solid ${grey[600]}`,
  borderRadius: "5px",
  "&:hover": {
    border: `1px solid ${grey[500]}`,
    color: grey[400],
  },
}));
export default CustomButtonIcon