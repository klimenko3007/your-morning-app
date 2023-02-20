import AddSection from '../AddSection';
import { Box } from '@mui/material';
import NewsTabs from '../NewsTabs';

const DiscoverNews = () => {
  return (
    <Box sx={{ padding: '30px 16px', height: 'calc(100vh - 150px)' }}>
      <AddSection />
      <NewsTabs />
    </Box>
  );
};

export default DiscoverNews;
