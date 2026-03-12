import type { Theme, Components } from "@mui/material";
import simplebar from "theme/styles/simplebar";
import scrollbar from "theme/styles/scrollbar";

const CssBaseline: Components<Omit<Theme, "components">>["MuiCssBaseline"] = {
  defaultProps: {},
  styleOverrides: (theme) => ({
    "*, *::before, *::after": {
      margin: 0,
      padding: 0,
    },
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      fontVariantLigatures: "none",
      backgroundColor: theme.palette.info.main,
      ...scrollbar(theme),
    },
    ...simplebar(theme),
  }),
};

export default CssBaseline;
