import { NewsItem } from '@/pages/News/constants';
import { useQuery } from '@tanstack/react-query';

const constructUrl = (section?: string, query?: string) => {
  const NEWS_KEY = import.meta.env.VITE_NEWS_KEY;
  let returnUrl = 'https://content.guardianapis.com/search?show-fields=all';
  returnUrl += section ? `&section=${section}` : '';
  returnUrl += query ? `&q=${query}` : '';
  returnUrl += `&api-key=${NEWS_KEY}`;
  return returnUrl;
};

type Data = {
  response: {
    results: NewsItem[];
  };
};

export const useNewsQuery = (section?: string, query?: string) => {
  const fetchNews = (url: string) => fetch(url).then((r) => r.json());
  const url = constructUrl(section, query);

  const { isLoading, isError, data, error } = useQuery<Data, Error>(
    ['news', { section, query }],
    () => fetchNews(url)
  );

  const results = data?.response?.results;

  return { isLoading, results, error, isError };
};
