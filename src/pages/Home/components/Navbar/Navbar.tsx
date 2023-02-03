import { routes } from '@/routes/constants';
import NavLinkStyled from '@/shared-styled-components/links/NavLink';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton/IconButton';
import Toolbar from '@mui/material/Toolbar';

const Navbar = () => {
  return (
    <>
      <AppBar position="sticky" color="primary" sx={{ top: 0, bottom: 'auto' }}>
        <Toolbar>
          <NavLinkStyled link={routes.weather}>
            <IconButton color="inherit" size="large">
              Profile
            </IconButton>
          </NavLinkStyled>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
