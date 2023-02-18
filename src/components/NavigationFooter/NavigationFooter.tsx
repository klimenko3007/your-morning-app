import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import Box from '@mui/system/Box';
import { NavLink, useLocation } from 'react-router-dom';
import { NavLinks } from './NavLinks';

const NavigationFooter = () => {
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  return (
    <>
      <Box
        sx={(theme) => ({
          width: '100%',
          color: theme.palette.primary,
          height: '40px',
          background: theme.palette.primary.main,
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
        })}
      >
        <BottomNavigation
          sx={(theme) => ({
            background: theme.palette.primary.main,
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '0 16px',
          })}
        >
          {NavLinks().map(({ path, icon }, key) => (
            <BottomNavigationAction
              component={NavLink}
              to={path}
              icon={icon}
              key={key}
              sx={(theme) => ({
                color: theme.palette.secondary.main,
                '&.active': {
                  color: theme.palette.secondary.contrastText,
                },
              })}
            />
          ))}
        </BottomNavigation>
      </Box>
    </>
  );
};

export default NavigationFooter;
