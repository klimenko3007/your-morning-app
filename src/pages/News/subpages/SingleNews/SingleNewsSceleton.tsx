import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

const SingleNewsSceleton = () => {
  return (
    <Stack spacing={2} height="100vh">
      <Stack height={'100%'} spacing={1}>
        <Skeleton variant="rectangular" width="100%" height="45vh" />
        <Skeleton
          variant="text"
          width="100%"
          height="200px"
          sx={{ position: 'absolute', top: '100px' }}
        />
      </Stack>
      <Stack height={'100%'} spacing={1}>
        {[...Array(8)].map((v, i) => (
          <Skeleton key={i} variant="text" width="100%" height="10%" />
        ))}
      </Stack>
    </Stack>
  );
};

export default SingleNewsSceleton;
