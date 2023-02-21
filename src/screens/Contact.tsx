import { Box } from '@mui/material';
import { ImageWithFloatVerticalCard } from '../components';
import { black } from '../constants';
import { MulishTypo, MulishTypoHeadingTitle } from '../styled';

export const Contact = () => {
  const testImage =
    'https://templatekit.jegtheme.com/adsboard/wp-content/uploads/sites/222/2021/12/portrait-of-smiling-business-team-working-in-modern-office-together-e1640485294113.jpg';
  return (
    <ImageWithFloatVerticalCard image={testImage}>
      <Box>
        <MulishTypoHeadingTitle mb={2}>Liên hệ</MulishTypoHeadingTitle>
        <MulishTypo sx={{ fontSize: 14, color: black['200'], fontWeight: 400 }}>
          Liên hệ với chúng tôi
        </MulishTypo>
      </Box>
    </ImageWithFloatVerticalCard>
  );
};
