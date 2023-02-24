import 'react-alice-carousel/lib/alice-carousel.css';

import { Box, Container, Stack, useMediaQuery, useTheme } from '@mui/material';
import { Grid } from '@mui/material';
import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';

import {
  black,
  DEFAULT_PRODUCT_DESCRIPTION,
  REAL_PRODUCT_FOLDER_PATH,
  red,
} from '../constants';
import {
  BlackOutlinedBtn,
  centerDiv,
  GridCenterVertical,
  LatoTypo,
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

  const [isViewAll, setIsViewAll] = useState(false);

  const hotProducts = [
    {
      name: 'Bán quần áo',
      image: `${REAL_PRODUCT_FOLDER_PATH}/product21.jpg`,
      description: 'Eiusmodte porincididunt ut labor. Suspendisse inmagna inelit.',
      price: '10.500.000 VND',
    },
    {
      name: 'Quán ăn',
      image: `${REAL_PRODUCT_FOLDER_PATH}/product2.jpg`,
      description: 'Eiusmodte porincididunt ut labor. Suspendisse inmagna inelit.',
      price: '15.530.000 VND',
    },
    {
      name: 'Rạp chiếu phim',
      image: `${REAL_PRODUCT_FOLDER_PATH}/product3.jpg`,
      description: 'Eiusmodte porincididunt ut labor. Suspendisse inmagna inelit.',
      price: '9.567.000 VND',
    },
  ];

  const carouselItem = [];
  for (let i = 0; i < 23; i++) {
    carouselItem.push(
      <Stack spacing={1} px={2}>
        <img
          src={`${REAL_PRODUCT_FOLDER_PATH}/product${i + 1}.jpg`}
          alt="product"
          style={{ maxWidth: '100%', height: isMobile ? 150 : 200, objectFit: 'cover' }}
        />
        <MulishTypo sx={{ fontSize: 16, color: red['300'], fontWeight: 400 }}>
          Liên hệ
        </MulishTypo>
        <MulishTypo
          sx={{ color: black['900'], fontWeight: 700, fontSize: { xs: 20, sm: 26 } }}
        >
          {`Biển hiệu ${i + 1}`}
        </MulishTypo>
        {isMobile ? undefined : (
          <MulishTypo
            sx={{
              fontSize: { xs: 14, sm: 16 },
              fontWeight: 400,
              color: black['200'],
            }}
          >
            {DEFAULT_PRODUCT_DESCRIPTION}
          </MulishTypo>
        )}
      </Stack>,
    );
  }

  const handleViewAll = async () => {
    setIsViewAll(!isViewAll);
  };

  return (
    <Box
      className="hot-product"
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
      >
        <Container
          sx={{ backgroundColor: 'white', pb: { xs: 4, sm: isViewAll ? 12 : 0 } }}
        >
          {/* 3 top product */}
          <Grid container spacing={5} sx={{ px: { xs: 0, sm: 2 } }}>
            <GridCenterVertical item xs={12} sm={3}>
              <Stack spacing={2}>
                <LatoTypo
                  sx={{
                    color: red['300'],
                    letterSpacing: '3px',
                    fontSize: { xs: 15, sm: 17 },
                    fontWeight: 400,
                  }}
                >
                  Biển hiệu quảng cáo
                </LatoTypo>
                <MulishTypo
                  sx={{
                    fontSize: { xs: 32, sm: 40 },
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
                    color: black['200'],
                  }}
                >
                  Suspendisse in magna in elit hendrerit condimen. Phasellus eu justo mi.
                  Proin aliquet.
                </MulishTypo>
                <BlackOutlinedBtn sx={{ padding: '18px 35px', width: 200 }}>
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
                  <MulishTypo sx={{ fontSize: 16, color: red['300'], fontWeight: 400 }}>
                    {product.price}
                  </MulishTypo>
                  <LatoTypo sx={{ color: black['900'], fontWeight: 600, fontSize: 26 }}>
                    {product.name}
                  </LatoTypo>
                  <MulishTypo
                    sx={{
                      fontSize: { xs: 14, sm: 16 },
                      fontWeight: 400,
                      color: black['200'],
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
              height: isViewAll ? boxHeight : 0,
              width: '100%',
              opacity: isViewAll ? 1 : 0,
              transition: 'all 1s',
              marginTop: 4,
            }}
          >
            <AliceCarousel
              infinite
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
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
