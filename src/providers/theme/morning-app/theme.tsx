import { createTheme } from '@mui/material';

import components from './components';
import palette from './palette';
import typography from './typography';

const theme = createTheme({
  spacing: 4,
  palette,
  typography,
  components,
});

export default theme;
