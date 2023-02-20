import { Container, Grid } from '@mui/material';
import { useAtom } from 'jotai';

import { previewAtom } from '../libs/atoms';
import { FontPreview } from './FontPreview';
import { FontTable } from './FontTable';

export const CustomizedProductFont = () => {
  return (
    <Container>
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
