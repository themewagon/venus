import type {} from '@mui/x-data-grid/themeAugmentation';
import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import customShadows from './shadows';

import Stack from './components/layout/Stack';
import Paper from './components/surface/Paper';

import Link from './components/navigation/Link';
import Drawer from './components/navigation/Drawer';
import Chip from './components/data-display/Chip';
import Badge from './components/data-display/Badge';

import Button from './components/button/Button';
import ButtonBase from './components/button/ButtonBase';
import IconButton from './components/button/IconButton';
import Toolbar from './components/button/Toolbar';

import InputBase from './components/input/InputBase';
import FilledInput from './components/input/FilledInput';
import OutlinedInput from './components/input/OutlinedInput';
import InputAdornment from './components/input/InputAdornment';
import FormControlLabel from './components/input/FormControlLabel';
import Checkbox from './components/input/Checkbox';
import Select from './components/input/Select';

import List from './components/list/List';
import ListItemIcon from './components/list/ListItemIcon';
import ListItemText from './components/list/ListItemText';
import ListItemButton from './components/list/ListItemButton';
import Collapse from './components/list/Collapse';
import MenuItem from './components/list/MenuItem';

import DataGrid from './components/data-grid/DataGrid';
import PaginationItem from './components/pagination/PaginationItem';

import CssBaseline from './components/utils/CssBaseline';

export const theme = createTheme({
  typography,
  palette,
  customShadows,
  components: {
    MuiButton: Button,
    MuiButtonBase: ButtonBase,
    MuiIconButton: IconButton,
    MuiToolbar: Toolbar,

    MuiLink: Link,
    MuiDrawer: Drawer,
    MuiChip: Chip,
    MuiBadge: Badge,

    MuiInputBase: InputBase,
    MuiFilledInput: FilledInput,
    MuiOutlinedInput: OutlinedInput,
    MuiInputAdornment: InputAdornment,
    MuiFormControlLabel: FormControlLabel,
    MuiCheckbox: Checkbox,
    MuiSelect: Select,

    MuiList: List,
    MuiListItemIcon: ListItemIcon,
    MuiListItemText: ListItemText,
    MuiListItemButton: ListItemButton,
    MuiCollapse: Collapse,
    MuiMenuItem: MenuItem,

    MuiStack: Stack,
    MuiPaper: Paper,

    MuiDataGrid: DataGrid,
    MuiPaginationItem: PaginationItem,

    MuiCssBaseline: CssBaseline,
  },
});
