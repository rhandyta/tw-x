"use client";
import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { db } from "@/libs/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";
import { dateTimeString } from "@/utils/helpers";

function BoxListGuesBook() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const unsub = onSnapshot(
      query(collection(db, "messages"), orderBy("createdAt", "desc")),
      (snapshot) => {
        let tmpData = [];
        snapshot.forEach((doc) => {
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
    <Grid container>
      {isLoading ? (
        <Loading />
      ) : data.length === 0 ? (
        <Grid item xs={12}>
          <Typography textAlign="center">Tidak ada data.</Typography>
        </Grid>
      ) : (
        data &&
        data.map((doc, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              borderBottom: "1px solid grey",
              padding: "10px 0",
            }}
          >
            <Image
              src={doc.picture}
              alt={doc.name}
              width={50}
              height={50}
              style={{ borderRadius: "50%" }}
              loading="lazy"
            />
            <Stack>
              <Typography variant="subtitle1" component="h6">
                {doc.name}
              </Typography>
          
              <Typography variant="subtitle2" component="p" color="secondary">
                {doc.message}
              </Typography>

              <Typography variant="subtitle2" color="secondary" component="p" sx={{
                fontSize: "0.7rem"
              }}>
                {dateTimeString(doc.createdAt)}
              </Typography>
            </Stack>
          </Grid>
        ))
      )}
    </Grid>
  );
}

export default BoxListGuesBook;
