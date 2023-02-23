import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';

import { CustomDrawer } from '../components';
import { black, LOGO, red } from '../constants';
import { MulishTypo, textHoverStyle } from '../styled';

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const logoPath = LOGO;
  const pages = [
    {
      name: 'Về chúng tôi',
      link: '/home',
    },
    {
      name: 'Sản phẩm nổi bật',
      link: '/hot-product',
    },
    {
      name: 'Lý do',
      link: '/reason',
    },
    {
      name: 'Liên hệ',
      link: '/contact',
    },
  ];
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: isMobile ? '#211F20' : 'white' }}
      elevation={0}
    >
      <Container>
        {/* For Desktop */}
        {!isMobile ? (
          <Toolbar sx={{ height: 90, paddingX: '0px !important' }}>
            <Box flexGrow={1} height="100%">
              <img src={logoPath} style={{ height: '100%', width: 'auto' }} alt="logo" />
            </Box>
            <Stack direction="row" spacing={8}>
              {pages.map((page: any) => (
                <MulishTypo
                  key={page.name}
                  sx={{
                    fontSize: 18,
                    color: black['900'],
                    fontWeight: 700,
                    ...textHoverStyle,
                  }}
                >
                  {page.name}
                </MulishTypo>
              ))}
            </Stack>
          </Toolbar>
        ) : (
          // For Mobile
          <Toolbar sx={{ height: 90 }}>
            <Box
              sx={{
                position: 'fixed',
                top: '24px',
                left: '16px',
                zIndex: 8,
                backgroundColor: red['300'],
                display: 'block',
                width: 'fit-content',
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                // edge="start"
              >
                <MenuIcon onClick={() => setOpenDrawer(true)} />
              </IconButton>
            </Box>
            {/* <Typography
              variant="h6"
              noWrap
              component="a"
              href="/home"
              sx={{
                flexGrow: 1,
                mr: 2,
                fontSize: 24,
                fontFamily: 'monospace',
                fontWeight: 600,
                letterSpacing: '.2rem',
                color: 'black',
                margin: 'auto',
                width: 'fit-content !important',
                textDecoration: 'none',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              QuangCao88
            </Typography> */}
            <Box sx={{ margin: 'auto', height: '100%' }}>
              <img src={logoPath} style={{ height: '100%', width: 'auto' }} alt="logo" />
            </Box>

            <CustomDrawer open={openDrawer} onClose={handleCloseDrawer} item={pages} />
          </Toolbar>
        )}
      </Container>
    </AppBar>
  );
};
