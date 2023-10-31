import CustomBoxBorderedBottom from '@/components/CustomBoxBorderedBottom'
import CustomContainer from '@/components/CustomContainer'
import { Typography } from '@mui/material'
import React from 'react'

function page() {
  return (
    <CustomBoxBorderedBottom>
      <Typography variant='h2' component="h1">Dashboard</Typography>
      <CustomContainer>
        
      </CustomContainer>
    </CustomBoxBorderedBottom>
  )
}

export default page