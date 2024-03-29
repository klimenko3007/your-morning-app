import ChooseGame from '@/pages/Games/ChooseGame';
import Minesweeper from '@/pages/Games/Minesweeper';
import DiscoverNews from '@/pages/News/subpages/DiscoverNews';
import Headlines from '@/pages/News/subpages/Headlines';
import SingleNews from '@/pages/News/subpages/SingleNews';
import { Route, Routes } from 'react-router-dom';
import Games from '../pages/Games';
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
      <Route path={routes.games} element={<Games />}>
        <Route index element={<ChooseGame />}></Route>
        <Route path="minesweeper" element={<Minesweeper />}></Route>
      </Route>
      <Route path={routes.weather} element={<Weather />}></Route>
      <Route path={routes.commute} element={<Travel />}></Route>
    </Routes>
  );
};

export default AppRoutes;
