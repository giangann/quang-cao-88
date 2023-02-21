import { Box, Slider } from '@mui/material';
import { useAtom } from 'jotai';

import { previewAtom } from '../libs/atoms';
import { MulishTypo } from '../styled';

export const ChooseFontSize = () => {
  const [preview, setPreview] = useAtom(previewAtom);

  const handleChangePreviewFontSize = (event: Event, newValue: number | number[]) => {
    setPreview({
      ...preview,
      size: newValue as number,
    });
  };
  return (
    <Box mt={3}>
      <MulishTypo>{`Thay đổi kích thước chữ: ${preview.size}px`}</MulishTypo>
      <Slider
        aria-label="font-size"
        min={10}
        max={140}
        valueLabelDisplay="auto"
        value={preview.size}
        onChange={handleChangePreviewFontSize}
      />
    </Box>
  );
};
