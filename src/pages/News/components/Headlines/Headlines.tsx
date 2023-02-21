import { Typography } from '@mui/material';
import Box from '@mui/system/Box';
import { Link } from 'react-router-dom';
import FrontPage from '../FrontPage';
import NewsCarousel from '../NewsCarousel';
import useGetFetch from '@/hooks/useGetFetch';
import { useEffect, useState } from 'react';
import { NewsItem } from '../../constants';

const Headlines = () => {
  const NEWS_KEY = import.meta.env.VITE_NEWS_KEY;
  const url = `https://content.guardianapis.com/search?&show-fields=all&api-key=${NEWS_KEY}`;
  const { data, loading, error } = useGetFetch(url);

  const [news, setNews] = useState<NewsItem[] | []>([]);

  useEffect(() => {
    if (data?.response.results) {
      setNews(data.response.results);
    }
  }, [data]);

  return (
    <>
      <FrontPage item={news[0]} />
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
        <NewsCarousel news={news} />
      </Box>
    </>
  );
};

export default Headlines;
