import {
  Box,
  Container,
  Grid,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';

import {
  IcBaselineMarkEmailUnread,
  IcBaselinePunchClock,
  IcOutlineTiktok,
  IcRoundAddLocationAlt,
  IcRoundPhoneInTalk,
  MdiYoutube,
  RiFacebookFill,
  SimpleIconsZalo,
} from '../assets/icons';
import { ContactCard, ImageWithFloatVerticalCard } from '../components';
import { black, grey, red } from '../constants';
import {
  GridCenterVertical,
  LinkCustom,
  MulishTypo,
  MulishTypoHeadingTitle,
  ShadowBox,
  textHoverStyle,
} from '../styled';

export const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const itemRef = useRef(null || 1);
  const [itemHeight, setItemHeight] = useState(itemRef.current.clientHeight);
  const contactInfo = [
    {
      name: 'Địa chỉ',
      icon: <IcRoundAddLocationAlt color={red['300']} fontSize={24} />,
      info: '109/14/30 Trương Phước Phan, Bình Trị Đông, Bình Tân, Tp Hồ Chí Minh ',
    },
    {
      name: 'Hotline',
      icon: <IcRoundPhoneInTalk color={red['300']} fontSize={24} />,
      // info: [0908598104, 0908598104],
      info: { 1: '0908598104', 2: '0901773236' },
    },
    {
      name: 'Email',
      icon: <IcBaselineMarkEmailUnread color={red['300']} fontSize={24} />,
      info: 'quangcao88@gmail.com',
    },
    {
      name: 'Thời gian làm việc',
      icon: <IcBaselinePunchClock color={red['300']} fontSize={24} />,
      info: 'từ 9h đến 18h hàng ngày.',
    },
  ];

  const connectInfo = [
    {
      name: 'Facebook',
      icon: <RiFacebookFill color={red['300']} fontSize={24} />,
      info: 'https://facebook.com',
    },
    {
      name: 'Zalo',
      icon: <SimpleIconsZalo color={red['300']} fontSize={24} />,
      info: 'http://zaloapp.com/qr/p/n13u4feblcni',
    },
    {
      name: 'Tiktok',
      icon: <IcOutlineTiktok color={red['300']} fontSize={24} />,
      info: 'https://facebook.com',
    },
    {
      name: 'Youtube',
      icon: <MdiYoutube color={red['300']} fontSize={24} />,
      info: 'https://facebook.com',
    },
  ];

  useEffect(() => {
    setItemHeight(itemRef.current.clientHeight);
  }, [itemRef.current.clientHeight]);
  const testImage =
    'https://templatekit.jegtheme.com/adsboard/wp-content/uploads/sites/222/2021/12/portrait-of-smiling-business-team-working-in-modern-office-together-e1640485294113.jpg';
  return (
    <Box my={16}>
      <ImageWithFloatVerticalCard image={testImage}>
        <Box>
          <MulishTypoHeadingTitle mb={2}>Liên hệ</MulishTypoHeadingTitle>
          <MulishTypo sx={{ fontSize: 14, color: black['200'], fontWeight: 400 }}>
            Liên hệ với chúng tôi
          </MulishTypo>
        </Box>
      </ImageWithFloatVerticalCard>

      <Container sx={{ marginY: 14 }}>
        <Grid container>
          <Grid item xs={12} sm={4} ref={itemRef}>
            <ContactCard
              backgroundColor={grey['500']}
              title="Thông tin"
              boxShadow="none !important"
            >
              <Stack spacing={2}>
                {contactInfo.map((info, index) => (
                  <Grid container key={index}>
                    <GridCenterVertical
                      sx={!index && { position: 'relative', top: -15 }}
                      item
                      xs={2}
                    >
                      {info.icon}
                    </GridCenterVertical>
                    <Grid item xs={10}>
                      {typeof info.info === 'string' ? (
                        <ContactDescriptionTypo>{info.info}</ContactDescriptionTypo>
                      ) : (
                        Object.values(info.info).map((value, index) => (
                          <ContactDescriptionTypo key={index}>
                            {value}
                          </ContactDescriptionTypo>
                        ))
                      )}
                    </Grid>
                  </Grid>
                ))}
              </Stack>
            </ContactCard>
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
            sx={{ height: { xs: 'auto', sm: itemHeight - 20 - 64 || 287 } }}
          >
            <ContactCard title="Kết nối" height={{ xs: 'auto', sm: '100% !important' }}>
              <Box>
                <ContactDescriptionTypo mb={4}>
                  Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod
                  tempor incididunt utlabore.
                </ContactDescriptionTypo>
                <Grid container columnSpacing={2} rowSpacing={3}>
                  {connectInfo.map((connect, index) => (
                    <Grid item key={index} xs={6}>
                      <Stack direction="row" alignItems="flex-start">
                        {connect.icon}
                        <LinkCustom href={connect.info} style={{ marginLeft: 8 }}>
                          <ContactDescriptionTypo sx={{ ...textHoverStyle }}>
                            {connect.name}
                          </ContactDescriptionTypo>
                        </LinkCustom>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </ContactCard>
          </Grid>

          <Grid item xs={12} sm={4}>
            <iframe
              title="quang-cao-88"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.604277549526!2d106.61105451539665!3d10.764950292329328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c3bb962adc7%3A0x571f93f5e0dc81cf!2zMTA5IFRyxrDGoW5nIFBoxrDhu5tjIFBoYW4sIELDrG5oIFRy4buLIMSQw7RuZywgQsOsbmggVMOibiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1676997595600!5m2!1svi!2s"
              width="100%"
              height={371 - 20}
              style={{ border: 0, margin: isMobile ? 0 : 10, boxSizing: 'border-box' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const ContactDescriptionTypo = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 400,
  color: black['200'],
  fontFamily: 'Mulish',

  [theme.breakpoints.down('sm')]: {
    fontSize: 14,
  },
}));
