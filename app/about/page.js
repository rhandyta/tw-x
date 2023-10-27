import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { profile } from "@/utils/constant";
import Link from "next/link";
import CustomBoxBorderedBottom from "@/components/CustomBoxBorderedBottom";
import CustomContainer from "@/components/CustomContainer";
import CustomButton from "@/components/CustomButton";

function page() {
  return (
    <CustomBoxBorderedBottom>
      <Typography variant="h3" component="h1">
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
            Rhandy
          </Typography>
          <Typography variant="body1" component="h3" gutterBottom>
            loremlorem lorem lorem llorem lorenlorem loremloremlorem lorem lorem
            llorem lorenlorem loremloremlorem lorem lorem llorem lorenlorem
            loremloremlorem lorem lorem llorem lorenlorem loremloremlorem lorem
            lorem llorem lorenlorem lorem
          </Typography>
          <Box sx={{
            
            borderRadius: "10px",
            overflow: "hidden"
          }}>
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
