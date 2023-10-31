"use client";
import { db } from "@/libs/firebase";
import { Box } from "@mui/material";
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

  console.log(data);
  return (
    <>
      <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
        {isLoading ? (
          <Loading />
        ) : (
          data.map((item) => (
          <Box key={item.title}>
            <Swipeable title={item.title} pictures={item.pictures} />
            <Box>
              <CardAccordion />
            </Box>
          </Box>
          ))
        )}
      </Box>
    </>
  );
}

export default Card;
