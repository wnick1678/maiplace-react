import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterComponent from './router/RouterComponent';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
  );
}

export default App;
