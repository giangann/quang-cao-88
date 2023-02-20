import { useMediaQuery, useTheme } from '@mui/material';
import { atom } from 'jotai';

const defaultPreviewAtom = {
  text: 'Neon Light',
  font: 'Bayview',
  color: 'pink',
  size: 140,
};
const previewAtom = atom(defaultPreviewAtom);

export { defaultPreviewAtom, previewAtom };
