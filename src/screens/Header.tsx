import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';

import { CustomDrawer } from '../components';
import { black, LOGO_BLACK, red } from '../constants';
import { LinkCustom, MulishTypo, textHoverStyle } from '../styled';

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const logoPath = LOGO_BLACK;
  const pages = [
    {
      name: 'Dịch vụ nổi bật',
      link: '#hot-product-section',
    },
    {
      name: 'Mẫu Led Neon',
      link: '#led-neon-section',
    },
    {
      name: 'Tùy chọn mẫu',
      link: '#custom-led-section',
    },
    {
      name: 'Về chúng tôi',
      link: '#about-section',
    },
    {
      name: 'Lý do',
      link: '#reason-section',
    },
    {
      name: 'Liên hệ',
      link: '#contact-section',
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
                <LinkCustom key={page.name} href={page.link}>
                  <MulishTypo
                    sx={{
                      fontSize: 18,
                      color: black['900'],
                      fontWeight: 700,
                      ...textHoverStyle,
                    }}
                  >
                    {page.name}
                  </MulishTypo>
                </LinkCustom>
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
