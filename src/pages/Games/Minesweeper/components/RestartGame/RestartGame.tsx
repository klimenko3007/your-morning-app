import { Button } from '@mui/material';
import { PropsWithoutRef } from 'react';

type RestartGameProps = {
  handleClick: () => void;
};

const RestartGame = ({ handleClick }: RestartGameProps) => {
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
      onClick={handleClick}
    >
      Restart game
    </Button>
  );
};

export default RestartGame;
