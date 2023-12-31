import LoadingProgress from "@/components/LoadingProgress";
import { Box } from "@mui/material";

function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <LoadingProgress />
    </Box>
  );
}

export default Loading;
