import { Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
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
                height: "100%", 
              }}
            >
              <Image
                src={src}
                alt={title}
                loading="lazy"
                width={1400}
                height={1400}
                style={{
                  width: "100%",
                  height: "100%", 
                  maxHeight: "100%", 
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
