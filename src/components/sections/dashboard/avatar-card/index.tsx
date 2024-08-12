import { Avatar, Paper, Stack, Typography } from '@mui/material';
import AvatarImg from 'assets/images/avatars/Avatar.png';
import IconifyIcon from 'components/base/IconifyIcon';

const AvatarCard = () => {
  return (
    <Paper sx={{py: 4.75, height: 355}}>
      <Stack direction="column" alignItems="center">
        <Avatar
          src={AvatarImg}
          sx={{
            height: 130,
            width: 130,
            bgcolor: 'info.main',
          }}
        />

        <Typography variant='h4' color="text.primary" mt={2}>Charles Robbie</Typography>
        <Stack mt={0.25} alignItems="center" spacing={0.5}>
          <IconifyIcon icon="ic:outline-location-on" color="text.disabled" fontSize="h6.fontSize"/>
          <Typography variant='body1' color="text.disabled">New York, USA</Typography>
        </Stack>

        <Stack mt={3} spacing={4}>
          <Stack direction="column" alignItems="center">
            <Typography color="text.disabled" fontSize="body2.fontSize">Projects</Typography>
            <Typography variant='h4'>28</Typography>
          </Stack>

          <Stack direction="column" alignItems="center">
            <Typography color="text.disabled" fontSize="body2.fontSize">Followers</Typography>
            <Typography variant='h4'>643</Typography>
          </Stack>

          <Stack direction="column" alignItems="center">
            <Typography color="text.disabled" fontSize="body2.fontSize">Following</Typography>
            <Typography variant='h4'>76</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default AvatarCard;
