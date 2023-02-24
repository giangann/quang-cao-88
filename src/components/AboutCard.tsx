import '../styled/button.css';

import {
  Box,
  BoxProps,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { black, red, ZALO_LINK } from '../constants';
import { LinkCustom } from '../styled';

type AboutCardProps = {
  title: string;
  icon?: React.ReactNode;
  description: string;
} & BoxProps;
export const AboutCard = (props: AboutCardProps) => {
  const { title, icon, description, ...boxProps } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      p={{ xs: '20px 20px 25px', sm: 5 }}
      height="100%"
      boxSizing="border-box"
      {...boxProps}
    >
      <BoxBorderBottom>
        <Stack
          spacing={2}
          direction={{
            xs: 'column-reverse',
            sm: 'row',
          }}
          //   alignItems={{ xs: 'flex-start', sm: 'center' }}
          alignItems="base-line"
          justifyContent="space-between"
        >
          <MulishFontCardTitle>{title}</MulishFontCardTitle>
          <Box sx={isMobile ? {} : { position: 'relative', left: -6, top: 6 }}>
            {icon}
          </Box>
        </Stack>
      </BoxBorderBottom>
      <MulishFontCardDescription sx={{ marginY: { xs: 2, sm: 3 } }}>
        {description}
      </MulishFontCardDescription>
      {/* <LinkCustom href={ZALO_LINK} target="_blank">
        <LatoFontCardAction>Tư vấn ngay</LatoFontCardAction>
      </LinkCustom> */}

      <div className="box-3">
        <div className="btn btn-three">
          <MulishFontCardAction>Tư vấn ngay</MulishFontCardAction>
        </div>
      </div>
    </Box>
  );
};

const MulishFontCardTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Mulish',
  fontSize: 24,
  color: black['900'],
  fontWeight: 800,
  [theme.breakpoints.down('sm')]: {
    fontSize: 20,
  },
}));

const MulishFontCardAction = styled(Typography)(({ theme }) => ({
  fontFamily: 'Mulish',
  fontSize: 14,
  color: black['900'],
  letterSpacing: '2px',
  fontWeight: 900,
  textTransform: 'uppercase',
  [theme.breakpoints.down('sm')]: {
    fontSize: 13,
  },
}));

export const MulishFontCardDescription = styled(Typography)(({ theme }) => ({
  fontFamily: 'Mulish',
  fontSize: 16,
  color: black['500'],
  fontWeight: 400,
  [theme.breakpoints.down('sm')]: {},
}));

const BoxBorderBottom = styled(Box)(({ theme }) => ({
  paddingBottom: '20px',
  borderBottom: `1px solid ${black['100']}`,
  [theme.breakpoints.down('sm')]: {},
}));
