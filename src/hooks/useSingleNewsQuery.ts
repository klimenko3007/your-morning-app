import { useQuery } from '@tanstack/react-query';
import { SingleNews } from '@/pages/News/constants';

export const useSingleNewsQuery = (id?: string) => {
  const fetchNews = (url: string) => fetch(url).then((r) => r.json());
  const url = `https://content.guardianapis.com/${id}?show-fields=all&api-key=${
    import.meta.env.VITE_NEWS_KEY
  }`;

  const { isLoading, isError, data, error } = useQuery({
    enabled: !!id,
    queryKey: ['newsById', id],
    queryFn: () => fetchNews(url),
  });

  const result = data?.response?.content;

  let singleNews: SingleNews | undefined;

  if (result) {
    singleNews = {
      id: result.id,
      body: result.fields.body,
      by: result.fields.byline,
      thumbnail: result.fields.thumbnail,
      source: result.webUrl,
      title: result.webTitle,
      date: result.webPublicationDate,
      trailText: result.fields.trailText,
    };
  }

  return { isLoading, singleNews, error, isError };
};
