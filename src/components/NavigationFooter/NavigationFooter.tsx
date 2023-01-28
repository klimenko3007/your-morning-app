import { IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '@mui/icons-material/Home';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CommuteIcon from '@mui/icons-material/Commute';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './NavigationFooter.css';
import NavLinkStyled from '@/shared-styled-components/links';
import { routes } from '@/routes/constants';

const NavigationFooter = () => {
  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <NavLinkStyled link={routes.weather}>
            <IconButton color="inherit" size="large">
              <WbSunnyIcon />
            </IconButton>
          </NavLinkStyled>
          <NavLinkStyled link={routes.travel}>
            <IconButton color="inherit" size="large">
              <CommuteIcon />
            </IconButton>
          </NavLinkStyled>
          <NavLinkStyled link={routes.home}>
            <IconButton color="inherit" size="large">
              <HomeIcon />
            </IconButton>
          </NavLinkStyled>
          <NavLinkStyled link={routes.news}>
            <IconButton color="inherit" size="large">
              <NewspaperIcon />
            </IconButton>
          </NavLinkStyled>
          <NavLinkStyled link={routes.health}>
            <IconButton color="inherit" size="large">
              <FavoriteIcon />
            </IconButton>
          </NavLinkStyled>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavigationFooter;
