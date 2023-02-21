import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import { NewsItem } from '../../constants';

type FrontPageProp = {
  item: NewsItem;
};
const FrontPage = ({ item }: FrontPageProp) => {
  return (
    <>
      {item && (
        <Box
          sx={{
            height: '45vh',
            width: '100%',
            backgroundImage: `linear-gradient(0deg, rgba(168,168,168,0.15) 0%, rgba(189,189,189,0.15) 100%), url(${item.fields?.thumbnail})`,
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
          <Typography
            variant="h2"
            component="div"
            color="unset"
            sx={{
              color: 'white',
              background:
                'linear-gradient(0deg, rgba(168,168,168,0.30) 0%, rgba(189,189,189,0.30) 100%)',
              padding: '16px',
            }}
          >
            {item.webTitle}
          </Typography>
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
              to={item.webUrl}
              sx={{
                textDecoration: 'none',
                color: 'white',
                lineHeight: 'unset',
              }}
            >
              Learn more
            </Typography>
            <EastIcon fontSize="small" />
          </Box>
        </Box>
      )}
    </>
  );
};

export default FrontPage;
