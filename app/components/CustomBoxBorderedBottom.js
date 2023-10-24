"use client"
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";



const CustomBoxBorderedBottom = styled(Box)(({theme}) => ({
    borderBottom: `2px solid ${grey[800]}`,
}));


export default CustomBoxBorderedBottom;