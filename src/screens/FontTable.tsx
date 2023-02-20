import '../App.css';

import { Box, Container, Typography } from '@mui/material';

import { listFont } from '../constants';
import { ChooseFont } from './ChooseFont';
import { FontPreviewProps } from './FontPreview';

export const FontTable = () => {
  // first, have 3 tabs Type text, Choose font, Choose color, size
  return <ChooseFont />;
};
