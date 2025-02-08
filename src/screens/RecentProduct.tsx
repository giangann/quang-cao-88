import { Box, Container, Grid } from '@mui/material';

import { BoxWithTileSubtitleDescription } from '../components';
import { NEON_FOLDER_PATH } from '../constants';
import { ProductItem } from './ProductItem';

export const RecentProduct = () => {
  const recentProduct = [
    {
      id: 1,
      name: 'Neon Light',
      imageSuffix: 'neon8',
      description: null,
      price: null,
    },
    {
      id: 2,
      name: 'Neon Light',
      imageSuffix: 'neon9',
      description: null,
      price: null,
    },
    {
      id: 3,
      name: 'Neon Light',
      imageSuffix: 'neon10',
      description: null,
      price: null,
    },
    {
      id: 4,
      name: 'Neon Light',
      imageSuffix: 'neon11',
      description: null,
      price: null,
    },
    {
      id: 5,
      name: 'Neon Light',
      imageSuffix: 'neon12',
      description: null,
      price: null,
    },
    {
      id: 6,
      name: 'Neon Light',
      imageSuffix: 'neon13',
      description: null,
      price: null,
    },
    {
      id: 7,
      name: 'Neon Light',
      imageSuffix: 'neon14',
      description: null,
      price: null,
    },
    {
      id: 7,
      name: 'Neon Light',
      imageSuffix: 'neon15',
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
