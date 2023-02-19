import './App.css';

import React, { useState } from 'react';

import logo from './logo.svg';
import { Home } from './screens';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Home/>
  );
}

export default App;
