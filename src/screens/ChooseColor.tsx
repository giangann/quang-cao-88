import { Box, Grid, IconButton, Typography } from '@mui/material';
import { useAtom } from 'jotai';

import { MaterialSymbolsLightbulbOutlineRounded } from '../assets/icons';
import {
  grey,
  listColorAndColorName,
  listFont,
  listFontColor,
  PREVIEW_COLOR_FOLDER_PATH,
} from '../constants';
import { previewAtom } from '../libs/atoms';
import { GridCenter, MulishTypo, textHoverStyle } from '../styled';
export const ChooseColor = () => {
  const [preview, setPreview] = useAtom(previewAtom);

  const handleChangePreviewColor = (newColor: string) => {
    setPreview({
      ...preview,
      color: newColor,
    });
  };

  return (
    <Box>
      <Grid container columnSpacing={1} rowSpacing={2}>
        {listColorAndColorName.map((color, index) => (
          <GridCenter key={index} item xs={3}>
            <div
              style={{ cursor: 'pointer' }}
              onKeyDown={() => handleChangePreviewColor(color.slug)}
              onClick={() => handleChangePreviewColor(color.slug)}
              // role="button"
              aria-hidden="true"
            >
              <MaterialSymbolsLightbulbOutlineRounded
                fontSize={24}
                className={`icon-${color.slug}`}
              />
              <MulishTypo>{color.name}</MulishTypo>
            </div>
          </GridCenter>
        ))}
      </Grid>
      <Box
        sx={{
          backgroundColor: grey['700'],
          borderRadius: 2,
          mt: 2,
          p: 1.5,
          boxSizing: 'border-box',
        }}
      >
        <MulishTypo mb={2} fontWeight={700} fontSize="1rem">
          Hình ảnh thực tế
        </MulishTypo>
        <Box
          sx={{
            height: 160,
            background: `url(${PREVIEW_COLOR_FOLDER_PATH}/${preview.color}.jpg)`,
          }}
        />
      </Box>
    </Box>
  );
};
