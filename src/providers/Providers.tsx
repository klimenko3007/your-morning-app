import { FC } from 'react';
import Theme from './theme';
import { ProvidersProps } from './types';
const GlobalProviders: FC<ProvidersProps> = ({ children }) => {
  return <Theme>{children}</Theme>;
};

export default GlobalProviders;
