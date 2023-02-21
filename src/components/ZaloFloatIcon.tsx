import '../styled/style.css';

import { Box, useMediaQuery, useTheme } from '@mui/material';

import { ZaloLiveIconPath } from '../assets/icons';

export const ZaloFloatIcon = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className="zalo-fix">
      <div className="rotate"></div>
      <a
        className="zalo_btn"
        href="https://zalo.me/0901773236"
        target="_blank"
        title="Liên hệ qua Zalo"
        rel="noreferrer"
      >
        <img
          src="//bizweb.dktcdn.net/100/468/541/themes/882827/assets/zalo_icon.png?1667840231206"
          alt="Liên hệ qua Zalo"
          width="50"
        />
      </a>
    </div>
  );
};
