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
      height: '280px',
      color: 'inherit',
      textDecoration: 'none',
      background: 'none',
    }}
    component={Link}
    to={encodeURIComponent(item.id)}
  >
    <CardMedia component="img" height="150" image={item.fields.thumbnail} />
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
