import { profile } from "@/utils/constant";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import ButtonOpenWork from "./components/pages/home/ButtonOpenWork";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CustomButtonIcon from "./components/pages/home/CustomButtonIcon";
import Link from "next/link";
import CustomBoxBorderedBottom from "./components/CustomBoxBorderedBottom";
import CustomContainer from "./components/CustomContainer";
import CarouselButton from "./components/pages/home/ButtonCarousel";
import React from "react";

export default function Home() {
  return (
    <>
      <CustomBoxBorderedBottom>
        <Grid container spacing={2}>
          <Grid item xs={12} sm>
            <Box
              sx={{
                width: {
                  xs: "40vh",
                  sm: "150px",
                },
                mx: {
                  xs: "auto",
                  sm: 0,
                },
                borderRadius: "5px",
                overflow: "hidden",
              }}
            >
              <Image
                src={profile.src}
                alt={profile.name}
                priority
                objectFit="cover"
                placeholder="blur"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm="auto" sx={{ textAlign: "center" }}>
            <ButtonOpenWork />
          </Grid>
        </Grid>

        <CustomContainer maxWidth="md">
          <Typography variant="h4" component="h1" gutterBottom>
            Hi, Welcome to TW-X I&#39;m Rhandyta Briantama - I&#39;m Software
            Engineer
          </Typography>
          <Typography variant="subtitle2" textAlign="justify" color="secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>

          <Box
            sx={{
              mt: 4,
              display: "flex",
              gap: "0.5rem",
            }}
          >
            <Link href="https://www.rhandyta.my.id">
              <CustomButtonIcon color="secondary" aria-label="add an alarm">
                <LanguageIcon />
              </CustomButtonIcon>
            </Link>
            <Link href="https://www.rhandyta.my.id">
              <CustomButtonIcon color="secondary" aria-label="add an alarm">
                <LinkedInIcon />
              </CustomButtonIcon>
            </Link>
            <Link href="https://www.rhandyta.my.id">
              <CustomButtonIcon color="secondary" aria-label="add an alarm">
                <GitHubIcon />
              </CustomButtonIcon>
            </Link>
          </Box>
        </CustomContainer>
      </CustomBoxBorderedBottom>

      <CarouselButton sx={{ width: "100px" }} />

      <CustomBoxBorderedBottom my={4}>
        <Typography variant="h5" component="h3">Features Work</Typography>
        <CustomContainer>
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: {
                xs: "center",
                md: "space-between",
              },
            }}
          >
            <Grid item>
              <Card
                sx={{
                  maxWidth: {
                    xs: "100%",
                    sm: 250,
                  },
                  backgroundImage: "none",
                  boxShadow: "none",
                  textAlign: "center",
                }}
              >
                <Image
                  src={profile.src}
                  alt="Paella dish"
                  objectFit="cover"
                  loading="lazy"
                  style={{
                    width: "85%",
                    height: "auto",
                  }}
                />
                <CardContent sx={{ padding: "20px 0" }}>
                  <Typography
                    variant="subtitle2"
                    component="h5"
                    color="secondary"
                    gutterBottom
                  >
                    This impressive
                  </Typography>
                  <Typography variant="h6" component="h6">
                    This impressiveThis impressiv
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card
                sx={{
                  maxWidth: {
                    xs: "100%",
                    sm: 250,
                  },
                  backgroundImage: "none",
                  boxShadow: "none",
                  textAlign: "center",
                }}
              >
                <Image
                  src={profile.src}
                  alt="Paella dish"
                  objectFit="cover"
                  loading="lazy"
                  style={{
                    width: "85%",
                    height: "auto",
                  }}
                />
                <CardContent sx={{ padding: "20px 0" }}>
                  <Typography
                    variant="subtitle2"
                    component="h5"
                    color="secondary"
                    gutterBottom
                  >
                    This impressive
                  </Typography>
                  <Typography variant="h6" component="h6">
                    This impressiveThis impressiv
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card
                sx={{
                  maxWidth: {
                    xs: "100%",
                    sm: 250,
                  },
                  backgroundImage: "none",
                  boxShadow: "none",
                  textAlign: "center",
                }}
              >
                <Image
                  src={profile.src}
                  alt="Paella dish"
                  objectFit="cover"
                  loading="lazy"
                  style={{
                    width: "85%",
                    height: "auto",
                  }}
                />
                <CardContent sx={{ padding: "20px 0" }}>
                  <Typography
                    variant="subtitle2"
                    component="h5"
                    color="secondary"
                    gutterBottom
                  >
                    This impressive
                  </Typography>
                  <Typography variant="h6" component="h6">
                    This impressiveThis impressiv
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card
                sx={{
                  maxWidth: {
                    xs: "100%",
                    sm: 250,
                  },
                  backgroundImage: "none",
                  boxShadow: "none",
                  textAlign: "center",
                }}
              >
                <Image
                  src={profile.src}
                  alt="Paella dish"
                  objectFit="cover"
                  loading="lazy"
                  style={{
                    width: "85%",
                    height: "auto",
                  }}
                />
                <CardContent sx={{ padding: "20px 0" }}>
                  <Typography
                    variant="subtitle2"
                    component="h5"
                    color="secondary"
                    gutterBottom
                  >
                    This impressive
                  </Typography>
                  <Typography variant="h6" component="h6">
                    This impressiveThis impressiv
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CustomContainer>
      </CustomBoxBorderedBottom>
    </>
  );
}
