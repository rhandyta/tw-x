import { Box, Card, CardContent, Typography } from "@mui/material";
import { grey, orange } from "@mui/material/colors";
import Image from "next/image";
import React from "react";

function CardWork({title, category, src}) {
  return (
    <Card
      sx={{
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
      <Box sx={{
        width:"100%",
        height:"200px"
      }}>
      <Image
        src={src}
        alt={title}
        width={400}
        height={400}
        priority
        style={{
          objectFit: "cover",
          width: '100%',
          height: "200px"
        }}
        />
        </Box>
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
