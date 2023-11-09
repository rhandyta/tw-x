import { Grid, Stack, Typography } from "@mui/material";
import CustomBoxBorderedBottom from "@/components/CustomBoxBorderedBottom";
import CustomContainer from "@/components/CustomContainer";
import Link from "next/link";
import CardWork from "@/components/CardWork";
import { orange } from "@mui/material/colors";
import { getDataWorks } from "@/services/works/works";
import Paginate from "@/components/pages/works/Paginate";

async function Page({ searchParams }) {
  const { page, ql, qr } = searchParams;
  const {works, total_data} = await getDataWorks(3, qr, ql);
  let maxPages = Math.round(total_data / 3);
  let first, last;
  if(works) {
    first = btoa(JSON.stringify(works[0]?.slug));
    last = btoa(JSON.stringify(works.slice(-1)[0]?.slug));
  }

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
            justifyContent: "center",
          }}
        >
          {works.map((item) => (
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
          ))}
        </Grid>
        <Stack
          mt={2}
          flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Paginate page={page} lastVisible={last} firstVisible={first} maxPages={maxPages}/>
        </Stack>
      </CustomContainer>
    </CustomBoxBorderedBottom>
  );
}

export default Page;
