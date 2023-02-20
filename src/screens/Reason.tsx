import '../App.css';

import { Box, Container, Grid, Typography } from '@mui/material';

import { MdiLightFactory } from '../assets/icons';
import {
  BoxWithTileSubtitleDescription,
  CardWithIconAndDescription,
} from '../components';
import { red } from '../constants';
import { GridCenterVertical, MulishTypo } from '../styled';

export const Reason = () => {
  // Tư vấn, thiết kế miễn phí
  // Đội thi công chuyên nghiệp
  // Đa dạng mẫu mã
  // Chính sách bảo hành
  // Chất lượng đảm bảo

  const reason = [
    {
      icon: <MdiLightFactory fontSize={56} color={red['300']} />,
      title: 'Tư vấn, thiết kế miễn phí',
      subTitle: 'Biển hiệu quảng cáo',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa ligula eget.',
    },
    {
      icon: <MdiLightFactory fontSize={56} color={red['300']} />,
      title: 'Đội thi công chuyên nghiệp',
      subTitle: 'Biển hiệu quảng cáo',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa ligula eget.',
    },
    {
      icon: <MdiLightFactory fontSize={56} color={red['300']} />,
      title: 'Đa dạng mẫu mã',
      subTitle: 'Biển hiệu quảng cáo',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa ligula eget.',
    },
    {
      icon: <MdiLightFactory fontSize={56} color={red['300']} />,
      title: 'Chính sách bảo hành',
      subTitle: 'Biển hiệu quảng cáo',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa ligula eget.',
    },
    {
      icon: <MdiLightFactory fontSize={56} color={red['300']} />,
      title: 'Chất lượng đảm bảo',
      subTitle: 'Biển hiệu quảng cáo',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa ligula eget.',
    },
  ];
  return (
    <Container sx={{ my: 8 }}>
      {/* <MulishTypo
        sx={{
          fontSize: { xs: 32, sm: 40 },
          fontWeight: 900,
          lineHeight: '1.2em',
          letterSpacing: 0,
          textTransform: 'uppercase',
        }}
      >
        Lý do chọn chúng tôi
      </MulishTypo> */}
      {/* <BoxWithTileSubtitleDescription
        alignItems="center"
        title="Lý do chọn chúng tôi"
        subTitle="Biển hiệu quảng cáo"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa ligula eget."
      /> */}
      <Grid container sx={{ mt: 4 }} spacing={4}>
        <GridCenterVertical item xs={12} sm={4} order={{ xs: 2, sm: 1 }}>
          <Box>
            <CardWithIconAndDescription
              marginBottom={{ xs: 4, sm: 0 }}
              borderBottom={{ sm: 'none !important' }}
              icon={<MdiLightFactory fontSize={56} color={red['300']} />}
              title="Tư vấn, thiết kế miễn phí"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <CardWithIconAndDescription
              icon={<MdiLightFactory fontSize={56} color={red['300']} />}
              title="Đội thi công chuyên nghiệp"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </Box>
        </GridCenterVertical>

        <Grid item xs={12} sm={4} order={{ xs: 1, sm: 2 }}>
          <BoxWithTileSubtitleDescription
            textAlign="center"
            mb={5}
            alignItems="center"
            justifyContent="center"
            title="Lý do chọn chúng tôi"
            subTitle="Biển hiệu quảng cáo"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa ligula eget."
          />
          <CardWithIconAndDescription
            mb={5}
            icon={<MdiLightFactory fontSize={56} color={red['300']} />}
            title="Đa dạng mẫu mã"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <CardWithIconAndDescription
            icon={<MdiLightFactory fontSize={56} color={red['300']} />}
            title="Chính sách bảo hành"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </Grid>
        <GridCenterVertical item xs={12} sm={4} order={3}>
          <Box>
            <CardWithIconAndDescription
              marginBottom={{ xs: 4, sm: 0 }}
              borderBottom={{ sm: 'none !important' }}
              icon={<MdiLightFactory fontSize={56} color={red['300']} />}
              title="Chất lượng đảm bảo"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <CardWithIconAndDescription
              icon={<MdiLightFactory fontSize={56} color={red['300']} />}
              title="Đội thi công chuyên nghiệp"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </Box>
        </GridCenterVertical>
      </Grid>
    </Container>
  );
};
