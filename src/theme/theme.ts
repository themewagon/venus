import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import customShadows from "./shadows";

import Stack from "./components/layout/Stack";
import Paper from "./components/surface/Paper";

import Button from "./components/button/Button";
import ButtonBase from "./components/button/ButtonBase";
import IconButton from "./components/button/IconButton";
import Toolbar from "./components/button/Toolbar";

import CssBaseline from "./components/utils/CssBaseline";

export const theme = createTheme({
  typography,
  palette,
  customShadows,
  components: {
    MuiButton: Button,
    MuiButtonBase: ButtonBase,
    MuiIconButton: IconButton,
    MuiToolbar: Toolbar,

    MuiStack: Stack,
    MuiPaper: Paper,

    MuiCssBaseline: CssBaseline,
  },
});
