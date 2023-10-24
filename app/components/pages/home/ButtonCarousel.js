"use client";
import { Box, Button, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import React, { useState, useEffect } from "react";
import CustomBoxBorderedBottom from "../../CustomBoxBorderedBottom";
import CustomContainer from "../../CustomContainer";

const ButtonCarousel = ({ buttons }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const maxPosition = buttons.length - 1;

  const scrollRight = () => {
    if (scrollPosition < maxPosition) {
      setScrollPosition(scrollPosition + 1);
    } else {
      setScrollPosition(0); // Kembali ke slide pertama jika sudah di slide terakhir
    }
  };

  const scrollLeft = () => {
    if (scrollPosition > 0) {
      setScrollPosition(scrollPosition - 1);
    } else {
      setScrollPosition(maxPosition); // Kembali ke slide terakhir jika sudah di slide pertama
    }
  };

  useEffect(() => {
    // Contoh penggunaan interval untuk mengatur otomatis berganti slide
    const interval = setInterval(scrollRight, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [scrollPosition]);

  return (
    <CustomBoxBorderedBottom sx={{ overflow: "hidden" }}>
      <CustomContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ position: "relative", height: "31px"}}>
            <Box
              sx={{
                position: "absolute",
                zIndex: 10,
                top: "-15%",
                display: "flex",
                flexDirection: "row",
                transform: `translateX(-${scrollPosition * 50}px)`,
                transition: "transform 0.5s",
              }}
            >
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant="text"
                  disabled
                  startIcon={<LanguageIcon />}
                  sx={{width: "150px"}}
                >
                  {button}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
      </CustomContainer>
    </CustomBoxBorderedBottom>
  );
};

function CarouselButton() {
  const buttons = ["Button 1", "Button 2", "Button 3", "Button 4", "Button 5", "Button 5", "Button 5", "Button 5", "Button 5", "Button 5", "Button 5", "Button 5", "Button 5", "Button 5", "Button 5", "Button 5", "Button 5", "Button 5", "Button 5", "Button 5"];

  return (
      <ButtonCarousel buttons={buttons} />
  );
}

export default CarouselButton;
