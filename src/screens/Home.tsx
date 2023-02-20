import { Box, Typography } from '@mui/material';

import { Banner } from './Banner';
import { Header } from './Header';
import { HotProduct } from './HotProduct';
import { Reason } from './Reason';

export const Home = () => {
  return (
    <Box>
      <Header />
      <Banner />
      <HotProduct />
      <Reason />
    </Box>
  );
};
