import { Grid, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'

function Footer() {
  return (
    <Grid container justifyContent="center" spacing={5} color={grey[600]} mt={1}>
        <Grid item>
            <Typography variant="subtitle1" component="h6">Rhandyta Briantama</Typography>
        </Grid>
        <Grid item>
            <Typography variant="subtitle1" component="h6">Website @{new Date().getFullYear()}</Typography>
        </Grid>
        <Grid item>
            <Typography variant="subtitle1" component="h6">TW-X</Typography>
        </Grid>
    </Grid>
  )
}

export default Footer