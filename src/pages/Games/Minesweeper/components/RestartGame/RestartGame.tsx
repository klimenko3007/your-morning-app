import { Button } from '@mui/material';

type RestartGameProps = {
  handleClick: (numberOfBombs: number) => void;
  bombs: number;
};

const RestartGame = ({ handleClick, bombs }: RestartGameProps) => {
  return (
    <Button
      variant="contained"
      sx={(theme) => ({
        width: '100%',
        alignSelf: 'center',
        maxWidth: '340px',
        mt: 4,
        [theme.breakpoints.up('sm')]: {
          maxWidth: '200px',
        },
      })}
      onClick={() => handleClick(bombs)}
    >
      Restart game
    </Button>
  );
};

export default RestartGame;
