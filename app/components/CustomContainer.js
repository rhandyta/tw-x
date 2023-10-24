"use client";
import  styled  from "@emotion/styled";
import {  Container } from "@mui/material";

const CustomContainer = styled(Container)(({ theme }) => ({
  margin: `20px 0 !important`, // Hapus margin bawaan dengan !important
  padding: `${theme.spacing(0)} !important`,
}));


export default CustomContainer;