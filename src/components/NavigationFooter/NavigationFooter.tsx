import { IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NavLinkStyled from '@/shared-styled-components/links';

import { useLocation } from 'react-router-dom';
import { NavLinks } from './NavLinks';

const NavigationFooter = () => {
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          {NavLinks().map(({ path, icon }, key) => (
            <NavLinkStyled link={path} key={key}>
              <IconButton color="inherit" size="large">
                {icon}
              </IconButton>
            </NavLinkStyled>
          ))}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavigationFooter;
