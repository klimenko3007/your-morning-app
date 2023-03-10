import { useNewsQuery } from '@/hooks/useNewsQuery';
import { Typography } from '@mui/material';
import Box from '@mui/system/Box';
import { Link } from 'react-router-dom';
import FrontPage from '../../components/FrontPage';
import NewsCarousel from '../../components/NewsCarousel';

const Headlines = () => {
  const { results, isLoading, isError } = useNewsQuery();

  if (isLoading) {
    return <div>LOADING ...</div>;
  }

  if (isError) {
    return <div>Oops, something went wrong ...</div>;
  }

  return (
    <>
      {results && <FrontPage item={results[0]} />}
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
        {results && <NewsCarousel news={results} />}
      </Box>
    </>
  );
};

export default Headlines;
