import '../App.css';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useAtom, useAtomValue } from 'jotai';
import { useEffect } from 'react';
import Draggable from 'react-draggable';

import { GridViewForPreview } from '../components';
import { red } from '../constants';
import { previewAtom } from '../libs/atoms';
export const FontPreviewGridBg = () => {
  // bg preview: {xs:343x450, sm:762x750}
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [preview, setPreview] = useAtom(previewAtom);

  useEffect(() => {
    setPreview({
      ...preview,
      size: isMobile ? 50 : preview.size,
    });
  }, []);
  return (
    <GridViewForPreview
      borderColor="#f44d4640"
      backgroundColor={preview.backgroundViewColor}
    >
      <Draggable>
        <Box
          sx={{
            position: 'absolute',
            cursor: 'move',
            zIndex: 10,
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
    </GridViewForPreview>
  );
};
