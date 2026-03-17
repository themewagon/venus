import type { Theme, Components } from '@mui/material/styles';

const FilledInput: Components<Omit<Theme, 'components'>>['MuiFilledInput'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: Number(theme.shape.borderRadius) * 2,
    }),
    input: {
      padding: 0,
    },
    sizeSmall: ({ theme }) => ({
      paddingLeft: theme.spacing(1.25),
    }),
  },
};

export default FilledInput;
