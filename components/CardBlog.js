import { Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CardBlog({ title, src, category, created_at }) {
  return (
        <Grid container columnSpacing={4}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundImage: "none",
                boxShadow: "none",
                textAlign: "center",
                height: "100%", // Mengatur tinggi Card ke tinggi maksimum
              }}
            >
              <Image
                src={src}
                alt={title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%", // Mengatur tinggi Image ke tinggi maksimum
                  maxHeight: "100%", // Optional: Untuk menghindari gambar terlalu besar
                  objectFit: "cover",
                }}
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <CardContent sx={{ padding: "20px 0" }}>
              <Typography
                variant="subtitle2"
                component="h5"
                color="secondary"
                gutterBottom
              >
                {category}
              </Typography>
              <Typography variant="h6" component="h6">
                {title}
              </Typography>
              <Typography color="secondary" variant="subtitle2" component="p">
                {created_at}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
  );
}

export default CardBlog;
