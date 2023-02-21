import { Box, Button, Grid, styled, Typography } from '@mui/material';

import { black, red } from '../constants';

export const LayerBox = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

export const LatoTypo = styled(Typography)({
  fontFamily: 'Lato',
});

export const MulishTypo = styled(Typography)({
  fontFamily: 'Mulish',
});

export const MulishTypoHeadingTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Mulish',
  fontSize: 40,
  fontWeight: 900,
  lineHeight: '1.2em',
  letterSpacing: 0,
  textTransform: 'uppercase',

  [theme.breakpoints.down('sm')]: {
    fontSize: 32,
  },
}));

// export const OrangeContainedBtn = styled(Button)({
//   borderRadius: 0,
//   color: 'white',
//   backgroundColor: orange['400'],
//   border: `1px solid ${orange['400']}`,

//   '&:hover': {
//     color: orange['400'],
//     backgroundColor: 'transparent',
//     transition: '1s',
//   },
// });

export const WhiteOutlinedBtn = styled(Button)({
  borderRadius: 0,
  border: `1px solid white`,
  color: 'white',
  backgroundColor: 'transparent',
  '&:hover': {
    color: black['900'],
    backgroundColor: 'white',
    transition: '1s',
  },
});

export const BlackOutlinedBtn = styled(Button)({
  borderRadius: 0,
  border: `1px solid black`,
  color: 'black',
  backgroundColor: 'transparent',
  '&:hover': {
    color: black['900'],
    backgroundColor: red['300'],
    transition: '1s',
  },
});

export const ShadowBox = styled(Box)({
  margin: '10px',
  boxShadow: '0px 0px 10px 0px rgb(79 79 79 / 10%)',
  transition: 'background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s',
});

export const LinkCustom = styled('a')({
  textDecoration: 'none',
});
export const GridCenterVertical = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
});

export const GridCenterHorizontal = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
});

export const GridCenter = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const textHoverStyle = {
  cursor: 'pointer',

  '&:hover': {
    color: red['300'],
    transition: '0.3s',
  },
};

export const centerDiv = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
