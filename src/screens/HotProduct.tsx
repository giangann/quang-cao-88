import 'react-alice-carousel/lib/alice-carousel.css';
import '../styled/carousel.css';

import { Box, Container, Stack, useMediaQuery, useTheme } from '@mui/material';
import { Grid } from '@mui/material';
import { Carousel, ScrollingCarousel } from '@trendyol-js/react-carousel';
import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';

import { IcBaselineArrowBackIos, IcBaselineArrowForwardIos } from '../assets/icons';
import {
  black,
  DEFAULT_PRODUCT_DESCRIPTION,
  REAL_PRODUCT_FOLDER_PATH,
  red,
  ZALO_LINK,
} from '../constants';
import {
  BlackOutlinedBtn,
  centerDiv,
  GridCenterVertical,
  LatoTypo,
  LinkCustom,
  MulishTypo,
  RedContainedBtn,
  WhiteOutlinedBtn,
} from '../styled';
import { ProductItem } from './ProductItem';

export const HotProduct = () => {
  // const hotProducts = [
  //   {
  //     name: 'Bán quần áo',
  //     image:
  //       'https://templatekit.jegtheme.com/adsboard/wp-content/uploads/sites/222/2021/12/bryan-lobos-v6Y5j53HmCw-unsplash.jpg',
  //     description: 'Eiusmodte porincididunt ut labor. Suspendisse inmagna inelit.',
  //     price: '10.500.000 VND',
  //   },
  //   {
  //     name: 'Quán ăn',
  //     image:
  //       'https://templatekit.jegtheme.com/adsboard/wp-content/uploads/sites/222/2021/12/matthew-smith-raeh5UIJixs-unsplash-800x1000.jpg',
  //     description: 'Eiusmodte porincididunt ut labor. Suspendisse inmagna inelit.',
  //     price: '15.530.000 VND',
  //   },
  //   {
  //     name: 'Rạp chiếu phim',
  //     image:
  //       'https://templatekit.jegtheme.com/adsboard/wp-content/uploads/sites/222/2021/12/ryunosuke-kikuno-3UDme-mhd3Q-unsplash-800x1000.jpg',
  //     description: 'Eiusmodte porincididunt ut labor. Suspendisse inmagna inelit.',
  //     price: '9.567.000 VND',
  //   },
  // ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const handleDragStart = (e: any) => e.preventDefault();

  const [isViewAll, setIsViewAll] = useState(false);

  const hotProducts = [
    {
      name: 'Hân Hân Store',
      image: `${REAL_PRODUCT_FOLDER_PATH}/product21.jpg`,
      description:
        'Bảng hiệu Alu - Chữ nổi Mica cho cửa hàng quần áo, đồ lưu niệm Hân Hân Store',
      price: 'Liên hệ',
    },
    {
      name: 'KofiKai Coffe',
      image: `${REAL_PRODUCT_FOLDER_PATH}/product2.jpg`,
      description: 'Bảng hiệu Logo - Chữ nổi mica cho quán coffe thuộc hệ thống Kofi Kai',
      price: 'Liên hệ',
    },
    {
      name: 'Quán Cà Phê Tươi',
      image: `${REAL_PRODUCT_FOLDER_PATH}/product3.jpg`,
      description: 'Bảng hiệu nền tôn (Tole) - Chữ nổi mica cho quán Cà Phê Tươi',
      price: 'Liên hệ',
    },
  ];

  const realProducts = [
    {
      image: `product14`,
      name: 'Thú cưng PetWants',
    },
    {
      image: `product2`,
      name: 'Coffe Kofi Kai',
    },
    {
      image: `product3`,
      name: 'Cà phê tươi',
    },
    {
      image: `product4`,
      name: 'Hân Hân Store',
    },
    {
      image: `product8`,
      name: 'Thẩm mỹ viện',
    },
    {
      image: `product9`,
      name: 'Quán Cơm Tấm',
    },
    {
      image: `product11`,
      name: 'Nha khoa Đại Nam',
    },
    {
      image: `product12`,
      name: 'MAIKA Beauty Center',
    },
    {
      image: `product13`,
      name: 'Trung tâm Sáng Tạo Việt',
    },
    {
      image: `product15`,
      name: 'Thẩm mỹ KaiSpa',
    },
    {
      image: `product17`,
      name: 'Thẩm mỹ ANNA',
    },
    {
      image: `product18`,
      name: 'Phòng khám Minh Phúc',
    },
    {
      image: `product19`,
      name: 'Green Beauty',
    },
    {
      image: `product20`,
      name: 'Hoàng Gia SG',
    },
  ];

  const carouselItem = realProducts.map((product, index) => (
    <Stack spacing={1} px={2} key={index}>
      <img
        onDragStart={handleDragStart}
        role="presentation"
        src={`${REAL_PRODUCT_FOLDER_PATH}/${product.image}.jpg`}
        alt="product"
        style={{ maxWidth: '100%', height: isMobile ? 150 : 200, objectFit: 'cover' }}
      />
      <MulishTypo sx={{ fontSize: 16, color: red['300'], fontWeight: 400 }}>
        Liên hệ
      </MulishTypo>
      <MulishTypo
        sx={{ color: black['900'], fontWeight: 500, fontSize: { xs: 16, sm: 20 } }}
      >
        {product.name}
      </MulishTypo>
      {/* {isMobile ? undefined : (
        <MulishTypo
          sx={{
            fontSize: { xs: 14, sm: 16 },
            fontWeight: 400,
            color: black['200'],
          }}
        >
          {DEFAULT_PRODUCT_DESCRIPTION}
        </MulishTypo>
      )} */}
    </Stack>
  ));

  const handleViewAll = async () => {
    setIsViewAll(!isViewAll);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: isViewAll ? { xs: 2000, sm: 800 } : { xs: 1700, sm: 400 },
        width: '100%',
        transition: 'height 1s',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: { xs: 0, sm: '-166px' },
          height: '500px',
          width: '100%',
        }}
        id="hot-product-section"
      >
        <Container
          sx={{ backgroundColor: 'white', pb: { xs: 4, sm: isViewAll ? 12 : 0 } }}
        >
          {/* 3 top product */}
          <Grid container spacing={5} sx={{ px: { xs: 0, sm: 2 } }}>
            <GridCenterVertical item xs={12} sm={3}>
              <Stack spacing={2}>
                <MulishTypo
                  sx={{
                    color: red['300'],
                    letterSpacing: '2px',
                    fontSize: { xs: 15, sm: 17 },
                    fontWeight: 400,
                  }}
                >
                  Biển hiệu quảng cáo
                </MulishTypo>
                <MulishTypo
                  sx={{
                    fontSize: { xs: 36, sm: 48 },
                    fontWeight: 900,
                    lineHeight: '1.2em',
                    letterSpacing: 0,
                    textTransform: 'uppercase',
                  }}
                >
                  Các mẫu nổi bật
                </MulishTypo>
                <MulishTypo
                  sx={{
                    fontSize: { xs: 14, sm: 16 },
                    fontWeight: 400,
                    color: black['500'],
                  }}
                >
                  Danh sách các mẫu nổi bật của Quảng Cáo 88 và hình ảnh kết quả sau quá
                  trình thi công thực tế
                </MulishTypo>
                <BlackOutlinedBtn
                  onClick={() => window.open(ZALO_LINK, '_blank')}
                  sx={{ padding: '18px 35px', width: 200 }}
                >
                  <LatoTypo
                    sx={{
                      textTransform: 'uppercase',
                      fontSize: { xs: 13, sm: 14 },
                      letterSpacing: '3px',
                    }}
                  >
                    Đặt mẫu
                  </LatoTypo>
                </BlackOutlinedBtn>
              </Stack>
            </GridCenterVertical>

            {hotProducts.map((product, index) => (
              <Grid key={index} item xs={12} sm={3}>
                <Stack spacing={1}>
                  <img src={product.image} alt="product" style={{ maxWidth: '100%' }} />
                  <LinkCustom href={ZALO_LINK} target="_blank">
                    <MulishTypo sx={{ fontSize: 16, color: red['300'], fontWeight: 400 }}>
                      {product.price}
                    </MulishTypo>
                  </LinkCustom>
                  <LatoTypo
                    sx={{
                      color: black['500'],
                      fontWeight: 600,
                      fontSize: { xs: 15, sm: 18 },
                    }}
                  >
                    {product.name}
                  </LatoTypo>
                  <MulishTypo
                    sx={{
                      fontSize: { xs: 14, sm: 16 },
                      fontWeight: 400,
                      color: black['500'],
                    }}
                  >
                    {product.description}
                  </MulishTypo>
                </Stack>
              </Grid>
            ))}
          </Grid>

          {/* View all */}
          <Box>
            <Box sx={{ ...centerDiv, mt: 6 }}>
              <RedContainedBtn
                sx={{ padding: '18px 35px', width: 200 }}
                onClick={handleViewAll}
              >
                <LatoTypo
                  sx={{
                    textTransform: 'uppercase',
                    fontSize: { xs: 13, sm: 14 },
                    letterSpacing: '3px',
                  }}
                >
                  Xem tất cả
                </LatoTypo>
              </RedContainedBtn>
            </Box>

            {/* Menu */}
          </Box>

          <Box
            sx={{
              height: isViewAll ? { xs: 250, sm: 300 } : 0,
              width: '100%',
              opacity: isViewAll ? 1 : 0,
              transition: 'all 1s',
              marginTop: 4,
            }}
          >
            {/* <AliceCarousel
              infinite
              mouseTracking
              items={carouselItem}
              responsive={{
                0: {
                  items: 2,
                },
                1024: {
                  items: 4,
                  itemsFit: 'contain',
                },
              }}
            /> */}
            <ScrollingCarousel
              className="scrolling-carousel-example1"
              leftIcon={<button></button>}
              rightIcon={<button></button>}
            >
              {realProducts.map((product, index) => (
                <Stack spacing={1} px={2} key={index}>
                  <img
                    onDragStart={handleDragStart}
                    role="presentation"
                    src={`${REAL_PRODUCT_FOLDER_PATH}/${product.image}.jpg`}
                    alt="product"
                    style={{
                      maxWidth: '100%',
                      height: isMobile ? 150 : 200,
                      objectFit: 'cover',
                    }}
                  />
                  <MulishTypo sx={{ fontSize: 16, color: red['300'], fontWeight: 400 }}>
                    Liên hệ
                  </MulishTypo>
                  <MulishTypo
                    sx={{
                      color: black['900'],
                      fontWeight: 500,
                      fontSize: { xs: 16, sm: 20 },
                    }}
                  >
                    {product.name}
                  </MulishTypo>
                </Stack>
              ))}
            </ScrollingCarousel>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
