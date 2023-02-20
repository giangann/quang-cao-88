import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';

import { BoxWithBackgroundAndLayer } from '../components';
import { red } from '../constants';
import { LatoTypo, MulishTypo, WhiteOutlinedBtn } from '../styled';

export const Banner = () => {
  const introduce = [
    'Bạn muốn thiết kế bảng hiệu cho cơ sở kinh doanh?',
    'Bạn muốn setup quán Cafe để khởi nghiệp?',
    'Hay đơn giản là cần tìm một đơn vị thiết kế bảng hiệu uy tín, chất lượng?',
  ];
  const bgImage =
    'https://templatekit.jegtheme.com/adsboard/wp-content/uploads/sites/222/2021/12/yu-kato2-ufZeqLJDG7c-unsplash.jpg';
  return (
    <BoxWithBackgroundAndLayer
      width="100%"
      height="100vh"
      image={bgImage}
      sx={{ backgroundColor: 'black', opacity: 0.7 }}
    >
      <Container>
        <Stack spacing={3} mt={{ xs: 20, sm: 30 }}>
          <LatoTypo
            sx={{
              color: red['300'],
              letterSpacing: '4px',
              fontSize: { xs: 15, sm: 17 },
              fontWeight: 400,
            }}
          >
            ADS FOR REALITY
          </LatoTypo>
          <LatoTypo
            sx={{
              color: 'white',
              fontSize: { xs: 40, sm: 60 },
              fontWeight: 600,
              lineHeight: '1.2em',
            }}
          >
            The New Level For <br />
            Billboard Advertising
          </LatoTypo>
          <Box>
            {introduce.map((sentence, index) => (
              <MulishTypo
                key={index}
                sx={{ fontSize: { xs: 14, sm: 16 }, fontWeight: 400, color: 'white' }}
              >
                {sentence}
              </MulishTypo>
            ))}
          </Box>

          <WhiteOutlinedBtn sx={{ padding: '18px 35px', width: 200 }}>
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
    </BoxWithBackgroundAndLayer>
  );
};
