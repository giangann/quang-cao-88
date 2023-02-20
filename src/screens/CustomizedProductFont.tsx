import { Container, Grid } from '@mui/material';
import { useAtom } from 'jotai';
import { BoxWithTileSubtitleDescription } from '../components';

import { previewAtom } from '../libs/atoms';
import { FontPreview } from './FontPreview';
import { FontTable } from './FontTable';

export const CustomizedProductFont = () => {
  return (
    <Container>
      <BoxWithTileSubtitleDescription
        marginBottom={5}
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
