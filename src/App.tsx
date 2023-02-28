import './App.css';

import { useEffect } from 'react';

import { Home } from './screens';

function App() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = './src/components/carousel3d/index.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <Home />;
}

export default App;
