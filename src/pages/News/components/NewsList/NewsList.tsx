import { Box } from '@mui/material';
import { NewsItem } from '../../constants';
import NewsListItem from '../NewsListItem';
import { useEffect, useState } from 'react';
import useGetFetch from '@/hooks/useGetFetch';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';

type NewsListProp = {
  news: NewsItem[];
};

const NewsList = () => {
  const NEWS_KEY = import.meta.env.VITE_NEWS_KEY;
  const url = `https://content.guardianapis.com/search?show-fields=trailText,thumbnail&api-key=${NEWS_KEY}`;
  const { data, loading, error } = useGetFetch(url);

  const [news, setNews] = useState<NewsItem[] | []>([]);

  useEffect(() => {
    if (data?.response.results) {
      setNews(data.response.results);
      console.log(news);
    }
  }, [data]);

  return (
    <Box>
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
