import { ThemeOptions } from '@mui/material';

import { colors } from './colors';

const typography: ThemeOptions['typography'] = {
  fontFamily: ['Open Sans', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(
    ','
  ),
  h1: {
    fontSize: '1.5rem',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  h2: {
    fontSize: '1.5rem',
    fontWeight: 600,
  },
  h3: {
    fontSize: '1.25rem',
  },
  h4: {
    fontSize: '1.25rem',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  h5: {
    fontSize: '1rem',
    fontWeight: 600,
  },
  h6: {
    fontsize: '1rem',
    fontWeight: 400,
  },
  subtitle1: {
    fontSize: '0.92rem',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  subtitle2: {
    fontWeight: 400,
    textTransform: 'uppercase',
  },
  body1: {
    fontWeight: 400,
    fontSize: '1rem',
  },
  body2: {
    fontSize: '12px',
    lineHeight: '16px',
    color: colors.aliceBlue,
    fontWeight: 400,
  },
};

export default typography;
