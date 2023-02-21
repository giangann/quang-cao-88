import { Box } from '@mui/material';

import { BoxWithParallaxBgImage } from '../components';
import { Banner } from './Banner';
import { Contact } from './Contact';
import { CustomizedProductFont } from './CustomizedProductFont';
import { Header } from './Header';
import { HotProduct } from './HotProduct';
import { Reason } from './Reason';

export const Home = () => {
  const parallaxImgPath = '/logo.jpg';
  return (
    <Box>
      <Header />
      <Banner />
      <HotProduct />
      <BoxWithParallaxBgImage imgPath={parallaxImgPath} />
      <CustomizedProductFont />
      <Reason />
      <Contact />
      <BoxWithParallaxBgImage imgPath={parallaxImgPath} />
    </Box>
  );
};
