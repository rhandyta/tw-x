import { Card, CardContent, Typography } from "@mui/material";
import { grey, orange } from "@mui/material/colors";
import Image from "next/image";
import React from "react";

function CardWork({title, category, src}) {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        height: "100%", // Mengatur tinggi Card ke tinggi maksimum
        backgroundImage: "none",
        boxShadow: "none",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          color: orange[400],
        },
      }}
    >
      <Image
        src={src}
        alt={title}
        loading="lazy"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%", // Mengatur tinggi Image ke tinggi maksimum
          maxHeight: "100%", // Optional: Untuk menghindari gambar terlalu besar
        }}
      />
      <CardContent sx={{ padding: "20px 0" }}>
        <Typography
          variant="subtitle2"
          component="h5"
          gutterBottom
          sx={{
            color: grey[600],
          }}
        >
          {category}
        </Typography>
        <Typography variant="h6" component="h6">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardWork;
