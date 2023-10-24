"use client";
import { Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import CustomBoxBorderedBottom from "../../CustomBoxBorderedBottom";
import CustomContainer from "../../CustomContainer";
import { softSkills } from "@/utils/constant";

const ButtonCarousel = ({ buttons }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const maxPosition = buttons.length - 1;

  const scrollRight = () => {
    if (scrollPosition < maxPosition) {
      setScrollPosition(scrollPosition + 1);
    } else {
      setScrollPosition(0); 
    }
  };

  const scrollLeft = () => {
    if (scrollPosition > 0) {
      setScrollPosition(scrollPosition - 1);
    } else {
      setScrollPosition(maxPosition); 
    }
  };

  useEffect(() => {
    const interval = setInterval(scrollRight, 1150);

    return () => {
      clearInterval(interval);
    };
  }, [scrollPosition]);

  return (
    <CustomBoxBorderedBottom sx={{ overflow: "hidden" }}>
      <CustomContainer maxWidth="md">
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
                transform: `translateX(-${scrollPosition * 220}px)`,
                transition: "transform 0.5s",
              }}
            >
              {buttons.map((item, index) => (
                <Button
                  key={index}
                  variant="text"
                  disabled
                  startIcon={<item.icon />}
                  sx={{width: "240px"}}
                >
                  {item.name}
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
  const buttons = softSkills;

  return (
            <ButtonCarousel buttons={buttons} />
  );
}

export default CarouselButton;
