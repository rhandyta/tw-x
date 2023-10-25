import { Box } from "@mui/material"
import LoadingProgress from "./components/LoadingProgress"


function loading() {
  return (
    <Box sx={{
      position: "relative",
      width: "100%",
      height: "100vh"
    }}>
      <Box sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "80%",
        left: "90%",
        zIndex: 1000,
        transform: `translate(-50%, -50%)`
      }}>

      <LoadingProgress />

      </Box>
    </Box>
  )
}

export default loading