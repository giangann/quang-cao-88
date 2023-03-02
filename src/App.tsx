import './App.css';

import { useEffect } from 'react';

import { Home } from './screens';
import { useTheme, useMediaQuery } from '@mui/material';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });
  useEffect(() => {
    const script = document.createElement('script');

    script.src = isMobile ? '/carouselMobile.js' : '/index.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <Home />;
}

export default App;
