import React from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import CustomBoxBorderedBottom from "@/components/CustomBoxBorderedBottom";
import CustomContainer from "@/components/CustomContainer";
import CustomButton from "@/components/CustomButton";

function page() {
  return (
    <CustomBoxBorderedBottom>
      <Typography variant="h3" component="h1">
        Let&#39;s Talk
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomContainer
          maxWidth="sm"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            textAlign: "justify",
          }}
        >
          <Typography variant="subtitle1" component="p" textAlign="left">
            If you just want to say hello and talk about interesting things, you
            can contact me /{" "}
            <a className="button-link" href="mailto:rhandytabriantama@mail.com">
              rhandytabriantama@mail.com
            </a>
          </Typography>

          <Box
            sx={{
              my: "15px",
              width: "100%",
              height: "auto",
            }}
          >
            <Grid container rowSpacing={2} columnSpacing={2}>
              <Grid item xs={12} sm={6}>
              <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              fullWidth
            />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              fullWidth
            />
              </Grid>
              <Grid item xs={12}>
              <TextField
              id="standard-basic"
              label="Description"
              variant="standard"
              multiline
              rows={4}
              fullWidth
            />
              </Grid>
            </Grid>
          </Box>

          <Link href="/contact" className="button-link">
            <CustomButton>Send Message</CustomButton>
          </Link>
        </CustomContainer>
      </Box>
    </CustomBoxBorderedBottom>
  );
}

export default page;
