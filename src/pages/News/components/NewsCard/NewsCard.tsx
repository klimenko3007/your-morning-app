import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { NewsItem } from '../../constants';

type NewsCardProp = {
  item: NewsItem;
};

const NewsCard = ({ item }: NewsCardProp) => (
  <Card
    sx={{
      minWidth: '250px',
      color: 'inherit',
      textDecoration: 'none',
      background: 'none',
    }}
    component={Link}
    to={item.webUrl}
  >
    <CardMedia component="img" height="100" image={item.fields.thumbnail} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {item.webTitle}
      </Typography>
      <Typography gutterBottom variant="caption" component="div">
        {new Intl.DateTimeFormat('en').format(
          new Date(item.webPublicationDate)
        )}
      </Typography>
    </CardContent>
  </Card>
);

export default NewsCard;
