import { Grid, Typography } from "@mui/material";
import CardBlog from "../components/CardBlog";
import CustomBoxBorderedBottom from "../components/CustomBoxBorderedBottom";
import CustomContainer from "../components/CustomContainer";
import { blogs } from "@/utils/constant";

function page() {
  return (
    <CustomBoxBorderedBottom>
      <Typography variant="h3" component="h2">
        Blog
      </Typography>
      <CustomContainer>
      <Grid container mb={4} spacing={4}>
            {blogs.map((item) => (
              <CardBlog key={item.title} src={item.src} title={item.title} category={item.category} created_at={item.created_at}/>
            ))}
          </Grid>
      </CustomContainer>
    </CustomBoxBorderedBottom>
  );
}

export default page;