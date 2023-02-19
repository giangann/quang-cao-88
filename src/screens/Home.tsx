import { Box, Typography } from '@mui/material';

import { Banner } from './Banner';
import { Header } from './Header';
import { HotProduct } from './HotProduct';

export const Home = () => {
  return (
    <Box>
      <Header />
      <Banner />
      <HotProduct />
    </Box>
  );
};
