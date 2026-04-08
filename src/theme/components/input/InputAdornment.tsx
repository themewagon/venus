import type { Theme, Components } from '@mui/material/styles';
import { boxClasses, iconButtonClasses } from '@mui/material';

const InputAdornment: Components<Omit<Theme, 'components'>>['MuiInputAdornment'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.text.primary,
      fontSize: theme.typography.h5.fontSize,
      margin: '0 !important',
      padding: 0,

      [`& .${iconButtonClasses.root}`]: {
        margin: 0,
        padding: 0,
      },
    }),
    positionStart: ({ theme }) => ({
      paddingRight: theme.spacing(1),
    }),
    positionEnd: ({ theme }) => ({
      paddingRight: theme.spacing(0.25),
    }),
    sizeSmall: ({ theme }) => ({
      [`& .${boxClasses.root}`]: {
        fontSize: theme.typography.h6.fontSize,
      },
    }),
  },
};

export default InputAdornment;
