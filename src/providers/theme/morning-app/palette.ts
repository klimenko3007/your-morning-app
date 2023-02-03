import { ThemeOptions } from '@mui/material';

import { colors } from './colors';

const palette: ThemeOptions['palette'] = {
  primary: {
    main: colors.windsor,
    dark: colors.deepPurple,
    light: colors.lightPurple,
    contrastText: colors.white,
  },

  secondary: {
    main: colors.persianPink,
    contrastText: colors.aliceBlue,
    light: colors.tapestry,
    dark: colors.barosa,
  },
  background: {
    default: colors.white,
    paper: colors.aliceBlue,
  },
  success: {
    main: colors.morningGlory,
  },
  error: {
    main: colors.darkRed,
  },
  text: {
    primary: colors.deepPurple,
    secondary: colors.windsor,
    disabled: colors.deepPurpleDisabled,
  },
  warning: {
    main: colors.sandyBrown,
  },
};

export default palette;
