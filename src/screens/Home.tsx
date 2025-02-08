import { Box } from '@mui/material';
import Draggable from 'react-draggable';

import { BoxWithParallaxBgImage, Carousel3dImage, ZaloFloatIcon } from '../components';
import { PhoneFloatIcon } from '../components/PhoneFloatIcon';
import { black, grey } from '../constants';
import { AboutUs } from './AboutUs';
import { Banner } from './Banner';
import { Contact } from './Contact';
import { CustomizedProductFont } from './CustomizedProductFont';
import { Header } from './Header';
import { HotProduct } from './HotProduct';
import { Reason } from './Reason';
import { RecentProduct } from './RecentProduct';

export const Home = () => {
  const parallaxImgPath = '/logo-black.jpg';

  return (
    <Box sx={{ backgroundColor: grey['500'] }}>
      <Header />
      <Banner />
      <HotProduct />
      <RecentProduct />
      <CustomizedProductFont />
      <AboutUs />
      <BoxWithParallaxBgImage imgPath={parallaxImgPath} />
      <Reason />
      <Contact />
      <ZaloFloatIcon />
      <PhoneFloatIcon />
    </Box>
  );
};
