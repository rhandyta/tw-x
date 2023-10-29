import CardBlog from "@/components/CardBlog";
import CustomBoxBorderedBottom from "@/components/CustomBoxBorderedBottom";
import CustomContainer from "@/components/CustomContainer";
import { blogs } from "@/utils/constant";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page({ params }) {
  const blog = blogs.filter((item) => item.slug == params.slug)[0];
  return (
    <CustomBoxBorderedBottom component="article" sx={{ mx: "auto" }}>
      <CustomBoxBorderedBottom>
        <CustomContainer
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
          }}
        >
          <Box component="header">
            <Typography variant="h2" component="h1">
              {blog.title}
            </Typography>
            <Typography variant="overline" component="h2" color="primary.main">
              {blog.category}
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
                  title={blog.author}
                  className="button-link"
                  rel="author"
                >
                  {blog.author}
                </Link>
              </Typography>
              <Typography
                variant="overline"
                component="time"
                dateTime={blog.created_at}
              >
                {blog.created_at}
              </Typography>
            </Box>
          </Box>
          <Box component="section">
            <Image
              src={blog.src}
              alt={blog.title}
              priority
              style={{ width: "100%", height: "100%" }}
            />
            <Typography
              variant="body1"
              component="p"
              color="secondary"
              sx={{ textAlign: { xs: "justify", md: "left" } }}
            >
              {blog.description}
            </Typography>
          </Box>
        </CustomContainer>
      </CustomBoxBorderedBottom>

      <CustomContainer>
        <Typography variant="h3" component="h2" gutterBottom>
          Related Projects
        </Typography>
        <Grid container spacing={2}>
          {blogs
            .filter((item) => item.slug != blog.slug)
            .splice(0, blogs.length - (blogs.length - 2))
            .map((item) => (
              <Grid item xs={12}
              key={item.title}
              >
                <Link
                  href={`${item.slug}`}
                  title={item.title}
                  className="button-link"
                >
                  <CardBlog
                    title={item.title}
                    category={item.category}
                    src={item.src}
                    created_at={item.created_at}
                  />
                </Link>
              </Grid>
            ))}
        </Grid>
      </CustomContainer>
    </CustomBoxBorderedBottom>
  );
}

export default page;
