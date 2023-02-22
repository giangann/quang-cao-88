import { Box } from '@mui/material';

import { BoxWithParallaxBgImage, ZaloFloatIcon } from '../components';
import { PhoneFloatIcon } from '../components/PhoneFloatIcon';
import { AboutUs } from './AboutUs';
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
      <AboutUs/>
      <BoxWithParallaxBgImage imgPath={parallaxImgPath} />
      <CustomizedProductFont />
      <Reason />
      <Contact />
      {/* <BoxWithParallaxBgImage imgPath={parallaxImgPath} /> */}
      <ZaloFloatIcon />
      <PhoneFloatIcon />
    </Box>
  );
};
