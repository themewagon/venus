import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import LogoImg from 'assets/images/logo.png';
import Image from 'components/base/Image';
import { fontFamily } from 'theme/typography';

const DrawerItems = () => {
  return (
    <>
      <Stack
        pt={5}
        pb={3.5}
        px={4.5}
        position="sticky"
        top={0}
        bgcolor="info.darker"
        alignItems="center"
        justifyContent="flex-start"
        borderBottom={1}
        borderColor="info.main"
        zIndex={1000}
      >
        <ButtonBase component={Link} href="/" disableRipple>
          <Image src={LogoImg} alt="logo" height={52} width={52} sx={{ mr: 1.75 }} />
          <Box>
            <Typography
              mt={0.25}
              variant="h3"
              color="primary.main"
              textTransform="uppercase"
              letterSpacing={1}
              fontFamily={fontFamily.poppins}
            >
              Venus
            </Typography>
            <Typography
              mt={-0.35}
              variant="body2"
              color="primary.main"
              textTransform="uppercase"
              fontWeight={500}
              fontFamily={fontFamily.poppins}
            >
              Dashboard
            </Typography>
          </Box>
        </ButtonBase>
      </Stack>

      
    </>
  );
};

export default DrawerItems;
