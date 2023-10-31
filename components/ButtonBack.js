"use client"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

function ButtonBack() {
    const router = useRouter();
  return (
    <Button variant="outlined" startIcon={<ArrowBackIosIcon/>} onClick={() => router.back()}>Back</Button>
  )
}

export default ButtonBack