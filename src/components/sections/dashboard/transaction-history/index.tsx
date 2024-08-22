import { useState, ChangeEvent } from 'react';
import Stack from '@mui/material/Stack';
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
    <Paper sx={{ height: 385 }}>
      <Stack alignItems="center" justifyContent="space-between">
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

      <Stack sx={{ mt: 1.5, p: 0, pb: 0.75, minHeight: 411, width: 1 }}>
        <TransactionHistoryTable searchText={searchText} />
      </Stack>
    </Paper>
  );
};

export default TransactionHistory;
