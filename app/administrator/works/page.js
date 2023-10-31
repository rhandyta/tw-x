import CustomBoxBorderedBottom from '@/components/CustomBoxBorderedBottom'
import CustomContainer from '@/components/CustomContainer'
import Card from '@/components/pages/administrator/works/Card';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button, Typography } from '@mui/material'
import React from 'react'

function page() {
  return (
    <CustomBoxBorderedBottom>
        <Typography variant="h2" component="h1">Works</Typography>
        <CustomContainer>
            <Button variant='outlined' startIcon={<AddBoxIcon/>}>Add Data</Button>
            <Card/>
        </CustomContainer>
    </CustomBoxBorderedBottom>
  )
}

export default page