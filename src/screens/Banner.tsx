import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import Typed from 'react-typed';

import { BoxWithBackgroundAndLayer } from '../components';
import { BANNER, LOGO_REMOVE_BG, red, ZALO_LINK } from '../constants';
import {
  LatoTypo,
  MulishTypo,
  MulishTypoHeadingTitle,
  WhiteOutlinedBtn,
} from '../styled';

export const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
                  top: { xs: 300, sm: 200 },
                  right: { xs: 0, sm: 200 },
                }
          }
        >
          <img
            src={logoPath}
            style={{ height: isMobile ? 300 : '100%', width: 'auto' }}
            alt="logo"
          />
        </Box>
        <Container sx={isMobile ? { position: 'relative', top: -100 } : {}}>
          <Stack
            sx={isMobile ? { alignItems: 'center' } : {}}
            spacing={3}
            mt={{ xs: 20, sm: 30 }}
          >
            <LatoTypo
              sx={{
                color: red['300'],
                letterSpacing: '4px',
                fontSize: { xs: 15, sm: 17 },
                fontWeight: 400,
                textAlign: { xs: 'center', sm: 'unset' },
              }}
            >
              Thiết kế, thi công bảng hiệu quảng cáo chuyên nghiệp tại Hồ Chí Minh
            </LatoTypo>
            <MulishTypoHeadingTitle
              sx={{
                color: 'white',
                fontSize: { xs: 40, sm: 60 },
                // fontWeight: 600,
                lineHeight: '1.2em',
                textTransform: 'uppercase',
              }}
            >
              Quảng cáo 88
            </MulishTypoHeadingTitle>
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
              {/* {introduce.map((sentence, index) => (
              <Box key={index}>
                <MulishTypo
                  key={index}
                  sx={{ fontSize: { xs: 14, sm: 16 }, fontWeight: 400, color: 'white' }}
                >
                  {sentence}
                </MulishTypo>
              </Box>
            ))} */}
            </Box>

            <WhiteOutlinedBtn
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
            </WhiteOutlinedBtn>
          </Stack>
        </Container>
      </>
    </BoxWithBackgroundAndLayer>
  );
};
