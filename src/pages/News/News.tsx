import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';

const News = () => {
  return (
    <Box sx={{ padding: '16px' }}>
      <Outlet></Outlet>
    </Box>
  );
};

export default News;
