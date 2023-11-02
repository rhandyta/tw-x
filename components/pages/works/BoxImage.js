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
        width={1400}
        height={1400}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "cover"
        }}
      />
    </Box>
  );
}

export default BoxImage;
