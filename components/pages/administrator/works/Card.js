"use client";
import { db } from "@/libs/firebase";
import { Box, Grid } from "@mui/material";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Swipeable from "./Swipeable";
import CardAccordion from "./CardAccordion";
import Loading from "@/app/loading";

function Card() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const unsub = onSnapshot(
      query(collection(db, "works"), orderBy("createdAt", "desc")),
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
      <Grid container>
        {isLoading ? (
          <Loading />
        ) : (
          data.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.title}>
              <Box>
                <Swipeable title={item.title} pictures={item.pictures} />
                <Box>
                  <CardAccordion />
                </Box>
              </Box>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}

export default Card;
