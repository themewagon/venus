import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const InputAdornment: Components<Omit<Theme, 'components'>>['MuiInputAdornment'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      margin: '0 !important',
      color: theme.palette.neutral.light,
      fontSize: theme.typography.h4.fontSize,

      '&.MuiInputAdornment-sizeSmall': {
        '& .MuiBox-root': {
          fontSize: theme.typography.h6.fontSize,
        },
      },
    }),
    positionStart: ({ theme }) => ({
      paddingRight: theme.spacing(1),
    }),
    positionEnd: ({ theme }) => ({
      paddingRight: theme.spacing(0.75),
    }),
  },
};

export default InputAdornment;