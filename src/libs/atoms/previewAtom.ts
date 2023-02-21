import { useMediaQuery, useTheme } from '@mui/material';
import { atom } from 'jotai';

const defaultPreviewAtom = {
  text: 'Led Neon sign',
  font: 'Bayview',
  color: 'pink',
  size: 70,
  backgroundViewColor: 'black',
};
const previewAtom = atom(defaultPreviewAtom);

export { defaultPreviewAtom, previewAtom };
