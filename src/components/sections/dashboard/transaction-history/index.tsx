import { useState, ChangeEvent } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconifyIcon from 'components/base/IconifyIcon';
import TransactionHistoryTable from './TransactionHistoryTable';

const TransactionHistory = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <Paper sx={{ px: 0, height: 385 }}>
      <Stack px={3.5} alignItems="center" justifyContent="space-between">
        <Typography variant="h4" minWidth={200}>
          Transaction History
        </Typography>
        <TextField
          variant="filled"
          size="small"
          placeholder="Search Task"
          value={searchText}
          onChange={handleInputChange}
          sx={{ width: 1, maxWidth: 250 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconifyIcon icon={'mynaui:search'} />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Box mt={1.5}>
        <TransactionHistoryTable searchText={searchText} />
      </Box>
    </Paper>
  );
};

export default TransactionHistory;
