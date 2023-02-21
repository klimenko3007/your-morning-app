import { createContext, useState } from 'react';
import { ProviderProps } from '../types';

export const NewsContext = createContext({
  searchString: '',
  onStringAdded: (v: string) => {},
  onStringRemoved: () => {},
});

const NewsContextProvider = ({ children }: ProviderProps) => {
  const [searchString, setSearchString] = useState('');

  const onStringAdded = (v: string) => {
    console.log('Context', v);
    setSearchString(v);
  };

  const onStringRemoved = () => {
    setSearchString('');
  };

  return (
    <NewsContext.Provider
      value={{ searchString, onStringAdded, onStringRemoved }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContextProvider;
