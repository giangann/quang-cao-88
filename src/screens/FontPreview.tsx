import '../App.css';

import { Box, Typography } from '@mui/material';
import { useAtomValue } from 'jotai';

import { previewAtom } from '../libs/atoms';

export type FontPreviewProps = {
  text: string;
  font: string;
  color: string;
  size: number;
};
export const FontPreview = () => {
  const preview = useAtomValue(previewAtom);
  return (
    <Box sx={{ backgroundColor: 'black' }}>
      <Typography
        className={`shadow-${preview.color}`}
        sx={{ fontFamily: preview.font, color: 'white', fontSize: `${preview.size}px` }}
      >
        {preview.text}
      </Typography>
    </Box>
  );
};
