import { Box } from '@mui/material';
import { useAtom } from 'jotai';
import { SketchPicker } from 'react-color';

import { previewAtom } from '../libs/atoms';
import { MulishTypo } from '../styled';

export const ChooseBackgroundPreview = () => {
  const [preview, setPreview] = useAtom(previewAtom);

  const handleChangeBackgroundPreview = (color: any) => {
    setPreview({
      ...preview,
      backgroundViewColor: color.hex,
    });
  };
  return (
    <Box mt={3}>
      <MulishTypo sx={{fontWeight:700}}>{`Thay đổi màu nền của bảng`}</MulishTypo>
      <SketchPicker
        color={preview.backgroundViewColor}
        onChangeComplete={handleChangeBackgroundPreview}
      />
    </Box>
  );
};
