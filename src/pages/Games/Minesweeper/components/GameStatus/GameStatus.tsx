import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Game } from '../../consts';
import TourIcon from '@mui/icons-material/Tour';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import MoodBadIcon from '@mui/icons-material/MoodBad';

type GameStatusProps = {
  game: Game;
  timer: number;
};

export const secondsToHHMMSS = (seconds: number) => {
  return new Date(seconds * 1000).toISOString().slice(14, 19);
};

const GameStatus = ({ game, timer }: GameStatusProps) => {
  return (
    <Box
      sx={(theme) => ({
        display: game.gameOver ? 'grid' : 'flex',
        justifyContent: 'space-between',
        gridTemplateColumns: '1fr 2fr 1fr',
        alignItems: 'center',
        height: '50px',
        width: '100%',
        maxWidth: '340px',
        ml: 'auto',
        mr: 'auto',
        mb: 4,
        [theme.breakpoints.up('sm')]: {
          maxWidth: '509px',
        },
        [theme.breakpoints.up('md')]: {
          maxWidth: '609px',
        },
      })}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
        }}
      >
        <AvTimerIcon
          sx={(theme) => ({
            fontSize: '20px',
            [theme.breakpoints.up('sm')]: {
              fontSize: '35px',
            },
            [theme.breakpoints.up('md')]: {
              fontSize: '45px',
            },
          })}
        />
        <Typography variant="h3">{secondsToHHMMSS(timer)}</Typography>
      </Box>
      {game.gameOver && (
        <Box sx={{ justifySelf: 'center' }}>
          {game.win ? (
            <SentimentVerySatisfiedIcon
              sx={(theme) => ({
                fontSize: '40px',
                [theme.breakpoints.up('sm')]: {
                  fontSize: '55px',
                },
                [theme.breakpoints.up('md')]: {
                  fontSize: '65px',
                },
              })}
            />
          ) : (
            <MoodBadIcon
              sx={(theme) => ({
                fontSize: '40px',
                [theme.breakpoints.up('sm')]: {
                  fontSize: '55px',
                },
                [theme.breakpoints.up('md')]: {
                  fontSize: '65px',
                },
              })}
            />
          )}
        </Box>
      )}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          justifySelf: 'end',
        }}
      >
        <TourIcon
          sx={(theme) => ({
            fontSize: '20px',
            [theme.breakpoints.up('sm')]: {
              fontSize: '35px',
            },
            [theme.breakpoints.up('md')]: {
              fontSize: '45px',
            },
          })}
        />
        <Typography variant="h3">{game.bombsLeft}</Typography>
      </Box>
    </Box>
  );
};

export default GameStatus;
