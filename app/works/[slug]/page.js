import CustomBoxBorderedBottom from "@/components/CustomBoxBorderedBottom";
import CustomContainer from "@/components/CustomContainer";
import { projects } from "@/utils/constant";
import { Box, Grid, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import React from "react";
import BoxImage from "@/components/pages/works/BoxImage";

function page({ params }) {
  const work = projects.filter((item) => item.slug === params.slug)[0];
  return (
    <CustomBoxBorderedBottom>
      <CustomContainer>
        <Typography component="h1" variant="h4" gutterBottom>
          {work.title}
        </Typography>
        <Typography component="time" variant="caption" gutterBottom>
          {work.createdAt}
        </Typography>
        <Typography component="p" variant="caption" gutterBottom>
          Author: {work.author}
        </Typography>
        <Grid container columnSpacing={5} rowSpacing={2}>
          <Grid item xs={12} sm={7} lg={9} order={{ xs: 3, sm: 2, md: 1 }}>
            <Typography
              component="p"
              variant="body1"
              sx={{
                textIndent: {
                  xs: "2rem",
                  sm: "0",
                  md: "2rem",
                },
                textAlign: {
                  xs: "justify",
                  sm: "left",
                },
              }}
              gutterBottom
            >
              {work.description}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} lg={3} order={{ xs: 1, sm: 1, md: 2 }}>
            <Grid
              container
              sx={{
                display: "flex",
                columnGap: { xs: 2, sm: 0 },
                flexDirection: { xs: "row", sm: "column" },
              }}
            >
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  flexWrap: "nowrap",
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexWrap="nowrap"
                  gap={1}
                >
                  <CircleIcon sx={{ width: "14px", height: "auto" }} />

                  <Typography variant="overline" component="h2">
                    Category: {work.category}
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  flexWrap: "nowrap",
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexWrap="nowrap"
                  gap={1}
                >
                  <CircleIcon sx={{ width: "14px", height: "auto" }} />

                  <Typography variant="overline" component="p">
                    Timeline: {work.timeline}
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  flexWrap: "nowrap",
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexWrap="nowrap"
                  gap={1}
                >
                  <CircleIcon sx={{ width: "14px", height: "auto" }} />

                  <Typography variant="overline" component="h3">
                    Position: {work.position}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} lg={5} order={{ xs: 2, sm: 3, md: 3 }}>
            <BoxImage title={work.pictures[0].title} picture={work.pictures[0].picture}/>
          </Grid>
          <Grid item xs={12} sm={6} lg={7} order={{ xs: 4, sm: 4, md: 4 }}>
          <BoxImage title={work.pictures[1].title} picture={work.pictures[1].picture}/>
          </Grid>
        </Grid>
        <Grid container mt={2} rowSpacing={2}>
          <Grid item xs={12} sm={5}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="start"
              flexWrap="nowrap"
              gap={1}
            >
              <CircleIcon sx={{ width: "14px", height: "auto" }} />

              <Typography variant="h4" component="h4">
                Project
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Typography variant="h5" component="h5" gutterBottom>
              Challenge
            </Typography>
            <Typography
              component="p"
              variant="body1"
              sx={{
                textIndent: {
                  xs: "2rem",
                  sm: "0",
                  md: "2rem",
                },
                textAlign: {
                  xs: "justify",
                  sm: "left",
                },
              }}
              gutterBottom
            >
              {work.project[0].description}
            </Typography>
            <Typography variant="h5" component="h5" gutterBottom>
              OutCome
            </Typography>
            <Typography
              component="p"
              variant="body1"
              sx={{
                textIndent: {
                  xs: "2rem",
                  sm: "0",
                  md: "2rem",
                },
                textAlign: {
                  xs: "justify",
                  sm: "left",
                },
              }}
              gutterBottom
            >
              {work.project[0].description}
            </Typography>
          </Grid>
        </Grid>
        <Grid container mt={2} columnSpacing={5} rowSpacing={2}>
          <Grid item xs={12} sm={6} md={7}>
          <BoxImage title={work.pictures[2].title} picture={work.pictures[2].picture}/>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
          <BoxImage title={work.pictures[3].title} picture={work.pictures[3].picture}/>
          </Grid>
          <Grid item>
          <BoxImage title={work.pictures[3].title} picture={work.pictures[4].picture}/>
          </Grid>
        </Grid>
      </CustomContainer>
    </CustomBoxBorderedBottom>
  );
}

export default page;
