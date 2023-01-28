import { ThemeProvider } from '@mui/material/styles';
import CssBaseLine from '@mui/material/CssBaseline';
import { ProviderProps } from '../types';
import theme from './morning-app';

const MorningAppThemeProvider = ({ children }: ProviderProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseLine></CssBaseLine>
        {children}
      </ThemeProvider>
    </>
  );
};

export default MorningAppThemeProvider;
