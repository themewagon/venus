import { Paper, Stack, Chip, Box, Typography, FormControl, Select, MenuItem } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import customShadows from 'theme/shadows';
import BalanceChart from './BalanceChart';

const balance = [
  {
    id: 1,
    type: 'Saves',
    value: '43.50%',
    progress: '+2.45%',
    isPositive: true,
  },
  {
    id: 2,
    type: 'Balance',
    value: '$52,422',
    progress: '-4.75%',
    isPositive: false,
  },
];

const Balance = () => {
  const [timeline, setTimeline] = useState('monthly');
  const [open, setOpen] = useState(false);

  const handleSelectChange = (event: SelectChangeEvent) => {
    setTimeline(event.target.value);
    console.log(open);
  };

  return (
    <Paper sx={{ height: 355 }}>
      <Stack alignItems="center" justifyContent="space-between">
        <Stack alignItems="center" spacing={1.5}>
          <Typography variant="h4" color="text.primary">
            Balance
          </Typography>
          <Stack mt={0.55} alignItems="center" spacing={0.5}>
            <IconifyIcon icon="ic:round-check-circle" color="success.main" fontSize="h6.fontSize" />
            <Typography variant="body1" color="success.main" fontWeight={700}>
              On track
            </Typography>
          </Stack>
        </Stack>

        <FormControl
          variant="filled"
          sx={{
            width: 105,
            '& .MuiInputBase-root': {
              '&:focus-within': {
                borderColor: 'transparent !important',
                boxShadow: 'none',
              },
            },
          }}
        >
          <Select
            id="select-filled"
            value={timeline}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            onChange={handleSelectChange}
          >
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="yearly">Yearly</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Stack mt={3} width={1} spacing={3} justifyContent="center">
        {balance.map((item) => (
          <Box
            key={item.id}
            px={2.5}
            py={2}
            width={1}
            maxWidth={320}
            borderRadius={1.75}
            boxShadow={customShadows[0]}
          >
            <Typography variant="body2" color="text.disabled" fontWeight={500}>
              {item.type}
            </Typography>
            <Stack mt={0.75} alignItems="center" spacing={1.75}>
              <Typography variant="h3">{item.value}</Typography>
              <Chip label={item.progress} color={item.isPositive ? 'success' : 'error'} />
            </Stack>
          </Box>
        ))}

        {/* <Box
          px={2.5}
          py={2}
          width={1}
          maxWidth={320}
          borderRadius={1.75}
          boxShadow={customShadows[0]}
        >
          <Typography variant="body2" color="text.disabled" fontWeight={500}>
            Saves
          </Typography>
          <Stack mt={0.75} alignItems="center" spacing={1.75}>
            <Typography variant="h3">43.50%</Typography>
            <Chip label="+2.45%" color="success" />
          </Stack>
        </Box> */}
      </Stack>

      <BalanceChart
        data={[20, 30, 50, 45, 60, 20, 40, 50, 30, 60, 40, 50, 20, 45, 30]}
        sx={{ width: 1, height: '220px !important' }}
      />
    </Paper>
  );
};

export default Balance;
