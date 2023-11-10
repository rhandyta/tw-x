import CustomBoxBorderedBottom from '@/components/CustomBoxBorderedBottom'
import CustomContainer from '@/components/CustomContainer'
import CardBlog from '@/components/pages/administrator/blogs/CardBlog';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button, Typography } from '@mui/material'
import Link from 'next/link';
import React from 'react'

function page() {
  return (
    <CustomBoxBorderedBottom>
        <Typography variant="h2" component="h1">Blogs</Typography>
        <CustomContainer>
           <Link href="blogs/add" title="Add Blog"><Button variant='outlined' startIcon={<AddBoxIcon/>}>Add Data</Button></Link>
            <CardBlog/>
        </CustomContainer>
    </CustomBoxBorderedBottom>
  )
}

export default page