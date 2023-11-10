"use client";

import { dateTimeString } from "@/utils/helpers";
import { Delete, ExpandMore, Preview } from "@mui/icons-material";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

function CardAccordionBlog({
  title,
  author,
  description,
  category,
  createdAt,
  slug
}) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Title</Typography>
          <Typography sx={{ color: "text.secondary" }}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{description}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Information
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Detail information work
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={4}>
                  Author
                </Grid>
                <Grid item xs={8} sx={{ color: "text.secondary" }}>
                  {author}
                </Grid>
                <Grid item xs={4}>
                  Category
                </Grid>
                <Grid item xs={8} sx={{ color: "text.secondary" }}>
                  {category}
                </Grid>
                <Grid item xs={4}>
                  Posted Created
                </Grid>
                <Grid item xs={8} sx={{ color: "text.secondary" }}>
                  {dateTimeString(createdAt)}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Action
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Need further action?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container justifyContent="space-evenly">
            <Grid item><Link href={`/blogs/${slug}`}><Button startIcon={<Preview/>}>View</Button></Link></Grid>
            {/* <Grid item><Button startIcon={<Edit/>}>Edit</Button></Grid> */}
            <Grid item><Button startIcon={<Delete/>}>Delete</Button></Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default CardAccordionBlog;
