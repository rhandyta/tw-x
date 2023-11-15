import { Grid, Stack, Typography } from "@mui/material";
import CustomBoxBorderedBottom from "@/components/CustomBoxBorderedBottom";
import CustomContainer from "@/components/CustomContainer";
import Link from "next/link";
import CardWork from "@/components/CardWork";
import { orange } from "@mui/material/colors";
import { getDataWorks } from "@/services/works/works";
import PaginateWork from "@/components/pages/works/PaginateWork";

export async function generateMetadata({params, searchParams}, parent) {
  const {works} = await getDataWorks(1);

  return {
    title: "My Work Portfolio",
    description:
      "Temukan semua ringkasan pengalaman kerja saya sebagai Software Engineer di beberapa perusahaan.",
    keywords: ["Pengalaman Kerja", "Portfolio", "Rhandyta", "Briantama", "Portfolio", "Software Engineer", "Personal Website Portfolio"],
    category: "resume, portfolio",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_HOST}/works`,
    },
  
    other: {
      "page-topic": "Ringkasan pengalaman kerja di beberapa perusahaan",
      "revisit-after": "3 days",
      expires: "never",
    },
  
    openGraph: {
      title: "My Work Portfolio",
      url: `${process.env.NEXT_PUBLIC_HOST}/works`,
      siteName: "Portfolio Rhandyta Briantama",
      description: "Temukan semua ringkasan pengalaman kerja saya sebagai Software Engineer di beberapa perusahaan.",
      images: works[0].pictures.map((item, index) => {
        if(index > 1) return;
        return {
          url: item.picture,
          width: index > 0 ? 1800 : 800,
          height: index > 0 ? 1600 : 600,
          alt: index === 0 ? null : item.title
        }
      }),
      locale: "id_ID",
      type: "website",
      authors: ['Rhandyta Briantama', 'Rhandyta', "Rhandy", "Briantama"],
    },
  }
}

async function page({ searchParams }) {
  const { page, ql, qr } = searchParams;
  const {works, total_data} = await getDataWorks(25, qr, ql);
  let maxPages = Math.round(total_data / 25);
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
          <PaginateWork page={page} lastVisible={last} firstVisible={first} maxPages={maxPages}/>
        </Stack>
      </CustomContainer>
    </CustomBoxBorderedBottom>
  );
}

export default page;
