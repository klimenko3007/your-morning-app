import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import minesweeper from './minesweeper.png';
import { ChangeEvent, useState } from 'react';
//had to import Box like this because sometimes bugs out in vit
// known issue: https://github.com/mui/material-ui/issues/31835

const ChooseGame = () => {
  const [level, setLevel] = useState<string>('10');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLevel((event.target as HTMLInputElement).value);
  };
  return (
    <Box sx={{ p: '0 16px', mt: '16px', textAlign: 'justify' }}>
      <h1>Choose your game</h1>

      <Box sx={{ display: 'flex', mt: '30px', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'start', gap: '20px' }}>
          <Box component={'img'} src={minesweeper} sx={{ width: '60px' }}></Box>
          <Box>
            <Typography variant="h2">Minesweeper</Typography>
            <Typography variant="body1">
              The objective of the game is to uncover all the fields that do not
              contain mines. Select a difficulty level to challenge yourself,
              and enjoy the game!
            </Typography>
            <FormControl sx={{ pb: 4 }}>
              <RadioGroup
                name="row-radio-buttons-group"
                onChange={handleChange}
                sx={{ pb: 4 }}
              >
                <FormControlLabel
                  value={10}
                  control={<Radio />}
                  label="Beginner"
                  checked={level === '10'}
                />
                <FormControlLabel
                  value={15}
                  control={<Radio />}
                  label="Intermediate"
                />
                <FormControlLabel
                  value={20}
                  control={<Radio />}
                  label="Expert"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>

        <Button
          component={Link}
          to={`minesweeper?level=${level}`}
          variant="contained"
          sx={(theme) => ({
            width: '100%',
            alignSelf: 'center',
            [theme.breakpoints.up('sm')]: {
              alignSelf: 'start',
              maxWidth: '300px',
            },
          })}
        >
          Start game
        </Button>
      </Box>
    </Box>
  );
};

export default ChooseGame;
