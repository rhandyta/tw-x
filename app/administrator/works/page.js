import CustomBoxBorderedBottom from '@/components/CustomBoxBorderedBottom'
import CustomContainer from '@/components/CustomContainer'
import Card from '@/components/pages/administrator/works/CardWork';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button, Typography } from '@mui/material'
import Link from 'next/link';
import React from 'react'

function page() {
  return (
    <CustomBoxBorderedBottom>
        <Typography variant="h2" component="h1">Works</Typography>
        <CustomContainer>
           <Link href="works/add" title="Add Work"><Button variant='outlined' startIcon={<AddBoxIcon/>}>Add Data</Button></Link>
            <Card/>
        </CustomContainer>
    </CustomBoxBorderedBottom>
  )
}

export default page