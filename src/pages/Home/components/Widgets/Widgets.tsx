import { routes } from '@/routes/constants';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CommuteIcon from '@mui/icons-material/Commute';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Widgets = () => [
  {
    path: routes.weather,
    icon: <WbSunnyIcon />,
    header: 'Weather',
  },
  {
    path: routes.commute,
    icon: <CommuteIcon />,
    header: 'Commute',
  },

  {
    path: routes.mood,
    icon: <FavoriteIcon />,
    header: 'Mood',
  },
  {
    path: routes.news,
    icon: <NewspaperIcon />,
    header: 'News',
  },
];

export default Widgets;
