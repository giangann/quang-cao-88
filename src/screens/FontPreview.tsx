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
  const bgImagePath = 'src/assets/images/bgImageWithGridAndWaterMark.jpg';

  useEffect(() => {
    setPreview({
      ...preview,
      size: isMobile ? 50 : preview.size,
    });
  }, []);
  return (
    <Box
      sx={{
        background: `url(${bgImagePath})`,
        height: { xs: 450, sm: 750 },
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
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
