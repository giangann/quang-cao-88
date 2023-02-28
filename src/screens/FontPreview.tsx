import '../App.css';

import { Box, Button, Typography } from '@mui/material';

import { Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';

import { FontPreviewGridBg } from './FontPreviewGridBg';
import { FontPreviewImageBg } from './FontPreviewImageBg';

export type FontPreviewProps = {
  text: string;
  font: string;
  color: string;
  size: number;
};
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

export const FontPreview = () => {
  // bg preview: {xs:343x450, sm:762x750}

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [openCarousel, setOpenCarousel] = useState(true);
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Nền lưới trơn" {...a11yProps(0)} />
          <Tab label="Nền ảnh mẫu" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <FontPreviewGridBg />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FontPreviewImageBg />
      </TabPanel>
    </Box>
  );
};
