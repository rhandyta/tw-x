import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { profile } from "@/utils/constant";
import Link from "next/link";
import CustomBoxBorderedBottom from "@/components/CustomBoxBorderedBottom";
import CustomContainer from "@/components/CustomContainer";
import CustomButton from "@/components/CustomButton";

export async function generateMetadata({params, searchParams}, parent) {

  return {
    title: "About Me",
    description:
      "Lihat biografi Rhandyta Briantama sebagai Software Engineer secara lengkap di halaman ini.",
    keywords: ["Biography", "Portfolio", "Rhandyta", "Briantama", "Portfolio", "Software Engineer", "Personal Website Portfolio"],
    category: "personal, biography",
    alternates: {
      canonical: "/about",
    },
  
    other: {
      "page-topic": "Biografi Rhandyta Briantama secara lengkap",
      "revisit-after": "1 year",
      expires: "never",
    },
  
    openGraph: {
      title: "About Me",
      url: "/about",
      siteName: "Portfolio Rhandyta Briantama",
      description: "Lihat biografi Rhandyta Briantama sebagai Software Engineer secara lengkap di halaman ini.",
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

function page() {
  return (
    <CustomBoxBorderedBottom>
      <Typography variant="h2" component="h1">
        About
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
            height: "100%",
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            Rhandyta Briantama
          </Typography>
          <Typography
            variant="body1"
            component="h3"
            color="secondary"
            gutterBottom
            sx={{ textAlign: { xs: "justify", md: "left" } }}
          >
            loremlorem lorem lorem llorem lorenlorem loremloremlorem lorem lorem
            llorem lorenlorem loremloremlorem lorem lorem llorem lorenlorem
            loremloremlorem lorem lorem llorem lorenlorem loremloremlorem lorem
            lorem llorem lorenlorem lorem
          </Typography>
          <Box
            sx={{
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <Image
              src={profile.src}
              placeholder="blur"
              alt="profile rhandy"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "400px",
                borderRadius: "10px",
                marginBottom: "10px",
                backgroundPosition: "top",
                objectFit: "contain",
              }}
            />
          </Box>

          <Typography
            variant="subtitle2"
            component="p"
            color="secondary"
            gutterBottom
            sx={{ textAlign: { xs: "justify", md: "left" } }}
          >
            loremlorem lorem lorem llorem lorenlorem loremloremlorem lorem lorem
            llorem lorenlorem loremloremlorem lorem lorem llorem lorenlorem
            loremloremlorem lorem lorem llorem lorenlorem loremloremlorem lorem
            lorem llorem lorenlorem loremloremlorem lorem lorem llorem
            lorenlorem loremloremlorem lorem lorem llorem lorenlorem
            loremloremlorem lorem lorem llorem lorenlorem loremloremlorem lorem
            lorem llorem lorenlorem loremloremlorem lorem lorem llorem
            lorenlorem loremloremlorem lorem lorem llorem lorenlorem
            loremloremlorem lorem lorem llorem lorenlorem loremloremlorem lorem
            lorem llorem lorenlorem loremloremlorem lorem lorem llorem
            lorenlorem loremloremlorem lorem lorem llorem lorenlorem
            loremloremlorem lorem lorem llorem lorenlorem loremloremlorem lorem
            lorem llorem lorenlorem loremloremlorem lorem lorem llorem
            lorenlorem loremloremlorem lorem lorem llorem lorenlorem
            loremloremlorem lorem lorem llorem lorenlorem loremloremlorem lorem
            lorem llorem lorenlorem loremloremlorem lorem lorem llorem
            lorenlorem loremloremlorem lorem lorem llorem lorenlorem
            loremloremlorem lorem lorem llorem lorenlorem loremloremlorem lorem
            lorem llorem lorenlorem loremloremlorem lorem lorem llorem
            lorenlorem loremloremlorem lorem lorem llorem lorenlorem
            loremloremlorem lorem lorem llorem lorenlorem loremloremlorem lorem
            lorem llorem lorenlorem loremloremlorem lorem lorem llorem
            lorenlorem loremloremlorem lorem lorem llorem lorenlorem
            loremloremlorem lorem lorem llorem lorenlorem loremloremlorem lorem
            lorem llorem lorenlorem loremloremlorem lorem lorem llorem
            lorenlorem loremloremlorem lorem lorem llorem lorenlorem lorem
          </Typography>
          <Link href="/guestbook" className="button-link">
            <CustomButton>Contact Me</CustomButton>
          </Link>
        </CustomContainer>
      </Box>
    </CustomBoxBorderedBottom>
  );
}

export default page;
