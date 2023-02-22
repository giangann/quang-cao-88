import { Box, Container, Grid } from '@mui/material';

import { BoxWithTileSubtitleDescription } from '../components';
import { NEON_FOLDER_PATH } from '../constants';
import { ProductItem } from './ProductItem';

export const RecentProduct = () => {
  return (
    <Container sx={{ mb: { xs: 8, sm: 16 } }}>
      <BoxWithTileSubtitleDescription
        mb={3}
        textAlign="center"
        alignItems="center"
        title="Danh sách các mẫu"
        subTitle="Sản phẩm"
        description="Danh sách các mẫu được nhiều khách hàng ưa chuộng"
      />
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          <ProductItem
            product={{ image: `${NEON_FOLDER_PATH}/neon1.jpg`, name: 'Neon Light' }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <ProductItem
            product={{ image: `${NEON_FOLDER_PATH}/neon2.1.jpg`, name: 'Neon Light' }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <ProductItem
            product={{ image: `${NEON_FOLDER_PATH}/neon3.1.jpg`, name: 'Neon Light' }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <ProductItem
            product={{ image: `${NEON_FOLDER_PATH}/neon4.1.jpg`, name: 'Neon Light' }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
