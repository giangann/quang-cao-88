import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';

import { black, grey } from '../constants';
import { centerDiv, LayerBox, ShadowBox } from '../styled';
import { BoxWithBackgroundAndLayer } from './BoxWithBackgroundAndLayer';

type ImageWithFloatVerticalCardProps = {
  image: string;
  children: React.ReactElement;
};

export const ImageWithFloatVerticalCard = (props: ImageWithFloatVerticalCardProps) => {
  const { image, children } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const testImage =
    'https://templatekit.jegtheme.com/adsboard/wp-content/uploads/sites/222/2021/12/portrait-of-smiling-business-team-working-in-modern-office-together-e1640485294113.jpg';
  return (
    <BoxWithBackgroundAndLayer
      image={testImage}
      sx={{ backgroundColor: 'black', opacity: 0.5 }}
      height={isMobile ? 380 : 480}
      width="100%"
    >
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={3} sx={{ backgroundColor: grey['600'], position: 'relative' }}>
          <LayerBox
            sx={{
              ...centerDiv,
              left: { xs: '16px !important', sm: '100px !important' },
              width: { xs: '285px', sm: '412px' },
            }}
          >
            <ShadowBox
              sx={{
                height: { xs: 170, sm: 180 },
                width: '100%',
                backgroundColor: 'white',
              }}
            >
              <Box p={6}>{children}</Box>
            </ShadowBox>
          </LayerBox>
        </Grid>
      </Grid>
    </BoxWithBackgroundAndLayer>
  );
};
