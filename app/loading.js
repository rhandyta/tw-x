import { Box } from "@mui/material";
import LoadingProgress from "./components/LoadingProgress";

function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1000,
        backgroundColor: "rgba(255, 255, 255, 0.2)", // Menambahkan latar belakang semi transparan
      }}
    >
      <LoadingProgress />
    </Box>
  );
}

export default Loading;
