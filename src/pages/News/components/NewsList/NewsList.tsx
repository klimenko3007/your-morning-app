import { Box } from '@mui/material';
import { NewsItem } from '../../constants';
import NewsListItem from '../NewsListItem';
import { useEffect, useState } from 'react';
import useGetFetch from '@/hooks/useGetFetch';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';

type NewsListProp = {
  section?: string;
  query?: string;
};

const constructUrl = (section?: string, query?: string) => {
  const NEWS_KEY = import.meta.env.VITE_NEWS_KEY;
  let returnUrl = 'https://content.guardianapis.com/search?show-fields=all';
  returnUrl += section ? `&section=${section}` : '';
  returnUrl += query ? `&q=${query}` : '';
  returnUrl += `&api-key=${NEWS_KEY}`;
  return returnUrl;
};

const NewsList = ({ section, query }: NewsListProp) => {
  const url = constructUrl(section, query);
  const { data, loading, error } = useGetFetch(url);

  const [news, setNews] = useState<NewsItem[] | []>([]);

  useEffect(() => {
    if (data?.response.results) {
      setNews(data.response.results);
    }
  }, [data]);

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        overflow: 'scroll',
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {loading && <CircularProgress color="secondary" />}
      {error && <div>{error}</div>}
      {news.length > 0 &&
        news.map((item: NewsItem) => (
          <NewsListItem item={item} key={item.id} />
        ))}
    </Box>
  );
};

export default NewsList;
