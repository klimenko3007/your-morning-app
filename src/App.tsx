import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes';
import NavigationFooter from './components/NavigationFooter';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes></AppRoutes>
      <NavigationFooter />
    </BrowserRouter>
  );
};

export default App;
