import React from "react";
import CustomBoxBorderedBottom from "../components/CustomBoxBorderedBottom";
import { Box, Typography } from "@mui/material";
import CustomContainer from "../components/CustomContainer";
import Image from "next/image";
import { profile } from "@/utils/constant";
import CustomButton from "../components/CustomButton";
import Link from "next/link";
import { grey, orange } from "@mui/material/colors";

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
            textAlign: "justify",
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
          <Image
            src={profile.src}
            placeholder="blur"
            alt="profile rhandy"
            priority
            objectFit="cover"
            style={{
              width: "100%",
              height: "60vh",
              maxWidth: "400px",
              borderRadius: "10px",
              marginBottom: "10px",
            }}
          />
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
          <Link href="/contact" className="button-link">
            <CustomButton>Contact Me</CustomButton>
          </Link>
        </CustomContainer>
      </Box>
    </CustomBoxBorderedBottom>
  );
}

export default page;
