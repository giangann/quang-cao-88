import { Container, Grid } from '@mui/material';

import { BoxWithTileSubtitleDescription } from '../components';
import { FontPreview } from './FontPreview';
import { FontTable } from './FontTable';

export const CustomizedProductFont = () => {
  return (
    <Container>
      <BoxWithTileSubtitleDescription
        marginY={12}
        title="Bảng chọn font chữ"
        subTitle="Thử các mẫu đề xuất"
        justifyContent="center"
        alignItems="center"
      />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FontPreview />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FontTable />
        </Grid>
      </Grid>
    </Container>
  );
};
