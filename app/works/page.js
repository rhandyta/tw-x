import { Grid, Typography } from "@mui/material";
import { projects } from "@/utils/constant";
import Link from "next/link";
import { orange } from "@mui/material/colors";
import CustomBoxBorderedBottom from "@/components/CustomBoxBorderedBottom";
import CustomContainer from "@/components/CustomContainer";
import CardWork from "@/components/CardWork";
function page() {
  return (
    <CustomBoxBorderedBottom>
      <Typography variant="h2" component="h1">
        Work
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
            <Grid
              key={item.title}
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                "&:hover": {
                  color: orange[400],
                },
              }}
            >
              <Link
                href={`works/${item.slug}`}
                key={item.slug}
                className="button-link"
              >
                <CardWork title={item.title} category={item.category} src={item.pictures[0].picture} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </CustomContainer>
    </CustomBoxBorderedBottom>
  );
}

export default page;
