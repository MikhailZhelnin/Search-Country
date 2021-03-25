import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Countries from './components/Countries/Countries';

import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Countries />
    </div>
  );
}

export default App;
