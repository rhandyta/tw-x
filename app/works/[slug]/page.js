import CustomBoxBorderedBottom from '@/components/CustomBoxBorderedBottom'
import CustomContainer from '@/components/CustomContainer'
import { projects } from '@/utils/constant'
import { Box, Grid, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';
import React from 'react'
import Image from 'next/image';

function page({params}) {
  const work = projects.filter((item) => item.slug === params.slug)[0]
  return (
    <CustomBoxBorderedBottom>
      <CustomContainer>
        <Typography component="h1" variant="h4">{work.title}</Typography>
        <Typography component="time" variant="caption">{work.createdAt}</Typography>
        <Typography component="p" variant="caption" gutterBottom>Author: {work.author}</Typography>
        <Grid container columnSpacing={5} rowSpacing={1}>
          <Grid item xs={12} sm={7} lg={9} order={{xs: 3, sm: 2, md: 1}}>
              <Typography component="p" variant="body1" sx={{textIndent: {
                xs: "2rem",
                sm: "0",
                md: "2rem"
              }, textAlign: {
                xs: "justify",
                sm: "left"
              }}}
              gutterBottom
              >{work.description}</Typography>
          </Grid>
          <Grid item xs={12} sm={5} lg={3} order={{xs: 1, sm: 1, md: 2}}>
              <Grid container sx={{ display: "flex", columnGap: {xs: 2, sm: 0} ,flexDirection: {xs: "row", sm: "column"}}}>
                <Grid item sx={{display: "flex", justifyContent: "start", flexWrap: "nowrap"}}>
                    <Box display="flex" alignItems="center" justifyContent="center" flexWrap="nowrap" gap={1}>
                      <CircleIcon sx={{width: "14px", height: "auto"}}/>
                      
                        <Typography variant="overline" component="h2">Category: {work.category}</Typography>
                      
                    </Box>
                </Grid>
                <Grid item sx={{display: "flex", justifyContent: "start", flexWrap: "nowrap"}}>
                    <Box display="flex" alignItems="center" justifyContent="center" flexWrap="nowrap" gap={1}>
                      <CircleIcon sx={{width: "14px", height: "auto"}}/>
                      
                        <Typography variant="overline" component="h2">Timeline: {work.timeline}</Typography>
                      
                    </Box>
                </Grid>
                <Grid item sx={{display: "flex", justifyContent: "start", flexWrap: "nowrap"}}>
                    <Box display="flex" alignItems="center" justifyContent="center" flexWrap="nowrap" gap={1}>
                      <CircleIcon sx={{width: "14px", height: "auto"}}/>
                      
                        <Typography variant="overline" component="h2">Position: {work.position}</Typography>
                      
                    </Box>
                </Grid>
              </Grid>
          </Grid>
       <Grid item xs={12} lg={6} order={{xs: 2, sm: 3, md: 3}}>
        <Box sx={{width: "100%", height: "100%"}}>
              <Image 
                src={work.pictures[0].picture}
                loading="lazy"
                alt={work.title}
                style={{
                  width: "100%",
                  height: "100%"
                }}
              />
          </Box>
       </Grid>
       <Grid item xs={12} lg={6} order={{xs: 2, sm: 3, md: 3}}>
        <Box sx={{width: "100%", height: "100%"}}>
              <Image 
                src={work.pictures[0].picture}
                loading="lazy"
                alt={work.title}
                style={{
                  width: "100%",
                  height: "100%"
                }}
              />
          </Box>
       </Grid>
        </Grid>
      </CustomContainer>
    </CustomBoxBorderedBottom>
  )
}

export default page