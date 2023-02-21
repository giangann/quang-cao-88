import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';
import { borderColor } from '@mui/system';
import { black } from '../constants';
import { MulishTypo } from '../styled';

type GridViewForPreviewProps = {
  backgroundColor: string;
  borderColor: string;
} & React.CSSProperties;
export const GridViewForPreview = (props: GridViewForPreviewProps) => {
  const { backgroundColor, borderColor, ...extraProps } = props;

  const numberOfRows = 6;
  const numberOfColumns = 10;

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
    <Box sx={{ backgroundColor: backgroundColor, p: { xs: "24px 8px 24px 28px", sm: 6 } }}>
      {gridTable}
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
          opacity: 0.5,
          position: !rowIndex || !colIndex ? 'relative' : 'static',
          width: { xs: 32, sm: 70 },
          height: { xs: 32, sm: 70 },
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
                fontSize: 12,
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
                ? `${rowIndex * 10}${isMobile ? '' : 'cm'}`
                : `${colIndex * 10}${isMobile ? '' : 'cm'}`}
            </MulishTypo>
          )
        ) : undefined}
      </Box>,
    );
  }
  return <Stack direction="row">{gridRow}</Stack>;
};
