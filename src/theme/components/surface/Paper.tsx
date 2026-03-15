import type { Theme, Components } from '@mui/material/styles';
import customShadows from 'theme/shadows';

const Paper: Components<Omit<Theme, 'components'>>['MuiPaper'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(3.5),
      backgroundColor: theme.palette.info.light,
      borderRadius: Number(theme.shape.borderRadius) * 3,
      boxShadow: 'none',

      '&.MuiMenu-paper': {
        padding: 0,
        boxShadow: customShadows[1],
      },
    }),
  },
};

export default Paper;
