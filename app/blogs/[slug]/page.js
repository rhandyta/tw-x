import ButtonBack from "@/components/ButtonBack";
import CardBlog from "@/components/CardBlog";
import CustomBoxBorderedBottom from "@/components/CustomBoxBorderedBottom";
import CustomContainer from "@/components/CustomContainer";
import { getDataBlog } from "@/services/blogs/blogs";
import { dateTimeFormat, dateTimeString } from "@/utils/helpers";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function generateMetadata({params, searchParams}, parent) {
  const {blog} = await getDataBlog(params.slug);
  return {
    title: `${blog.title}`,
    description:
      `${blog.description}`,
    keywords: ["Pengalaman Kerja", "Portfolio", "Rhandyta", "Briantama", "Portfolio", "Software Engineer", "Personal Website Portfolio"],
    category: "resume, portfolio",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_HOST}/blogs/${blog.slug}`,
    },
  
    other: {
      url: `${process.env.NEXT_PUBLIC_HOST}/blogs/${blog.slug}`,
      publisher: "Rhandyta Briantama",
      "published_time": dateTimeString(blog.createdAt),
      "modified_time": dateTimeString(blog.createdAt),
      "page-topic": "Ringkasan pengalaman kerja di beberapa perusahaan",
      "revisit-after": "7 days",
      expires: "never",
      type: "article"
    },
  
    openGraph: {
      title: `${blog.title}`,
      url: `${process.env.NEXT_PUBLIC_HOST}/blogs/${blog.slug}`,
      siteName: "Portfolio Rhandyta Briantama",
      description: `${blog.description}`,
      images: [
        {
          url: blog.src,
          width: 800,
          height: 600,
        },
        {
          url: blog.src,
          width: 1800,
          height: 1600,
          alt: blog.title,
        },
      ],
      locale: "id_ID",
      type: "article",
      category: `${blog.category}`,
      publishedTime: dateTimeString(blog.createdAt),
      modifiedTime: dateTimeString(blog.udpatedAt),
      publisher: "Rhandyta Briantama",
      authors: ['Rhandyta Briantama', 'Rhandyta', "Rhandy", "Briantama"],
    },
  }
}

async function page({ params }) {
  const { blog, relateBlogs } = await getDataBlog(params.slug);
  return (
    <CustomBoxBorderedBottom component="article" sx={{ mx: "auto" }}>
      <CustomBoxBorderedBottom>
      <ButtonBack />
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
            <Box sx={{ display: "flex", flexDirection: {
              xs: "column",
              sm: "row"
            }, gap: {
              xs: 0,
              sm: 1
            } }}>
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
              dateTime={dateTimeFormat(blog.createdAt)}
            >
              {dateTimeString(blog.createdAt)}
            </Typography>
            </Box>
          </Box>
          <Box component="section">
            <Image
              src={blog.src}
              alt={blog.title}
              priority
              width={1400}
              height={400}
              style={{ width: "100%" }}
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
          {relateBlogs.map((item) => (
            <Grid item xs={12} key={item.title}>
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
