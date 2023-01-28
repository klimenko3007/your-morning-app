import { ThemeOptions } from '@mui/material';

import { colors } from './colors';

const palette: ThemeOptions['palette'] = {
  primary: {
    main: colors.spaceCadet,
    contrastText: colors.white,
  },
  secondary: {
    main: colors.deepSaffron,
  },
  background: {
    default: colors.antiqueWhite,
    paper: colors.white,
  },
  success: {
    main: colors.celadon,
  },
  error: {
    main: colors.cometRed,
  },
  text: {
    primary: colors.raisinBlack,
    secondary: colors.richBlack,
    disabled: colors.spaceCadet,
  },
  warning: {
    main: colors.deepSaffron,
  },
};

export default palette;
