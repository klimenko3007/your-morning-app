import useGetFetch from '@/hooks/useGetFetch';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import './SingleNews.css';

type ModiefiedItem = {
  id: string;
  body: string;
  by: string;
  thumbnail: string;
  source: string;
  title: string;
  date: string;
  trailText: string;
};

const SingleNews = () => {
  const { newsId } = useParams();
  const url = `https://content.guardianapis.com/${newsId}?show-fields=all&api-key=${
    import.meta.env.VITE_NEWS_KEY
  }`;
  const { data } = useGetFetch(url);

  const [item, setItem] = useState<ModiefiedItem | null>(null);

  useEffect(() => {
    const modifiedData = data?.response?.content;
    const modifiedItem = {
      id: modifiedData?.id,
      body: modifiedData?.fields.bodyText,
      by: modifiedData?.fields.byline,
      thumbnail: modifiedData?.fields.thumbnail,
      source: modifiedData?.webUrl,
      title: modifiedData?.webTitle,
      date: modifiedData?.webPublicationDate,
      trailText: modifiedData?.fields.trailText,
    };
    if (modifiedData && modifiedItem) {
      setItem(modifiedItem);
      console.log(modifiedItem);
    }
  }, [data]);

  return (
    <>
      {item && (
        <>
          <Box
            sx={{
              height: '45vh',
              width: '100%',
              backgroundImage: `linear-gradient(0deg, rgba(168,168,168,0.15) 0%, rgba(189,189,189,0.15) 100%), url(${item.thumbnail})`,
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
                  'linear-gradient(0deg, rgba(0,0,0,0.60) 0%, rgba(189,189,189,0.60) 100%)',
                padding: '16px',
              }}
            >
              <Typography variant="h2" component="div" color="unset">
                {item.title}
              </Typography>
              <Typography variant="subtitle2">By {item.by}</Typography>
              <Typography variant="caption">{item.trailText}</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: '8px',
                color: 'white',
                alignItems: 'center',
                padding: '16px',
              }}
            >
              <Typography
                variant="overline"
                component={Link}
                to={item.source}
                sx={{
                  textDecoration: 'none',
                  color: 'white',
                  lineHeight: 'unset',
                }}
              >
                To source
              </Typography>
              <EastIcon fontSize="small" />
            </Box>
          </Box>
          <Box
            component="div"
            dangerouslySetInnerHTML={{ __html: item.body }}
            sx={{
              width: '100%',
              height: '50%',
              overflow: 'scroll',
              padding: '16px',
            }}
          ></Box>
        </>
      )}
    </>
  );
};

export default SingleNews;
