import NewsCard from '../NewsCard';
import Box from '@mui/material/Box';
import { NewsItem } from '../../constants';

type NewsCarouseltProp = {
  news: NewsItem[];
};

const NewsCarousel = ({ news }: NewsCarouseltProp) => {
  return (
    <Box
      sx={{
        display: 'flex',
        overflow: 'auto',
        gap: '14px',
        scrollSnapType: 'x mandatory',
        paddingBottom: '5px',
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {news.length > 0 &&
        news.map((item) => <NewsCard key={item.id} item={item}></NewsCard>)}
    </Box>
  );
};

export default NewsCarousel;
