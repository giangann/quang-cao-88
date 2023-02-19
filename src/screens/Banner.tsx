import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';

import { BoxWithBackgroundAndLayer } from '../components';
import { red } from '../constants';
import { LatoTypo, MulishTypo, WhiteOutlinedBtn } from '../styled';

export const Banner = () => {
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
          <MulishTypo
            sx={{ fontSize: { xs: 14, sm: 16 }, fontWeight: 400, color: 'white' }}
          >
            Suspendisse in magna in elit hendrerit condimen. Phasellus eu justo mi. Proin
            aliquet, mauris avol lobortis erat libero condimentum metus eutincidunt
            ligulain turpis mauris avol lobortis erat libero mauris avol lobortis erat.
          </MulishTypo>
          <WhiteOutlinedBtn sx={{ padding: '18px 35px', width: 200 }}>
            <LatoTypo
              sx={{
                textTransform: 'uppercase',
                fontSize: { xs: 13, sm: 14 },
                letterSpacing: '3px',
              }}
            >
              Get started
            </LatoTypo>
          </WhiteOutlinedBtn>
        </Stack>
      </Container>
    </BoxWithBackgroundAndLayer>
  );
};
