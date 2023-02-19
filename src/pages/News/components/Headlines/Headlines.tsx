import { Typography } from '@mui/material';
import Box from '@mui/system/Box';
import { Link } from 'react-router-dom';
import FrontPage from '../FrontPage';
import NewsCarousel from '../NewsCarousel';

const Headlines = () => {
  const url = `https://content.guardianapis.com/search?section=world`;

  return (
    <>
      <FrontPage />
      <Box sx={{ padding: '16px', mb: '15px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: '14px',
          }}
        >
          <Typography variant="h2" component="div">
            Breaking News
          </Typography>
          <Typography
            variant="h3"
            component={Link}
            to="/news/discover"
            sx={{ color: 'inherit', textDecoration: 'none' }}
          >
            More
          </Typography>
        </Box>
        <NewsCarousel />
      </Box>
    </>
  );
};

export default Headlines;
