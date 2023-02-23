import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

const NewsListSceleton = () => {
  return (
    <Stack spacing={2} height="100%" sx={{ p: '16px' }}>
      {[...Array(5)].map((i, index) => (
        <Stack
          key={index}
          height={'100px'}
          sx={{
            display: 'flex',
            gap: '15px',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            mt: 'none',
          }}
        >
          <Skeleton variant="rounded" width="85px" height="75px" />
          <Stack
            spacing={1}
            width="100%"
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            <Skeleton
              width="100%"
              variant="text"
              sx={{ transform: 'none', mt: 'none' }}
            />
            <Skeleton
              width="100%"
              variant="text"
              sx={{ transform: 'none', mt: 'none' }}
            />
            <Skeleton
              variant="text"
              width="20%"
              sx={{ transform: 'none', mt: 'none', justifySelf: 'end' }}
            />
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default NewsListSceleton;
