import AddSection from '../AddSection';
import { Box } from '@mui/material';
import NewsTabs from '../NewsTabs';
import { NewsContext } from '@/providers/context/NewsContextProvider';
import { useContext } from 'react';
import NewsList from '../NewsList';

const DiscoverNews = () => {
  const { searchString } = useContext(NewsContext);
  return (
    <Box sx={{ padding: '30px 16px', height: 'calc(100vh - 150px)' }}>
      <AddSection />
      {!searchString && <NewsTabs />}
      {searchString && <NewsList query={searchString} />}
    </Box>
  );
};

export default DiscoverNews;
