import { Stack, useMediaQuery, useTheme } from '@mui/material';

import { black, DEFAULT_PRODUCT_DESCRIPTION, red, ZALO_LINK } from '../constants';
import { LatoTypo, LinkCustom, MulishTypo } from '../styled';

type ProductType = {
  image: string;
  price?: string | number;
  name: string;
  description?: string;
};
export const ProductItem = (props: { product: ProductType }) => {
  const { product } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Stack spacing={1}>
      <img
        src={product.image}
        alt="product"
        style={{
          width: '100%',
          maxWidth: '100%',
          height: isMobile ? 120 : 200,
          objectFit: 'cover',
        }}
      />
      <LinkCustom href={product.price ? '' : ZALO_LINK} target="_blank">
        <MulishTypo sx={{ fontSize: 16, color: red['300'], fontWeight: 400 }}>
          {product.price || 'Liên hệ'}
        </MulishTypo>
      </LinkCustom>
      <LatoTypo sx={{ color: black['900'], fontWeight: 600, fontSize: 26 }}>
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
          {product.description || DEFAULT_PRODUCT_DESCRIPTION}
        </MulishTypo>
      )}
    </Stack>
  );
};
