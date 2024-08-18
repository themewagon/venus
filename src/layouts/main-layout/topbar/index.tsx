import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Badge from '@mui/material/Badge';
import TextField from '@mui/material/TextField';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';
import LogoImg from 'assets/images/logo.png';
import LanguageSelect from './LanguageSelect';
import ProfileMenu from './ProfileMenu';

interface TopbarProps {
  isClosing: boolean;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Topbar = ({ isClosing, mobileOpen, setMobileOpen }: TopbarProps) => {
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Stack
      pt={3.5}
      pb={1.5}
      alignItems="center"
      justifyContent="space-between"
      bgcolor="transparent"
      zIndex={1200}
    >
      <Stack spacing={{ xs: 1, sm: 2 }} alignItems="center">
        <ButtonBase
          component={Link}
          href="/"
          disableRipple
          sx={{ lineHeight: 0, display: { xs: 'none', sm: 'block', lg: 'none' } }}
        >
          <Image src={LogoImg} alt="logo" height={54} width={54} />
        </ButtonBase>

        <Toolbar sx={{ display: { xm: 'block', lg: 'none' } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <IconifyIcon icon="clarity:menu-line" />
          </IconButton>
        </Toolbar>

        <Toolbar sx={{ display: { xm: 'block', md: 'none' } }}>
          <IconButton size="large" edge="start" color="inherit" aria-label="search">
            <IconifyIcon icon="mynaui:search" />
          </IconButton>
        </Toolbar>

        <TextField
          variant="filled"
          placeholder="Search"
          sx={{ width: 340, display: { xs: 'none', md: 'flex' } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconifyIcon icon="eva:search-fill" />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack spacing={{ xs: 1, sm: 2 }} alignItems="center">
        <LanguageSelect />
        <IconButton size="large">
          <Badge badgeContent={2} color="error">
            <IconifyIcon icon="ic:outline-notifications-none" />
          </Badge>
        </IconButton>
        <ProfileMenu />
      </Stack>
    </Stack>
  );
};

export default Topbar;
