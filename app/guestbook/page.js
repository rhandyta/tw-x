import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import CustomBoxBorderedBottom from "@/components/CustomBoxBorderedBottom";
import CustomContainer from "@/components/CustomContainer";
import User from "@/components/User";
import { grey } from "@mui/material/colors";
import Image from "next/image";
import FormGuestBook from "@/components/pages/guestbook/FormGuestBook";
import { db } from "@/libs/firebase";
import { collection, getDocs } from "firebase/firestore";

async function page() {
  const data = [];
  const querySnapShot = await getDocs(collection(db, 'messages'));

  querySnapShot.forEach((doc) => (
    data.push(doc.data())
  ))
  
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
            <Box
              width="100%"
              overflow="auto"
              my={2}
              height={250}
              maxHeight={250}
              borderRadius={2}
              p={2}
              sx={{
                border: `1px solid ${grey[600]}`,
              }}
            >
              <Grid container>
                {data.map((doc) => (
                  <Grid
                    item
                    key={doc.name}
                    xs={12}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      borderBottom: "1px solid grey",
                      padding: "10px 0",
                    }}
                  >
                    <Image
                      src={doc.picture}
                      alt={doc.name}
                      width={50}
                      height={50}
                      style={{ borderRadius: "50%" }}
                    />
                    <Stack>
                      <Typography variant="subtitle1" component="h6">
                        {doc.name}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        component="p"
                        color="secondary"
                      >
                        {doc.message}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <FormGuestBook />

          </Box>
          <User />
        </CustomContainer>
      </Box>
    </CustomBoxBorderedBottom>
  );
}

export default page;
