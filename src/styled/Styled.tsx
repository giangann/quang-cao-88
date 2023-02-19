import { Box, Button, styled, Typography } from '@mui/material';
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
