import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Paper: Components<Omit<Theme, 'components'>>['MuiPaper'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(3.5),
      backgroundColor: theme.palette.info.main,
      borderRadius: theme.shape.borderRadius * 3,
      boxShadow: theme.customShadows[0],

      '&.MuiMenu-paper': {
        padding: theme.spacing(1),
      },
    }),
  },
};

export default Paper;
