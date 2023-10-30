import CustomBoxBorderedBottom from "@/components/CustomBoxBorderedBottom";
import CustomButton from "@/components/CustomButton";
import CustomContainer from "@/components/CustomContainer";
import SignIn from "@/components/pages/guestbook/SignIn";
import CustomButtonIcon from "@/components/pages/home/CustomButtonIcon";
import { Box, Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import React from "react";

function page() {
  return (
    <CustomBoxBorderedBottom>
      <Typography variant="h2" component="h1">
        Login
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CustomContainer maxWidth="sm">
          <Card>
            <CardContent>
                <Grid container justifyContent="center" rowSpacing={2}>
                    <Grid item xs={12}>
                        <TextField 
                            variant="outlined"
                            placeholder="Password"
                            name="password"
                            fullWidth
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            variant="outlined"
                            placeholder="Password"
                            name="password"
                            fullWidth
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomButton>Login</CustomButton>
                    </Grid>
                </Grid>
            </CardContent>
          </Card>
        </CustomContainer>
      </Box>
    </CustomBoxBorderedBottom>
  );
}

export default page;
