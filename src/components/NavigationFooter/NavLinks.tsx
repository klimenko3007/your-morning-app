import HomeIcon from '@mui/icons-material/Home';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CommuteIcon from '@mui/icons-material/Commute';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { routes } from '@/routes';

export const NavLinks = () => [
  {
    path: routes.weather,
    icon: <WbSunnyIcon />,
  },
  {
    path: routes.commute,
    icon: <CommuteIcon />,
  },
  {
    path: routes.home,
    icon: <HomeIcon />,
  },
  {
    path: routes.news,
    icon: <NewspaperIcon />,
  },
  {
    path: routes.mood,
    icon: <FavoriteIcon />,
  },
];
