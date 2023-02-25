import { Box, Container, Grid } from '@mui/material';

import { BoxWithTileSubtitleDescription } from '../components';
import { NEON_FOLDER_PATH } from '../constants';
import { ProductItem } from './ProductItem';

export const RecentProduct = () => {
  const recentProduct = [
    {
      id: 1,
      name: 'Neon Light',
      imageSuffix: 'neon1',
      description: null,
      price: null,
    },
    {
      id: 2,
      name: 'Neon Light',
      imageSuffix: ['neon2.1', 'neon2.2'],
      description: null,
      price: null,
    },
    {
      id: 3,
      name: 'Neon Light',
      imageSuffix: ['neon3.1', 'neon3.2'],
      description: null,
      price: null,
    },
    {
      id: 4,
      name: 'Neon Light',
      imageSuffix: ['neon4.1', 'neon4.2'],
      description: null,
      price: null,
    },
    {
      id: 5,
      name: 'Neon Light',
      imageSuffix: ['neon5.1', 'neon5.2'],
      description: null,
      price: null,
    },
    {
      id: 6,
      name: 'Neon Light',
      imageSuffix: ['neon6.1', 'neon6.2'],
      description: null,
      price: null,
    },
    {
      id: 7,
      name: 'Neon Light',
      imageSuffix: 'neon7',
      description: null,
      price: null,
    },
  ];

  return (
    <Container sx={{ mb: { xs: 8, sm: 16 } }} id="led-neon-section">
      <BoxWithTileSubtitleDescription
        mb={3}
        textAlign="center"
        alignItems="center"
        title="Các Mẫu Ledneon"
        subTitle="Sản phẩm"
        description="Danh sách các mẫu được nhiều khách hàng ưa chuộng"
      />
      <Grid container columnSpacing={2} rowSpacing={4}>
        {recentProduct.map((product, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <ProductItem product={{ image: product.imageSuffix, name: product.name }} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
