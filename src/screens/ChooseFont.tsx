import '../App.css';

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
    <Grid
      container
      columnSpacing={1}
      rowSpacing={2}
      sx={{ height: 400, overflowY: 'scroll', overFlowX: 'hidden' }}
      className="tableWrap"
    >
      {listFont.map((font, index) => (
        <GridCenter key={index} item xs={3}>
          <div
            onKeyDown={() => handleChangePreviewFont(font)}
            onClick={() => handleChangePreviewFont(font)}
            // role="button"
            aria-hidden="true"
          >
            <Typography sx={{ fontFamily: font, fontSize: 18, ...textHoverStyle }}>
              {font}
            </Typography>
          </div>
        </GridCenter>
      ))}
    </Grid>
  );
};
