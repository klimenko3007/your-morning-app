import { useNewsQuery } from '@/hooks/useNewsQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const NewsWidget = () => {
  const { results, isLoading } = useNewsQuery();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {results && (
        <Box
          sx={{
            width: '100%',
            backgroundImage: `url(${results[0].fields?.thumbnail})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            mb: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '16px',
          }}
        >
          <Typography
            variant="h2"
            component="div"
            color="unset"
            sx={{
              color: 'white',
              background:
                'linear-gradient(0deg, rgba(85,85,85,0.90) 0%, rgba(0,0,0,0.40) 100%)',
              padding: '16px',
            }}
          >
            {results[0].webTitle}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default NewsWidget;
