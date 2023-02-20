import { Box, BoxProps, SxProps } from '@mui/material';

import { LayerBox } from '../styled';
type BoxWithBackgroundAndLayerProps = {
  image?: string;
  width?: string | BoxProps;
  height?: string | BoxProps;
  backgroundPosition?: React.CSSProperties;
};
export const BoxWithBackgroundAndLayer = (
  props: BoxWithBackgroundAndLayerProps & { children: React.ReactElement } & BoxProps,
) => {
  const {
    image,
    width,
    height,
    children,
    backgroundPosition = 'center',
    ...layerProps
  } = props;
  return (
    <Box
      position="relative"
      width={width}
      height={height}
      sx={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: backgroundPosition,
        backgroundSize: 'cover',
      }}
    >
      <LayerBox {...layerProps} />
      <LayerBox>{children}</LayerBox>
    </Box>
  );
};
