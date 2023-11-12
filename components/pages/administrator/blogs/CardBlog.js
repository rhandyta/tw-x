"use client";
import { db } from "@/libs/firebase";
import { Box, Grid } from "@mui/material";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Swipeable from "../Swipeable";
import CardAccordion from "./CardAccordionBlog";
import Loading from "@/app/loading";

function CardBlog() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const unsub = onSnapshot(
      query(collection(db, "blogs"), orderBy("createdAt", "desc"), limit(9)),
      (snapShot) => {
        let tmpData = [];
        snapShot.forEach((doc) => {
          tmpData.push(doc.data());
        });
        setData(tmpData);
        setIsLoading(false);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  return (
    <>
      <Grid container sx={{marginTop: 2}} spacing={2}>
        {isLoading ? (
          <Loading />
        ) : (
          data.map((item) => (
            <Grid item xs={12} sm={6} lg={4} key={item.title}>
              <Box>
                <Swipeable pictures={[{picture: item.src, title: item.title}]} />
                <Box>
                  <CardAccordion
                    title={item.title}
                    category={item.category}
                    author={item.author}
                    description={item.description}
                    slug={item.slug}
                    createdAt={item.createdAt}
                  />
                </Box>
              </Box>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}

export default CardBlog;
