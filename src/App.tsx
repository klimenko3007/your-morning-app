import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavigationFooter from './components/NavigationFooter';
import AppRoutes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes></AppRoutes>
      <NavigationFooter />
    </BrowserRouter>
  );
};

export default App;
