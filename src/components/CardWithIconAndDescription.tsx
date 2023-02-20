import { Box, BoxProps, Stack } from '@mui/material';
import { MdiLightFactory } from '../assets/icons';
import { black, red } from '../constants';
import { LatoTypo, MulishTypo } from '../styled';

type CardWithIconAndDescriptionProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
};
export const CardWithIconAndDescription = (
  props: CardWithIconAndDescriptionProps & BoxProps,
) => {
  const { icon, title, description , ...boxProps} = props;
  return (
    <Box sx={{ border: `1px solid ${black['100']}`, p: 6, pt: 7, ...boxProps }}>
      <Stack spacing={2}>
        {icon}
        <LatoTypo sx={{ fontSize: 28, fontWeight: 600, color: 'black' }}>
          {title}
        </LatoTypo>
        <MulishTypo sx={{ color: 'black', fontSize: 16, fontWeight: 400 }}>
          {description}
        </MulishTypo>
      </Stack>
    </Box>
  );
};
