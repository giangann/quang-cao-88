import { Box, Container, Stack, useMediaQuery, useTheme } from '@mui/material';
import Typed from 'react-typed';

import { BoxWithBackgroundAndLayer } from '../components';
import { BANNER, LOGO_REMOVE_BG, red, ZALO_LINK } from '../constants';
import { MulishTypo, UVNHaiBaTrungTypo } from '../styled';

export const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const introduce = [
    'Bạn muốn thiết kế bảng hiệu cho cơ sở kinh doanh?',
    'Bạn muốn setup quán Cafe để khởi nghiệp?',
    'Hay đơn giản là cần tìm một đơn vị thiết kế bảng hiệu uy tín, chất lượng?',
  ];

  const bgImage = BANNER;
  const logoPath = LOGO_REMOVE_BG;

  return (
    <BoxWithBackgroundAndLayer
      width="100%"
      height="100vh"
      image={bgImage}
      sx={{ backgroundColor: 'black', opacity: 0.7, backgroundSize: 'cover' }}
    >
      <>
        <Box
          sx={
            isMobile
              ? {
                  position: 'absolute',
                  opacity: 0.3,
                  bottom: 0,
                  right: '0',
                }
              : {
                  position: 'absolute',
                  opacity: 0.3,
                  top: 0,
                  right: 0,
                }
          }
        >
          <img
            src={logoPath}
            style={{ height: isMobile ? 300 : '100%', width: 'auto' }}
            alt="logo"
          />
        </Box>
        <Container
          sx={
            isMobile
              ? { position: 'relative', top: -100 }
              : isMedium
              ? { position: 'relative', top: -100 }
              : {}
          }
        >
          <Stack
            sx={isMobile ? { alignItems: 'center' } : {}}
            spacing={3}
            mt={{ xs: 20, sm: 30 }}
          >
            <MulishTypo
              sx={{
                color: red['300'],
                letterSpacing: '2px',
                fontSize: { xs: 15, sm: 17 },
                fontWeight: 400,
                textAlign: { xs: 'center', sm: 'unset' },
              }}
            >
              Thiết kế, thi công bảng hiệu quảng cáo chuyên nghiệp tại Hồ Chí Minh
            </MulishTypo>
            <UVNHaiBaTrungTypo
              sx={{
                color: 'white',
                fontSize: { xs: 40, sm: 80 },
                lineHeight: '1.2em',
                textTransform: 'uppercase',
                wordSpacing: 2,
                letterSpacing: 4,
              }}
            >
              Quảng cáo Osiris
            </UVNHaiBaTrungTypo>

            <Box>
              <Typed
                style={{
                  color: 'white',
                  fontSize: isMobile ? 14 : 16,
                  fontWeight: 400,
                }}
                strings={introduce}
                typeSpeed={20}
                backSpeed={1}
              />
            </Box>

            {/* <WhiteOutlinedBtn
              sx={{ padding: '18px 35px', width: 200 }}
              onClick={() => window.open(ZALO_LINK, '_blank')}
            >
              <LatoTypo
                sx={{
                  textTransform: 'uppercase',
                  fontSize: { xs: 13, sm: 14 },
                  letterSpacing: '3px',
                }}
              >
                Tư vấn ngay
              </LatoTypo>
            </WhiteOutlinedBtn> */}
            <div
              className="box-3"
              onClick={() => {
                window.open(ZALO_LINK);
              }}
              onKeyDown={() => {
                window.open(ZALO_LINK);
              }}
              aria-hidden="true"
            >
              <div className="btn btn-three">
                <MulishTypo
                  sx={{
                    textTransform: 'uppercase',
                    fontSize: { xs: 13, sm: 14 },
                    letterSpacing: '3px',
                    color: 'white',
                    fontWeight: 900,
                  }}
                >
                  Tư vấn ngay
                </MulishTypo>
              </div>
            </div>
          </Stack>
        </Container>
      </>
    </BoxWithBackgroundAndLayer>
  );
};
