import { Container, Grid } from '@mui/material';

import { BoxWithTileSubtitleDescription } from '../components';
import { FontPreview } from './FontPreview';
import { FontTable } from './FontTable';

export const CustomizedProductFont = () => {
  return (
    <Container>
      <BoxWithTileSubtitleDescription
        marginY={4}
        mt={12}
        title="Bảng chọn font chữ"
        subTitle="Thử các mẫu đề xuất"
        justifyContent="center"
        alignItems="center"
      />
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <FontPreview />
        </Grid>

        <Grid item xs={12} lg={4}>
          <FontTable />
        </Grid>
      </Grid>
    </Container>
  );
};
