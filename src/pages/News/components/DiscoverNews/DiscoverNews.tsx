import AddSection from '../AddSection';
import NewsList from '../NewsList';
import { Box } from '@mui/material';

const DiscoverNews = () => {
  return (
    <Box sx={{ padding: '30px 16px', height: 'calc(100vh - 150px)' }}>
      <AddSection />
      <NewsList />
    </Box>
  );
};

export default DiscoverNews;
