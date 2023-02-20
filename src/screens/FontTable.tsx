import '../App.css';

import { Box, Container, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';

import { listFont } from '../constants';
import { ChooseColor } from './ChooseColor';
import { ChooseFont } from './ChooseFont';
import { ChooseFontSize } from './ChooseFontSize';
import { FontPreviewProps } from './FontPreview';
import { TypeText } from './TypeText';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const FontTable = () => {
  // first, have 3 tabs Type text, Choose font, Choose color, size
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Nhập chữ" {...a11yProps(0)} />
          <Tab label="Chọn font" {...a11yProps(1)} />
          <Tab label="Chọn màu" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TypeText />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChooseFont />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ChooseColor />
      </TabPanel>
      <ChooseFontSize />
    </Box>
  );
};
