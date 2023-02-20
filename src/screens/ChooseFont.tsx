import { Grid, Typography } from '@mui/material';
import { useAtom } from 'jotai';

import { listFont } from '../constants';
import { previewAtom } from '../libs/atoms';
import { GridCenter, textHoverStyle } from '../styled';

export const ChooseFont = () => {
  const [preview, setPreview] = useAtom(previewAtom);

  const handleChangePreviewFont = (newFont: string) => {
    setPreview({
      ...preview,
      font: newFont,
    });
  };
  return (
    <Grid container spacing={2}>
      {listFont.map((font, index) => (
        <GridCenter key={index} item xs={3}>
          <div
            onKeyDown={() => handleChangePreviewFont(font)}
            onClick={() => handleChangePreviewFont(font)}
            // role="button"
            aria-hidden="true"
          >
            <Typography sx={{ fontFamily: font, fontSize: 24, ...textHoverStyle }}>
              {font}
            </Typography>
          </div>
        </GridCenter>
      ))}
    </Grid>
  );
};
