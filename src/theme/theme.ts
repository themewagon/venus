import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import customShadows from "./shadows";
import CssBaseline from "./components/utils/CssBaseline";

export const theme = createTheme({
  typography,
  palette,
  customShadows,
  components: {
    MuiCssBaseline: CssBaseline,
  },
});
