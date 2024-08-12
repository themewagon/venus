import { Paper, Typography, Stack, Box } from "@mui/material";
import IconifyIcon from "components/base/IconifyIcon";

const Transactions = () => {
  return (
    <Paper sx={{height: 355}}>
      <Typography variant="h5">Your transactions</Typography>

      <Stack mt={2.5} spacing={2} justifyContent="flex-start" alignItems="center">
        <Stack alignItems="center" justifyContent="center" height={48} width={48} bgcolor="info.dark" borderRadius="50%">
            <IconifyIcon icon="ic:outline-directions-bus-filled" color="primary.main" fontSize="h4.fontSize"/>
        </Stack>
        <Stack direction="column">
            <Typography variant="body1" fontWeight={700}>Public Transport</Typography>
            <Typography variant="caption" color="text.disabled" fontWeight={500}>22 September 2020</Typography>
        </Stack>
      </Stack>
    </Paper>
  )
}

export default Transactions;
