import { Button } from '@mui/material'
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import { green } from '@mui/material/colors';

function ButtonOpenWork() {
  return <Button variant="contained" sx={{
    bgcolor: `rgba(221, 255, 204, 0.1)`,
    color: green[400],
    "&:hover": {
      bgcolor: `rgba(221, 255, 204, 0.3)`,
      color: green[100],
    }
  }} startIcon={<ScatterPlotIcon/>}>Open to work</Button>
}

export default ButtonOpenWork