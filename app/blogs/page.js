import { Grid, Typography } from "@mui/material";
import { blogs } from "@/utils/constant";
import CustomBoxBorderedBottom from "@/components/CustomBoxBorderedBottom";
import CustomContainer from "@/components/CustomContainer";
import CardBlog from "@/components/CardBlog";
import Link from "next/link";

function page() {
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
      </CustomContainer>
    </CustomBoxBorderedBottom>
  );
}

export default page;
