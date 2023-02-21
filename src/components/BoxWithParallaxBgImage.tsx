import { Box } from '@mui/material';

export const BoxWithParallaxBgImage = (props: { imgPath: string }) => {
  const { imgPath } = props;
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${imgPath})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
      }}
    />
  );
};
