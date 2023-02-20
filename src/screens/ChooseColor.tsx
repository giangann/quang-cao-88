import { Grid, IconButton, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import { MaterialSymbolsLightbulbOutlineRounded } from '../assets/icons';

import { listColorAndColorName, listFont, listFontColor } from '../constants';
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
  );
};
