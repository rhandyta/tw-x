import React from "react";
import { Box, Typography } from "@mui/material";
import CustomBoxBorderedBottom from "@/components/CustomBoxBorderedBottom";
import CustomContainer from "@/components/CustomContainer";
import User from "@/components/User";
import FormGuestBook from "@/components/pages/guestbook/FormGuestBook";
import { grey } from "@mui/material/colors";
import BoxListGuesBook from "@/components/pages/guestbook/BoxListGuesBook";

async function page() {
 
  return (
    <CustomBoxBorderedBottom>
      <Typography variant="h2" component="h1">
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
              maxHeight={250}
              borderRadius={2}
              p={2}
              sx={{
                border: `1px solid ${grey[600]}`,
              }}
            >
             <BoxListGuesBook/>
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
