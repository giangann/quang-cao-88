import { Box, TextField } from '@mui/material';
import { useAtom } from 'jotai';
import { defaultPreviewAtom, previewAtom } from '../libs/atoms';

export const TypeText = () => {
  const [preview, setPreview] = useAtom(previewAtom);

  const handleChangePreviewText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value.replaceAll('\n', '<br/>');
    setPreview({
      ...preview,
      text: newText === '' ? defaultPreviewAtom.text : newText,
    });
  };
  return (
    <Box>
      <TextField
        fullWidth
        placeholder="Nhập chữ tại đây. Nhập enter để xuống dòng (viết không dấu)"
        multiline
        minRows={4}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleChangePreviewText(event);
        }}
      />
    </Box>
  );
};
