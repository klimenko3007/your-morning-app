import { Box } from '@mui/material';
import { NewsItem } from '../../constants';
import NewsListItem from '../NewsListItem';
import NewsListSceleton from './NewsListSceleton';
import { useNewsQuery } from '@/hooks/useNewsQuery';

type NewsListProp = {
  section?: string;
  query?: string;
};

const NewsList = ({ section, query }: NewsListProp) => {
  const { results, isLoading, isError } = useNewsQuery(section, query);

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        overflow: 'scroll',
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {isLoading && <NewsListSceleton />}
      {isError && <div>Error to fetch</div>}
      {!isLoading &&
        !isError &&
        results?.map((item: NewsItem) => (
          <NewsListItem item={item} key={item.id} />
        ))}
    </Box>
  );
};

export default NewsList;
