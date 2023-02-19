import { Box, Container, Stack } from '@mui/material';
import { Grid } from '@mui/material';

import { black, red } from '../constants';
import {
  BlackOutlinedBtn,
  GridCenterVertical,
  LatoTypo,
  MulishTypo,
  WhiteOutlinedBtn,
} from '../styled';

export const HotProduct = () => {
  const hotProducts = [
    {
      name: 'Metro Ads',
      image:
        'https://templatekit.jegtheme.com/adsboard/wp-content/uploads/sites/222/2021/12/bryan-lobos-v6Y5j53HmCw-unsplash.jpg',
      description: 'Eiusmodte porincididunt ut labor. Suspendisse inmagna inelit.',
      price: '10.500.000 VND',
    },
    {
      name: 'Hoarding Board',
      image:
        'https://templatekit.jegtheme.com/adsboard/wp-content/uploads/sites/222/2021/12/matthew-smith-raeh5UIJixs-unsplash-800x1000.jpg',
      description: 'Eiusmodte porincididunt ut labor. Suspendisse inmagna inelit.',
      price: '15.530.000 VND',
    },
    {
      name: 'Transit Media',
      image:
        'https://templatekit.jegtheme.com/adsboard/wp-content/uploads/sites/222/2021/12/ryunosuke-kikuno-3UDme-mhd3Q-unsplash-800x1000.jpg',
      description: 'Eiusmodte porincididunt ut labor. Suspendisse inmagna inelit.',
      price: '9.567.000 VND',
    },
  ];

  return (
    <Box sx={{ position: 'relative', height: 500, width: '100%' }}>
      <Box
        sx={{
          position: 'absolute',
          top: { xs: 0, sm: '-166px' },
          height: '500px',
          width: '100%',
        }}
      >
        <Container sx={{ backgroundColor: 'white' }}>
          <Grid container spacing={5} sx={{ px: { xs: 0, sm: 2 } }}>
            <GridCenterVertical item xs={12} sm={3}>
              <Stack spacing={2}>
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
                    fontSize: { xs: 40, sm: 46 },
                    fontWeight: 600,
                    lineHeight: '1.2em',
                  }}
                >
                  The Billboard Advertising
                </LatoTypo>
                <MulishTypo
                  sx={{
                    fontSize: { xs: 14, sm: 16 },
                    fontWeight: 400,
                    color: black['200'],
                  }}
                >
                  Suspendisse in magna in elit hendrerit condimen. Phasellus eu justo mi.
                  Proin aliquet.
                </MulishTypo>
                <BlackOutlinedBtn sx={{ padding: '18px 35px', width: 200 }}>
                  <LatoTypo
                    sx={{
                      textTransform: 'uppercase',
                      fontSize: { xs: 13, sm: 14 },
                      letterSpacing: '3px',
                    }}
                  >
                    Get started
                  </LatoTypo>
                </BlackOutlinedBtn>
              </Stack>
            </GridCenterVertical>

            {hotProducts.map((product, index) => (
              <Grid key={index} item xs={12} sm={3}>
                <Stack spacing={1}>
                  <img src={product.image} alt="product" style={{ maxWidth: '100%' }} />
                  <MulishTypo sx={{ fontSize: 16, color: red['300'], fontWeight: 400 }}>
                    {product.price}
                  </MulishTypo>
                  <LatoTypo sx={{ color: black['900'], fontWeight: 600, fontSize: 26 }}>
                    {product.name}
                  </LatoTypo>
                  <MulishTypo
                    sx={{
                      fontSize: { xs: 14, sm: 16 },
                      fontWeight: 400,
                      color: black['200'],
                    }}
                  >
                    {product.description}
                  </MulishTypo>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
