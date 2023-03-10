import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';
import { borderColor } from '@mui/system';

import { black } from '../constants';
import { centerDiv, LayerBox, MulishTypo } from '../styled';

type GridViewForPreviewProps = {
  backgroundColor: string;
  borderColor: string;
  children: React.ReactElement;
} & React.CSSProperties;
export const GridViewForPreview = (props: GridViewForPreviewProps) => {
  const { backgroundColor, borderColor, children, ...extraProps } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const numberOfRows = isMobile ? 14 : 12;
  const numberOfColumns = isMobile ? 16 : 16;

  const gridTable = [];
  for (let i = 0; i < numberOfRows; i++) {
    gridTable.push(
      <GridRow
        rowIndex={i}
        numberOfCols={numberOfColumns}
        numberOfRows={numberOfRows}
        borderColor={borderColor}
      />,
    );
  }
  return (
    <Box
      sx={{
        backgroundColor: backgroundColor,
        p: { xs: '24px 8px 24px 28px', sm: '48px 16px 18px 56px' },
        position: 'relative',
      }}
    >
      {gridTable}
      <LayerBox sx={{ ...centerDiv }}>{children}</LayerBox>
    </Box>
  );
};

const GridRow = (props: {
  rowIndex: number;
  numberOfCols: number;
  numberOfRows: number;
  borderColor: string;
}) => {
  const { rowIndex, numberOfCols, borderColor, numberOfRows } = props;
  const gridRow = [];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  for (let colIndex = 0; colIndex < numberOfCols; colIndex++) {
    gridRow.push(
      <Box
        sx={{
          opacity: 0.8,
          position: !rowIndex || !colIndex ? 'relative' : 'static',
          width: { xs: 20, sm: 140 / 3 },
          height: { xs: 20, sm: 140 / 3 },
          borderTop: rowIndex ? `1px solid ${borderColor}` : 'none',
          borderRight: colIndex < numberOfCols - 1 ? `1px solid ${borderColor}` : 'none',
          borderBottom: rowIndex < numberOfRows - 1 ? `1px solid ${borderColor}` : 'none',
          borderLeft: colIndex ? `1px solid ${borderColor}` : 'none',
        }}
      >
        {(!rowIndex || !colIndex) && rowIndex !== colIndex ? (
          isMobile ? (
            <MulishTypo
              sx={{
                fontSize: 10,
                position: 'absolute',
                top: rowIndex ? '-12.5px' : '-18px',
                left: colIndex ? '-10px' : '-24px',
                color: 'white',
              }}
            >
              {rowIndex ? `${rowIndex * 10}` : `${colIndex * 10}`}
            </MulishTypo>
          ) : (
            <MulishTypo
              sx={{
                fontSize: 14,
                position: 'absolute',
                top: rowIndex ? '-12.5px' : '-25px',
                left: colIndex ? '-25px' : '-50px',
                color: 'white',
              }}
            >
              {rowIndex
                ? `${rowIndex * 10}${isMobile ? '' : ''}`
                : `${colIndex * 10}${isMobile ? '' : ''}`}
            </MulishTypo>
          )
        ) : undefined}
      </Box>,
    );
  }
  return <Stack direction="row">{gridRow}</Stack>;
};
