import React from 'react'
import CustomBoxBorderedBottom from '../components/CustomBoxBorderedBottom'
import CustomContainer from '../components/CustomContainer'
import { Box, Typography } from '@mui/material'
import CustomButton from '../components/CustomButton'
import Link from 'next/link'

function page() {
  return (
    <CustomBoxBorderedBottom>
      <Typography variant="h3" component="h1">
        Let&#39;s Talk
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomContainer
          maxWidth="sm"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            textAlign: "justify",
          }}
        >

          


          <Link href="/contact" className="button-link">
            <CustomButton>Send Message</CustomButton>
          </Link>
        </CustomContainer>
      </Box>
    </CustomBoxBorderedBottom>
  )
}

export default page