// "use client"
import Loading from "@/app/loading";
import CardWork from "@/components/CardWork";
import { db } from "@/libs/firebase";
import { Grid } from "@mui/material";
import { orange } from "@mui/material/colors";
import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import Link from "next/link";
// import React, { useEffect, useState } from "react";

async function getData() {
    const worksData = [];
    const q = query(collection(db, 'works'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    querySnapshot.forEach((doc) => {
        worksData.push(doc.data());
    });

    if (!worksData) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
     
      return worksData;


}

async function ContentWork() {
    const data = await getData()

  return (
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
      {
        // isLoading ? <Loading/> : (
        //     works.map((item) => (
        //       <Grid
        //         key={item.title}
        //         item
        //         xs={12}
        //         sm={6}
        //         md={4}
        //         sx={{
        //           "&:hover": {
        //             color: orange[400],
        //           },
        //         }}
        //       >
        //         <Link
        //           href={`works/${item.slug}`}
        //           key={item.slug}
        //           className="button-link"
        //         >
        //           <CardWork
        //             title={item.title}
        //             category={item.category}
        //             src={item.pictures[0].picture}
        //           />
        //         </Link>
        //       </Grid>
        //     ))
        // )
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
