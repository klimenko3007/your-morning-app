import { NewsItem } from '../../constants';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';

type NewsItemProps = {
  item: NewsItem;
};

const NewsListItem = ({ item }: NewsItemProps) => {
  let navigate = useNavigate();

  const onReadmoreClick = (id: string) => {
    navigate(`../${encodeURIComponent(id)}`);
  };

  return (
    <Card
      sx={{
        marginBottom: '10px',
        background: 'none',
        boxShadow: 'none',
        width: '100%',
      }}
    >
      <CardActionArea
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '15px',
          width: '100%',
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 85,
            height: 75,
            objectFit: 'cover',
            borderRadius: '8px',
          }}
          image={item.fields.thumbnail}
          alt={item.webTitle}
        ></CardMedia>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            padding: 0,
          }}
        >
          <Typography component="div" variant="h5">
            {item.webTitle}
          </Typography>
          <Typography
            dangerouslySetInnerHTML={{ __html: item.fields.trailText }}
            variant="caption"
            component="div"
          ></Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'end', cursor: 'pointer' }}>
        <Typography variant="overline" onClick={() => onReadmoreClick(item.id)}>
          Read more
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsListItem;
