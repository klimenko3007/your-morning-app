import { routes } from '@/routes/constants';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CommuteIcon from '@mui/icons-material/Commute';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewsWidget from './NewsWidget';
import WeatherWidget from './WeatherWidget';
import CommuteWidget from './CommuteWidget';
import GamesWidget from './GamesWidget';
import { WidgetTitles } from '@/pages/News/constants';

export const Widgets = () => [
  {
    path: routes.weather,
    icon: <WbSunnyIcon />,
    header: WidgetTitles.weather,
    component: WeatherWidget,
  },
  {
    path: routes.commute,
    icon: <CommuteIcon />,
    header: WidgetTitles.commute,
    component: CommuteWidget,
  },

  {
    path: routes.mood,
    icon: <SportsEsportsIcon />,
    header: WidgetTitles.games,
    component: GamesWidget,
  },
  {
    path: routes.news,
    icon: <NewspaperIcon />,
    header: WidgetTitles.news,
    component: NewsWidget,
  },
];

export default Widgets;
