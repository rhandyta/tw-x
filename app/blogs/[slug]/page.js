import CustomBoxBorderedBottom from "@/components/CustomBoxBorderedBottom";
import CustomContainer from "@/components/CustomContainer";
import { blogs } from "@/utils/constant";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

function page({ params }) {
  const blog = blogs.filter((item) => item.slug == params.slug)[0];
  return (
    <CustomBoxBorderedBottom component="article" sx={{ mx: "auto" }}>
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
            <Typography variant="overline" component="h2" color="primary.main">
              {blog.category}
            </Typography>
          </Typography>
          <Box sx={{display: "flex", gap: 1}}>
            <Typography variant="overline" component="address">
              Author:{" "}
              <Link
                href="/"
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
          sadasdas
        </Box>
      </CustomContainer>
    </CustomBoxBorderedBottom>
  );
}

export default page;
