// Quangcao88
// Về chúng tối
// 'Quangcao88 chuyên thiết kế, thi công biển hiệu quảng cáo cho các cơ sở kinh doanh, cửa hàng, đại lý,... với kho mẫu mã đa dạng, giá cả hợp lý và độ tin cậy cao'
// Đến với chúng tôi
// 'Bạn muốn thiết kế bảng hiệu cho cơ sở kinh doanh?',
// 'Bạn muốn setup quán Cafe để khởi nghiệp?',
// 'Hay đơn giản là cần tìm một đơn vị thiết kế bảng hiệu uy tín, chất lượng?',
// Một biển hiệu quảng cáo hiệu quả giúp truyền tải thông tin, hình ảnh, slogan hay hình ảnh sản phẩm của công ty tốt hơn rất nhiều so với những mảng quảng cáo khác. Giúp tiếp cận được một lượng lớn khách hàng tiềm năng, những người có khi chỉ nhìn thấy hình ảnh quảng cáo của bạn; đã cảm thấy ấn tượng và họ tìm mua
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {
  Box,
  Container,
  Grid,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import {
  FluentScanThumbUp20Regular,
  IcBaselineLockClock,
  IcBaselinePunchClock,
  MdiClockEditOutline,
  MdiHeadLightbulbOutline,
} from '../assets/icons';
import {
  AboutCard,
  BoxWithTileSubtitleDescription,
  MulishFontCardDescription,
} from '../components';
import { black, grey } from '../constants';
const desc =
  'Một biển hiệu quảng cáo hiệu quả giúp truyền tải thông tin, hình ảnh, slogan hay hình ảnh sản phẩm của công ty tốt hơn rất nhiều so với những mảng quảng cáo khác. Giúp tiếp cận được một lượng lớn khách hàng tiềm năng, những người có khi chỉ nhìn thấy hình ảnh quảng cáo của bạn; đã cảm thấy ấn tượng và họ tìm mua';
const about =
  'Quangcao88 chuyên thiết kế, thi công biển hiệu quảng cáo cho các cơ sở kinh doanh, cửa hàng, đại lý,... với kho mẫu mã đa dạng, giá cả hợp lý và độ tin cậy cao';
export const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const adsIntroduce = [
    {
      bgColor: grey['500'],
      title: 'Cơ sở kinh doanh',
      description: 'Bạn muốn thiết kế bảng hiệu cho cơ sở kinh doanh?',
      icon: (
        <MdiClockEditOutline
          style={{ transform: isMobile ? 'scale(1.5)' : 'scale(2)', opacity: 0.5 }}
        />
      ),
    },
    {
      bgColor: grey['600'],
      title: 'Quán cafe',
      description: 'Bạn muốn setup quán Cafe để khởi nghiệp?',
      icon: (
        <FluentScanThumbUp20Regular
          style={{
            transform: isMobile ? 'scale(1.5)' : 'scale(2.2)',
            opacity: 0.5,
          }}
        />
      ),
    },
    {
      bgColor: grey['700'],
      title: 'Đại lý',
      description:
        'Hay đơn giản là cần tìm một đơn vị thiết kế bảng hiệu uy tín, chất lượng?',
      icon: (
        <MdiHeadLightbulbOutline
          style={{
            transform: isMobile ? 'scale(1.5)' : 'scale(2)',
            opacity: 0.5,
          }}
        />
      ),
    },
  ];
  return (
    <Container sx={{ my: 16 }}>
      {/* title + intro block */}
      <Grid container mb={4}>
        <Grid item xs={12} sm={6}>
          <BoxWithTileSubtitleDescription
            title="BẠN CÓ NHU CẦU?"
            subTitle="ĐẾN VỚI CHÚNG TÔI"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <MulishFontIntroTitle mb={1}>
              Tầm quan trọng của biển hiệu quảng cáo
            </MulishFontIntroTitle>
            <MulishFontCardDescription sx={{ fontStyle: 'italic' }}>
              Một biển hiệu quảng cáo hiệu quả giúp truyền tải thông tin, hình ảnh, slogan
              hay hình ảnh sản phẩm của công ty tốt hơn rất nhiều so với những mảng quảng
              cáo khác. Giúp tiếp cận được một lượng lớn khách hàng tiềm năng, những người
              có khi chỉ nhìn thấy hình ảnh quảng cáo của bạn; đã cảm thấy ấn tượng và họ
              tìm mua
            </MulishFontCardDescription>
          </Box>
        </Grid>
      </Grid>

      {/* 3 cards block */}
      <Grid container rowSpacing={2.5}>
        {adsIntroduce.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <AboutCard
              sx={{ backgroundColor: item.bgColor }}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const MulishFontIntroTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Mulish',
  fontSize: 19,
  color: black['200'],
  fontWeight: 900,
  [theme.breakpoints.down('sm')]: {},
}));
