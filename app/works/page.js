import { Grid, Typography } from "@mui/material";
import CustomBoxBorderedBottom from "../components/CustomBoxBorderedBottom";
import CustomContainer from "../components/CustomContainer";
import { projects } from "@/utils/constant";
import Link from "next/link";
import { orange } from "@mui/material/colors";
import CardWork from "../components/CardWork";
function page() {
  return (
    <CustomBoxBorderedBottom>
      <Typography variant="h3" component="h2">
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
                href={`works/${item.title}`}
                key={item.title}
                style={{
                  textDecoration: "none",
                }}
              >
                <CardWork title={item.title} category={item.category} src={item.src} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </CustomContainer>
    </CustomBoxBorderedBottom>
  );
}

export default page;
