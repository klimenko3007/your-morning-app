import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Game } from '../../consts';

type GameStatusProps = {
  game: Game;
};

const GameStatus = ({ game }: GameStatusProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '40px',
        padding: '30px 16px',
        width: '100%',
      }}
    >
      <Box>
        {!game.gameOver && (
          <Typography variant="h5">Game: in progress</Typography>
        )}
        {game.gameOver && !game.win && (
          <Typography variant="h5">Game: you lost!</Typography>
        )}
        {game.gameOver && game.win && (
          <Typography variant="h5">Game: you win!</Typography>
        )}
      </Box>
      <Typography variant="h5">Bombs left: {game.bombsLeft}</Typography>
    </Box>
  );
};

export default GameStatus;
