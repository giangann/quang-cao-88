import { Box, Stack, StackProps, TypographyProps } from '@mui/material';

import { black, red } from '../constants';
import { BlackOutlinedBtn, LatoTypo, MulishTypo } from '../styled';

type BoxWithTileSubtitleDescriptionProps = {
  title: string;
  subTitle: string;
  description?: string;
  extraAction?: string | React.ReactNode;
};
export const BoxWithTileSubtitleDescription = (
  props: BoxWithTileSubtitleDescriptionProps & StackProps & TypographyProps,
) => {
  const { title, subTitle, description, extraAction, ...stackProps } = props;
  return (
    <Box>
      <Stack spacing={2} {...stackProps}>
        <LatoTypo
          sx={{
            color: red['300'],
            letterSpacing: '3px',
            fontSize: { xs: 15, sm: 17 },
            fontWeight: 400,
          }}
        >
          {subTitle}
        </LatoTypo>
        <MulishTypo
          {...stackProps}
          sx={{
            fontSize: { xs: 36, sm: 48 },
            fontWeight: 900,
            lineHeight: '1.2em',
            letterSpacing: 0,
            textTransform: 'uppercase',
          }}
        >
          {title}
        </MulishTypo>
        <MulishTypo
          {...stackProps}
          sx={{
            fontSize: { xs: 14, sm: 16 },
            fontWeight: 400,
            color: black['500'],
          }}
        >
          {description}
        </MulishTypo>
        {typeof extraAction === 'string' ? (
          <BlackOutlinedBtn sx={{ padding: '18px 35px', width: 200 }}>
            <LatoTypo
              sx={{
                textTransform: 'uppercase',
                fontSize: { xs: 13, sm: 14 },
                letterSpacing: '3px',
              }}
            >
              {extraAction}
            </LatoTypo>
          </BlackOutlinedBtn>
        ) : (
          extraAction ?? ''
        )}
      </Stack>
    </Box>
  );
};
