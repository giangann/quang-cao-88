import { Box } from '@mui/material';

import { BoxWithParallaxBgImage, ZaloFloatIcon } from '../components';
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
  const parallaxImgPath = '/logo.jpg';

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
      {/* <BoxWithParallaxBgImage imgPath={parallaxImgPath} /> */}
      <ZaloFloatIcon />
      <PhoneFloatIcon />
    </Box>
  );
};
