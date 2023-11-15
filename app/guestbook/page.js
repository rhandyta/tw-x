import React from "react";
import { Box, Typography } from "@mui/material";
import CustomBoxBorderedBottom from "@/components/CustomBoxBorderedBottom";
import CustomContainer from "@/components/CustomContainer";
import User from "@/components/User";
import FormGuestBook from "@/components/pages/guestbook/FormGuestBook";
import { grey } from "@mui/material/colors";
import BoxListGuesBook from "@/components/pages/guestbook/BoxListGuesBook";


export async function generateMetadata({params, searchParams}, parent) {

  return {
    title: "Guest Book",
    description:
      "Lihat pesan yang dikirimkan oleh para pengunjung di halaman ini.",
    keywords: ["Guestbook", "Portfolio", "Rhandyta", "Briantama", "Portfolio", "Software Engineer", "Personal Website Portfolio"],
    category: "personal, news",
    alternates: {
      canonical: "/guestbook",
    },
  
    other: {
      "page-topic": "Pesan yang di kirimkan ke Rhandyta Briantama",
      "revisit-after": "1 year",
      expires: "never",
    },
  
    openGraph: {
      title: "Guest Book",
      url: "/guestbook",
      siteName: "Portfolio Rhandyta Briantama",
      description: "Lihat pesan yang dikirimkan oleh para pengunjung di halaman ini.",
      images: [
        {
          url: "/assets/images/profile.jpg",
          width: 800,
          height: 600,
        },
        {
          url: "/assets/images/profile.jpg",
          width: 1800,
          height: 1600,
          alt: "Profile Picture",
        },
      ],
      locale: "id_ID",
      type: "website",
      authors: ['Rhandyta Briantama', 'Rhandyta', "Rhandy", "Briantama"],
    },
  }
}

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
