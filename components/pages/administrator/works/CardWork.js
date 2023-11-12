"use client";
import { db } from "@/libs/firebase";
import { Box, Grid } from "@mui/material";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Swipeable from "../Swipeable";
import CardAccordionWork from "./CardAccordionWork";
import Loading from "@/app/loading";

function CardWork() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const unsub = onSnapshot(
      query(collection(db, "works"), orderBy("createdAt", "desc"), limit(9)),
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
                <Swipeable pictures={item.pictures} />
                <Box>
                  <CardAccordionWork
                    title={item.title}
                    author={item.author}
                    description={item.description}
                    category={item.category}
                    position={item.position}
                    timeline={item.timeline}
                    projects={item.projects}
                    slug={item.slug}
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

export default CardWork;
