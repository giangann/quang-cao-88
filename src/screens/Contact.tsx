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
  const contactInfo = [
    {
      name: 'Địa chỉ',
      icon: <IcRoundAddLocationAlt color={red['300']} fontSize={24} />,
      info: '64/1 Liên Khu 1-6, Khu 1-6, Khu Phố 1, Bình Trị Đông, Bình Tân',
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
      info: 'quangcaoosiris@gmail.com',
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
      info: 'https://www.facebook.com/Ledneonsign88',
    },
    {
      name: 'Zalo',
      icon: <SimpleIconsZalo color={red['300']} fontSize={24} />,
      info: 'http://zaloapp.com/qr/p/n13u4feblcni',
    },
    {
      name: 'Tiktok',
      icon: <IcOutlineTiktok color={red['300']} fontSize={24} />,
      info: 'https://www.tiktok.com/@quang_cao_88?_t=8bB2K6HHodG&_r=1',
    },
    {
      name: 'Youtube',
      icon: <MdiYoutube color={red['300']} fontSize={24} />,
      info: 'https://facebook.com',
    },
  ];

  const testImage =
    'https://templatekit.jegtheme.com/adsboard/wp-content/uploads/sites/222/2021/12/portrait-of-smiling-business-team-working-in-modern-office-together-e1640485294113.jpg';
  return (
    <Box mt={16} mb={{ xs: 0, sm: 16 }} id="contact-section">
      <ImageWithFloatVerticalCard image={testImage}>
        <Box>
          <MulishTypoHeadingTitle mb={2}>Liên hệ</MulishTypoHeadingTitle>
          <MulishTypo sx={{ fontSize: 14, color: black['200'], fontWeight: 400 }}>
            Liên hệ với chúng tôi
          </MulishTypo>
        </Box>
      </ImageWithFloatVerticalCard>

      <Container sx={{ marginY: { xs: 7, sm: 14 } }}>
        <Grid container rowSpacing={3}>
          <Grid item xs={12} sm={4}>
            <ContactCard
              backgroundColor={grey['600']}
              title="Thông tin"
              boxShadow="none !important"
            >
              <Stack spacing={2}>
                {contactInfo.map((info, index) => (
                  <Grid container key={index}>
                    <GridCenterVertical
                      sx={!index ? { position: 'relative', top: -15 } : {}}
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

          <Grid item xs={12} sm={4}>
            <ContactCard
              title="Kết nối"
              height={isMobile ? 'auto' : 351}
              boxSizing="border-box"
            >
              <Box>
                <ContactDescriptionTypo mb={4}>
                  Quảng cáo Osiris nhận tư vấn, thiết kế, thi công biển quảng cáo. Mặt
                  dựng alu, bảng hiệu, bảng led, led neon,...
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
              title="quang-cao-osiris"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4532.45830192303!2d107.70555227535027!3d10.993505378419846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c15e468842f%3A0xbc3084ea34471ebd!2zROG7i2NoIFbhu6UgTmjDoCDEkOG6pXQgNjRCIExpw6puIEtodSAxLTY!5e0!3m2!1svi!2s!4v1739012855054!5m2!1svi!2s"
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
