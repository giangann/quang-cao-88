import { Box, Typography } from '@mui/material';

import { Banner } from './Banner';
import { CustomizedProductFont } from './CustomizedProductFont';
import { FontTable } from './FontTable';
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
      <CustomizedProductFont />
    </Box>
  );
};
