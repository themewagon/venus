import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AvatarImg from 'assets/images/avatar.png';
import IconifyIcon from 'components/base/IconifyIcon';

const profile = {
  name: 'Charles Robbie',
  location: 'New York, USA',
  avatar: AvatarImg,
  details: [
    {
      id: 1,
      type: 'Projects',
      count: 28,
    },
    {
      id: 2,
      type: 'Followers',
      count: 643,
    },
    {
      id: 3,
      type: 'Following',
      count: 76,
    },
  ],
};

const ProfileCard = () => {
  return (
    <Paper sx={{ py: 4.75, height: 355 }}>
      <Stack direction="column" alignItems="center">
        <Avatar
          src={AvatarImg}
          sx={{
            mb: 2,
            width: 130,
            height: 130,
            bgcolor: 'info.main',
          }}
        />

        <Typography variant="h4" color="text.primary" mb={0.25}>
          {profile.name}
        </Typography>
        <Stack alignItems="center" spacing={0.5} mb={3}>
          <IconifyIcon icon="ic:outline-location-on" color="text.disabled" fontSize="h6.fontSize" />
          <Typography variant="body1" color="text.disabled">
            {profile.location}
          </Typography>
        </Stack>

        <Stack spacing={4}>
          {profile.details.map((item) => (
            <Stack key={item.id} direction="column" alignItems="center">
              <Typography color="text.disabled" fontSize="body2.fontSize">
                {item.type}
              </Typography>
              <Typography variant="h4">{item.count}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ProfileCard;
