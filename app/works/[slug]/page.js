import CustomBoxBorderedBottom from "@/components/CustomBoxBorderedBottom";
import CustomContainer from "@/components/CustomContainer";
import { Box, Grid, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import React from "react";
import BoxImage from "@/components/pages/works/BoxImage";
import CardWork from "@/components/CardWork";
import Link from "next/link";
import ButtonBack from "@/components/ButtonBack";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "@/libs/firebase";
import { dateTimeString } from "@/utils/helpers";

async function getData(slug) {
  const mainWork = [];
  const relateWorks = [];
  const q = query(collection(db, 'works'), where('slug', '==', slug), limit(1));
  const docSnap = await getDocs(q);
  docSnap.forEach((doc) => {
    mainWork.push(doc.data())
  })
  const work = mainWork[0] || null;

  if(mainWork) {
    const relateQ = query(collection(db, 'works'), where('category', '==', work.category), limit(6));
    const docSnapRelate = await getDocs(relateQ);
    docSnapRelate.forEach(doc => {
      relateWorks.push(doc.data());
    })
    return {work, relateWorks}
  }

  return null;
}

async function Page({ params }) {
  const {work, relateWorks} = await getData(params.slug);
  return (
    <CustomBoxBorderedBottom>
      <CustomBoxBorderedBottom>
        <ButtonBack />
        <CustomContainer>
          <Typography component="h1" variant="h2">
            {work.title}
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography
              variant="overline"
              component="address"
              sx={{ fontStyle: "normal" }}
              gutterBottom
            >
              Author:{" "}
              <Link
                href="/about"
                title={work.author}
                className="button-link"
                rel="author"
              >
                {work.author}
              </Link>
            </Typography>
            <Typography
              variant="overline"
              component="time"
              dateTime={dateTimeString(work.createdAt)}
            >
              {dateTimeString(work.createdAt)}
            </Typography>
          </Box>
          <Grid container columnSpacing={5} rowSpacing={2}>
            <Grid item xs={12} sm={7} lg={9} order={{ xs: 3, sm: 2, md: 1 }}>
              <Typography
                component="p"
                variant="body1"
                color="secondary"
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
            <Grid item xs={12} sm={6} lg={5} height={300} order={{ xs: 2, sm: 3, md: 3 }}>
              <BoxImage
                title={work.pictures[0].title}
                picture={work.pictures[0].picture}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={7} height={300} order={{ xs: 4, sm: 4, md: 4 }}>
              <BoxImage
                title={work.pictures[1].title}
                picture={work.pictures[1].picture}
              />
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

                <Typography variant="h5" component="h4">
                  Project
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Typography variant="h6" component="h5" gutterBottom>
                Challenge
              </Typography>
              <Typography
                component="p"
                variant="body1"
                color="secondary"
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
                {work.projects[0].description}
              </Typography>
              <Typography variant="h6" component="h5" gutterBottom>
                OutCome
              </Typography>
              <Typography
                component="p"
                variant="body1"
                color="secondary"
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
                {work.projects[1].description}
              </Typography>
            </Grid>
          </Grid>
          <Grid container mt={2} columnSpacing={5} rowSpacing={2}>
            <Grid item xs={12} sm={6} md={7} height={300}>
              <BoxImage
                title={work.pictures[2].title}
                picture={work.pictures[2].picture}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={5} height={300}>
              <BoxImage
                title={work.pictures[3].title}
                picture={work.pictures[3].picture}
              />
            </Grid>
            <Grid item xs={12} height={300}>
              <BoxImage
                title={work.pictures[3].title}
                picture={work.pictures[4].picture}
              />
            </Grid>
          </Grid>
        </CustomContainer>
      </CustomBoxBorderedBottom>
      <CustomContainer>
        <Typography variant="h3" component="h2" gutterBottom>
          Related Projects
        </Typography>
        <Grid container spacing={2}>
          {relateWorks
            .filter((item) => item.slug != work.slug)
            .map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.slug}>
                <Link
                  href={`/works/${item.slug}`}
                  key={work.slug}
                  className="button-link"
                  title={item.title}
                >
                  <CardWork
                    title={item.title}
                    category={item.category}
                    src={item.pictures[0].picture}
                  />
                </Link>
              </Grid>
            ))}
        </Grid>
      </CustomContainer>
    </CustomBoxBorderedBottom>
  );
}

export default Page;
