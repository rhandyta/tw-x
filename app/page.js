import {
  blogs,
  linkExternal,
  profile,
  projects,
  skills,
} from "@/utils/constant";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ButtonOpenWork from "./components/pages/home/ButtonOpenWork";
import CustomButtonIcon from "./components/pages/home/CustomButtonIcon";
import Link from "next/link";
import CustomBoxBorderedBottom from "./components/CustomBoxBorderedBottom";
import CustomContainer from "./components/CustomContainer";
import CarouselButton from "./components/pages/home/ButtonCarousel";
import React from "react";
import { grey, orange } from "@mui/material/colors";
import CustomButton from "./components/CustomButton";

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
            {linkExternal.map((item) => (
              <Link href={item.link} key={item.name}>
                <CustomButtonIcon color="secondary" aria-label={item.name}>
                  <item.icon />
                </CustomButtonIcon>
              </Link>
            ))}
          </Box>
        </CustomContainer>
      </CustomBoxBorderedBottom>

      <CarouselButton sx={{ width: "100px" }} />

      <CustomBoxBorderedBottom my={4}>
        <Typography variant="h4" component="h3">
          Features Work
        </Typography>
        <CustomContainer>
          <Grid
            container
            alignItems="stretch"
            spacing={2}
            sx={{
              justifyContent: {
                xs: "center",
                md: "space-between",
              },
            }}
          >
            {projects.map((item) => (
              <Grid item key={item.title}>
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
                    src={item.src}
                    alt={item.title}
                    objectFit="cover"
                    loading="lazy"
                    style={{
                      width: "100%",
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
                      {item.category}
                    </Typography>
                    <Typography variant="h6" component="h6">
                      {item.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Link href="work" style={{ textDecoration: "none" }}>
            <CustomButton text="view all work" />
          </Link>
        </CustomContainer>
      </CustomBoxBorderedBottom>

      <CustomBoxBorderedBottom my={4}>
        <Typography variant="h4" component="h3">
          Blog
        </Typography>
        <CustomContainer>
          <Grid container mb={4} spacing={4}>
            {blogs.map((item) => (
              <Grid item xs={12} key={item.title}>
                <Grid container columnSpacing={4}>
                  <Grid item xs={12} md={4}>
                    <Card
                      sx={{
                        backgroundImage: "none",
                        boxShadow: "none",
                        textAlign: "center",
                      }}
                    >
                      <Image
                        src={item.src}
                        alt={item.title}
                        objectFit="cover"
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={8}>
                    <CardContent sx={{ padding: "20px 0" }}>
                      <Typography
                        variant="subtitle2"
                        component="h5"
                        color="secondary"
                        gutterBottom
                      >
                        {item.category}
                      </Typography>
                      <Typography variant="h6" component="h6">
                        {item.title}
                      </Typography>
                      <Typography
                        color="secondary"
                        variant="subtitle2"
                        component="p"
                      >
                        {item.created_at}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Link href="blog" style={{ textDecoration: "none" }}>
            <CustomButton text="view all posts" />
          </Link>
        </CustomContainer>
      </CustomBoxBorderedBottom>

      <CustomBoxBorderedBottom>
        <Typography variant="h4" component="h3">
          Tech Stack
        </Typography>
        <CustomContainer>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {skills.map((item) => (
              <Grid
                key={item.title}
                item
                xs={12}
                sm={6}
                md={3}
                sx={{
                  padding: "5px",
                  "&:hover": {
                    cursor: "pointer",
                    color: `${orange[200]}`,
                  },
                }}
              >
                <Box
                  borderRadius={2}
                  sx={{
                    border: `1px solid ${grey[600]}`,
                    "&:hover": {
                      border: `1px solid ${orange[200]}`,
                    },
                  }}
                >
                  <Grid container>
                    <Grid item xs={3} md={4}>
                      <Stack
                        padding={1}
                        flex
                        justifyContent="center"
                        alignItems="center"
                        width="100%"
                        height="100%"
                      >
                        <Image
                          src={item.icon}
                          style={{
                            width: "50%",
                            height: "auto",
                          }}
                          loading="lazy"
                          objectFit="cover"
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={9} md={8}>
                      <Grid container>
                        <Grid item xs={12}>
                          <Typography variant="h6" component="h4">
                            {item.title}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sx={{
                            color: "secondary.main",
                          }}
                        >
                          <Typography variant="subtitle2" component="h5">
                            {item.description}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CustomContainer>
      </CustomBoxBorderedBottom>
    </>
  );
}
