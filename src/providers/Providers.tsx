import { FC } from 'react';
import NewsContextProvider from './context';
import Theme from './theme';
import { ProvidersProps } from './types';
const GlobalProviders: FC<ProvidersProps> = ({ children }) => {
  return (
    <Theme>
      <NewsContextProvider>{children}</NewsContextProvider>
    </Theme>
  );
};

export default GlobalProviders;
