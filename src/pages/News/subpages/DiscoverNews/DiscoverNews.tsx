import SearchNews from '../../components/SearchNews';
import { Box } from '@mui/material';
import NewsTabs from '../../components/NewsTabs';
import { NewsContext } from '@/providers/context/NewsContextProvider';
import { useContext } from 'react';
import NewsList from '../../components/NewsList';

const DiscoverNews = () => {
  const { searchString } = useContext(NewsContext);
  return (
    <Box sx={{ padding: '30px 16px', height: 'calc(100vh - 150px)' }}>
      <SearchNews />
      {!searchString && <NewsTabs />}
      {searchString && <NewsList query={searchString} />}
    </Box>
  );
};

export default DiscoverNews;
