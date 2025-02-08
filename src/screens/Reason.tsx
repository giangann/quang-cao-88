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

  // Quảng cáo Osiris là đơn vị thiết kế, thi công biển hiệu quảng cáo uy tín chuyên nghiệp trong phạm vi khu vực Thành phố Hồ Chí Minh.

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
    <Container sx={{ my: 8 }} id="reason-section">
      <Grid container sx={{ mt: 4 }} spacing={4}>
        <GridCenterVertical item xs={12} sm={4} order={{ xs: 2, sm: 1 }}>
          <Box>
            <CardWithIconAndDescription
              marginBottom={{ xs: 4, sm: 0 }}
              borderBottom={{ sm: 'none !important' }}
              icon={<MdiLightFactory fontSize={56} color={red['300']} />}
              title="Tư vấn, thiết kế miễn phí"
              description="Hỗ trợ khách hàng tận tình trong giai đoạn lựa chọn, thiết kế mẫu quảng cáo phù hợp."
            />
            <CardWithIconAndDescription
              icon={<MdiLightFactory fontSize={56} color={red['300']} />}
              title="Đội thi công chuyên nghiệp"
              description="Bám sát thiết kế và đảm bảo chất lượng cùng sự an toàn."
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
            description="Quảng cáo Osiris là đơn vị thiết kế, thi công biển hiệu quảng cáo uy tín chuyên nghiệp trong phạm vi khu vực Thành phố Hồ Chí Minh."
          />
          <CardWithIconAndDescription
            mb={5}
            icon={<MdiLightFactory fontSize={56} color={red['300']} />}
            title="Đa dạng mẫu mã"
            description="Tạo nhiều sự lựa chọn để phục vụ tốt hơn cho nhu cầu từng khách hàng."
          />
          <CardWithIconAndDescription
            icon={<MdiLightFactory fontSize={56} color={red['300']} />}
            title="Chính sách bảo hành"
            description="Đồng hành cùng khách hàng ở giai đoạn sau thi công và đi vào sử dụng."
          />
        </Grid>
        <GridCenterVertical item xs={12} sm={4} order={3}>
          <Box>
            <CardWithIconAndDescription
              marginBottom={{ xs: 4, sm: 0 }}
              borderBottom={{ sm: 'none !important' }}
              icon={<MdiLightFactory fontSize={56} color={red['300']} />}
              title="Chất lượng đảm bảo"
              description=" Luôn đặt chất lượng lên hàng đầu nhằm đem lại giá trị tối ưu cho khách hàng"
            />
            <CardWithIconAndDescription
              icon={<MdiLightFactory fontSize={56} color={red['300']} />}
              title="Hỗ trợ khách hàng tối ưu"
              description="Cam kết hỗ trợ tốt nhất trong khả năng của mình."
            />
          </Box>
        </GridCenterVertical>
      </Grid>
    </Container>
  );
};
