import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import './SingleNews.css';
import SingleNewsSceleton from './SingleNewsSceleton';
import { useSingleNewsQuery } from '@/hooks/useSingleNewsQuery';

const SingleNews = () => {
  const { newsId } = useParams();

  const { isLoading, singleNews, isError } = useSingleNewsQuery(newsId);

  if (isError) {
    return <div>Opps, something went wrong ...</div>;
  }

  return (
    <>
      {isLoading && <SingleNewsSceleton />}

      {singleNews && (
        <>
          <Box
            sx={{
              height: '45vh',
              width: '100%',
              backgroundImage: `url(${singleNews.thumbnail})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderBottomLeftRadius: '20px',
              borderBottomRightRadius: '20px',
              mb: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '16px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                color: 'white',
                background:
                  'linear-gradient(0deg, rgba(85,85,85,0.90) 0%, rgba(0,0,0,0.40) 100%)',
                padding: '16px',
              }}
            >
              <Typography variant="h2" component="div" color="unset">
                {singleNews.title}
              </Typography>
              <Typography variant="subtitle2">By {singleNews.by}</Typography>
              <Typography
                variant="caption"
                component="div"
                dangerouslySetInnerHTML={{ __html: singleNews.trailText }}
              ></Typography>
            </Box>
            <Box sx={{ padding: '16px' }}>
              <Typography
                variant="overline"
                component={Link}
                to={singleNews.source}
                sx={{
                  textDecoration: 'none',
                  color: 'white',
                  lineHeight: 'unset',
                  display: 'flex',
                  gap: '8px',
                  alignItems: 'center',
                }}
              >
                To source
                <EastIcon fontSize="small" />
              </Typography>
            </Box>
          </Box>
          <Box
            component="div"
            dangerouslySetInnerHTML={{ __html: singleNews.body }}
            sx={{
              width: '100%',
              padding: '16px',
            }}
          ></Box>
        </>
      )}
    </>
  );
};

export default SingleNews;
