import { Box } from '@mui/material';

import { Link } from 'react-router-dom';

const ChooseGame = () => {
  return (
    <div>
      <h1>Choose your game</h1>
      <Box component={Link} to={'minesweeper'}>
        Minesweeper
      </Box>
    </div>
  );
};

export default ChooseGame;
