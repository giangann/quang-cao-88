import '../App.css';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useAtom, useAtomValue } from 'jotai';
import { useEffect } from 'react';
import Draggable from 'react-draggable';

import { previewAtom } from '../libs/atoms';

export type FontPreviewProps = {
  text: string;
  font: string;
  color: string;
  size: number;
};
export const FontPreview = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [preview, setPreview] = useAtom(previewAtom);
  const bgImage =
    'https://blogger.googleusercontent.com/img/a/AVvXsEjfvzA2Autc8tHTDO_fudo8YjEsPeKXfb0cqynBmdOulMMBV9wSn5ZEvVxA3M9OPH74VfnnaT4Nw57nIKD3GgzdLLEz3yULxh-tJKqB5Ems0Jqbc-mBauz5pQWt85-Ss5LwIv736Y5DzKp6Aoky2W0PZ1l6-4mJA-QhQn2swsGNcTKI5IYn4VXbyrO3=w640-h640';

  useEffect(() => {
    setPreview({
      ...preview,
      size: isMobile ? 50 : preview.size,
    });
  }, []);
  return (
    <Box
      sx={{ background: `url(${bgImage})`, height: { xs: 450, sm: 750 }, width: '100%' }}
    >
      <Draggable>
        <Box
          sx={{
            position: 'absolute',
            cursor: 'move',
          }}
        >
          <span
            className={`shadow-${preview.color}`}
            style={{
              fontFamily: preview.font,
              color: 'white',
              fontSize: `${preview.size}px`,
            }}
            dangerouslySetInnerHTML={{ __html: preview.text }}
          />
        </Box>
      </Draggable>
    </Box>
  );
};
