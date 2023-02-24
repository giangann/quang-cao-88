import {
  Box,
  Grid,
  IconButton,
  Menu,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';

import {
  black,
  DEFAULT_PRODUCT_DESCRIPTION,
  NEON_FOLDER_PATH,
  red,
  ZALO_LINK,
} from '../constants';
import { LatoTypo, LinkCustom, MulishTypo } from '../styled';

type ProductType = {
  image: string | string[];
  price?: string | number;
  name: string;
  description?: string;
};
export const ProductItem = (props: { product: ProductType }) => {
  const { product } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const onCloseMenu = () => {
    setOpenMenu(false);
  };
  return (
    <Stack spacing={{ xs: 0, sm: 1 }}>
      <img
        src={
          typeof product.image === 'object'
            ? `${NEON_FOLDER_PATH}/${product.image[0]}.jpg`
            : `${NEON_FOLDER_PATH}/${product.image}.jpg`
        }
        alt="product"
        style={{
          width: '100%',
          maxWidth: '100%',
          height: isMobile ? 120 : 200,
          objectFit: 'cover',
          marginBottom: isMobile ? 4 : 0,
        }}
      />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <LinkCustom href={product.price ? '' : ZALO_LINK} target="_blank">
          <MulishTypo
            sx={{ fontSize: { xs: 13, sm: 16 }, color: red['300'], fontWeight: 400 }}
          >
            {product.price || 'Liên hệ'}
          </MulishTypo>
        </LinkCustom>

        {typeof product.image === 'object' ? (
          <>
            <IconButton onClick={handleClick} sx={{ paddingY: '0px !important' }}>
              <MulishTypo
                fontSize={{ xs: 13, sm: 14 }}
                sx={{ color: black['900'], fontWeight: 500 }}
              >
                + Xem thêm
              </MulishTypo>
            </IconButton>
            <Menu open={openMenu} onClose={onCloseMenu} anchorEl={anchorEl}>
              <Box p={2}>
                <MulishTypo
                  sx={{
                    fontSize: { xs: 18, sm: 20 },
                    fontWeight: 700,
                    color: black['900'],
                    letterSpacing: 0,
                    mb: 2,
                  }}
                >
                  Hình ảnh tương tự{' '}
                </MulishTypo>
                <Grid container spacing={2} sx={{ width: { xs: 300, sm: 600 } }}>
                  {product.image.map((image, index) => (
                    <Grid item xs={6} key={index}>
                      <img
                        src={`${NEON_FOLDER_PATH}/${image}.jpg`}
                        alt="product"
                        style={{
                          width: '100%',
                          maxWidth: '100%',
                          height: isMobile ? 120 : 200,
                          objectFit: 'cover',
                          boxSizing: 'border-box',
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Menu>
          </>
        ) : undefined}
      </Stack>
      <LatoTypo
        sx={{ color: black['900'], fontWeight: 600, fontSize: { xs: 18, sm: 26 } }}
      >
        {product.name}
      </LatoTypo>
      {isMobile ? undefined : (
        <MulishTypo
          sx={{
            fontSize: { xs: 14, sm: 16 },
            fontWeight: 400,
            color: black['200'],
          }}
        >
          {product.description || ''}
        </MulishTypo>
      )}
    </Stack>
  );
};
