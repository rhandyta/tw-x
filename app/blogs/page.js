import { Grid, Stack, Typography } from "@mui/material";
import CustomBoxBorderedBottom from "@/components/CustomBoxBorderedBottom";
import CustomContainer from "@/components/CustomContainer";
import CardBlog from "@/components/CardBlog";
import Link from "next/link";
import { getDataBlogs } from "@/services/blogs/blogs";
import PaginateBlog from "@/components/pages/blogs/PaginateBlog";

async function page({ searchParams }) {
  const { page, ql, qr } = searchParams;
  const {blogs, total_data} = await getDataBlogs(25, qr, ql);
  let maxPages = Math.round(total_data / 25);
  let first, last;
  if(blogs) {
    first = btoa(JSON.stringify(blogs[0]?.slug));
    last = btoa(JSON.stringify(blogs.slice(-1)[0]?.slug));
  }

  return (
    <CustomBoxBorderedBottom>
      <Typography variant="h2" component="h1">
        Blog
      </Typography>
      <CustomContainer>
        <Grid container mb={4} spacing={4}>
          {blogs.map((item) => (
            <Grid item xs={12} key={item.title}>
              <Link
                href={`blogs/${item.slug}`}
                title={item.title}
                className="button-link"
              >
                <CardBlog
                  key={item.slug}
                  src={item.src}
                  title={item.title}
                  category={item.category}
                  created_at={item.created_at}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
        <Stack
          mt={2}
          flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
        <PaginateBlog page={page} lastVisible={last} firstVisible={first} maxPages={maxPages}/>
        </Stack>
      </CustomContainer>
    </CustomBoxBorderedBottom>
  );
}

export default page;
