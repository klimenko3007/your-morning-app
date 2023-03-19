import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
//had to import Box like this because sometimes bugs out in vit
// known issue: https://github.com/mui/material-ui/issues/31835

const ChooseGame = () => {
  return (
    <Box>
      <h1>Choose your game</h1>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Box
            component={'img'}
            src="src/assets/minesweeper.png"
            sx={{ width: 100 }}
          ></Box>
          <Box>
            <Typography variant="h2">Minesweeper</Typography>
            <Typography variant="body1">
              Play the classic game in Beginner, Intermediate, and Expert modes.
            </Typography>
          </Box>
        </Box>

        <Button
          component={Link}
          to={'minesweeper'}
          variant="contained"
          sx={{ width: '200px', justifySelf: 'end' }}
        >
          Start game
        </Button>
      </Box>
    </Box>
  );
};

export default ChooseGame;
