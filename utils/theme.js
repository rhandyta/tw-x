const { createTheme, responsiveFontSizes } = require("@mui/material");
import { green, grey, orange, red } from "@mui/material/colors";

const app = createTheme({
    palette: {
      primary: {
        main: orange[200],
      },
      secondary: {
        main: grey[700],
      },
      error: {
        main: red[400]
      },
      success: {
        main: green[400]
      },
      mode: "dark"
    },
  });

const theme = responsiveFontSizes(app);
export default theme;