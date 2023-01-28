import { Route, Routes } from 'react-router-dom';
import Health from '../pages/Health';
import Home from '../pages/Home';
import News from '../pages/News';
import Travel from '../pages/Travel';
import Weather from '../pages/Weather';
import { routes } from './constants';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />}></Route>
      <Route path={routes.news} element={<News />}></Route>
      <Route path={routes.health} element={<Health />}></Route>
      <Route path={routes.weather} element={<Weather />}></Route>
      <Route path={routes.travel} element={<Travel />}></Route>
    </Routes>
  );
};

export default AppRoutes;