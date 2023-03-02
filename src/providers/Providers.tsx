import { FC } from 'react';
import NewsContextProvider from './context';
import QueryProvider from './query';
import Theme from './theme';
import { ProvidersProps } from './types';
const GlobalProviders: FC<ProvidersProps> = ({ children }) => {
  return (
    <Theme>
      <QueryProvider>
        <NewsContextProvider>{children}</NewsContextProvider>
      </QueryProvider>
    </Theme>
  );
};

export default GlobalProviders;
