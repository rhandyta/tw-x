"use client";
import { useMemo, useState } from "react";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import {
  Box,
  Button,
  MobileStepper,
  Paper,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Image from "next/image";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


function Swipeable({title, pictures}) {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const maxSteps = pictures.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const mobileStepper = useMemo(() => (
    <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
  ), [activeStep, maxSteps, theme.direction])


  return (
    <>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {pictures.map((step, index) => (
          <div key={step.title}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
              sx={{
                height: 255,
                display: 'block',
                maxWidth: 400,
                overflow: 'hidden',
                width: '100%',
              }}
              >
              <Image 
                src={step.picture}
                alt={step.title}
                loading="lazy"
                width={800}
                height={800}
                style={{
                  width: "100%",
                  height: "100%", // Mengatur tinggi Image ke tinggi maksimum
                  maxHeight: "100%", // Optional: Untuk menghindari gambar terlalu besar
                  objectFit: "cover"
                }}
                />
                </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {mobileStepper}
    </>
  );
}

export default Swipeable;
