import CardWork from "@/components/CardWork";
import { getDataWorks } from "@/services/works/works";
import { Grid } from "@mui/material";
import { orange } from "@mui/material/colors";
import Link from "next/link";


async function ContentWork() {
    const data = await getDataWorks(25)

  return (
    <Grid
      container
      alignItems="stretch"
      spacing={2}
      sx={{
        justifyContent: "center",
      }}
    >
      {
        data.map((item) => (
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
                <CardWork
                  title={item.title}
                  category={item.category}
                  src={item.pictures[0].picture}
                />
              </Link>
            </Grid>
          ))
      }
    </Grid>
  );
}

export default ContentWork;
