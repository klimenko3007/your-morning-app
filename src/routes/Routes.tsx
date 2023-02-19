import DiscoverNews from '@/pages/News/components/DiscoverNews';
import Headlines from '@/pages/News/components/Headlines';
import SingleNews from '@/pages/News/components/SingleNews';
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
      <Route path={routes.news} element={<News />}>
        <Route index element={<Headlines />} />
        <Route path="discover" element={<DiscoverNews />} />
        <Route path=":newsId" element={<SingleNews />} />
      </Route>
      <Route path={routes.mood} element={<Health />}></Route>
      <Route path={routes.weather} element={<Weather />}></Route>
      <Route path={routes.commute} element={<Travel />}></Route>
    </Routes>
  );
};

export default AppRoutes;
