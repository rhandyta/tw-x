import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

function BoxImage({title, picture}) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <Image
        src={picture}
        loading="lazy"
        alt={title}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  );
}

export default BoxImage;