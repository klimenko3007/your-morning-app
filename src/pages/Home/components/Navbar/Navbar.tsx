import { routes } from '@/routes/constants';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton from '@mui/material/IconButton/IconButton';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Toolbar from '@mui/material/Toolbar';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <AppBar position="sticky" color="primary" sx={{ top: 0, bottom: 'auto' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            ref={anchorRef}
            id="trigger-button"
            onClick={handleToggle}
            aria-controls={open ? 'profile-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
          >
            <MenuIcon />
          </IconButton>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-end"
            disablePortal
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="profile-menu"
                  aria-labelledby="trigger-button"
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Popper>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
