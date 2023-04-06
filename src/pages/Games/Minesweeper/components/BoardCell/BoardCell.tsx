import { Box, Typography } from '@mui/material';
import { Cell } from '../../consts';
import { useLongPress } from 'use-long-press';
import { Dispatch } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import TourIcon from '@mui/icons-material/Tour';
import mine from './mine.svg';

type CellProps = {
  cell: Cell;
  onCellClicked: (cell: Cell) => void;
  setLongPress: Dispatch<React.SetStateAction<boolean>>;
  onCellPressed: (cell: Cell) => void;
};

const BoardCell = ({
  cell,
  onCellClicked,
  setLongPress,
  onCellPressed,
}: CellProps) => {
  const delayedRemoveLongPress = () => {
    setTimeout(() => setLongPress(false)), 400;
  };

  const onLongPress = useLongPress(
    (event, meta) => {
      setLongPress(true);
      onCellPressed(meta.context as Cell);
    },
    {
      onFinish: () => {
        delayedRemoveLongPress();
      },
    }
  );

  const shouldShowNumber = () => {
    return cell.numberOfCloseBombs > 0 && cell.isOpen && !cell.hasBomb;
  };

  const shouldShowBomb = () => {
    return cell.hasBomb && cell.isOpen && !cell.isFlagged;
  };

  const shouldShowCross = () => {
    return cell.isOpen && !cell.hasBomb && cell.isFlagged;
  };

  const shouldShowFlag = () => {
    return (
      (!cell.isOpen && cell.isFlagged) ||
      (cell.isOpen && cell.isFlagged && cell.hasBomb)
    );
  };

  return (
    <Box
      {...onLongPress(cell)}
      onClick={() => onCellClicked(cell)}
      sx={(theme) => ({
        width: '33px',
        height: '33px',
        background: cell.isOpen ? 'var(--persian-pink)' : 'var(--light-purple)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: cell.isOpen
          ? '5px  var(--persian-pink)'
          : '5px outset var(--light-purple)',
        padding: '2px',
        color: cell.isOpen ? 'var(--deep-purple)' : 'var(--alice-blue)',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        msUserSelect: 'none',
        [theme.breakpoints.up('sm')]: {
          width: '50px',
          height: '50px',
        },
        [theme.breakpoints.up('md')]: {
          width: '60px',
          height: '60px',
        },
      })}
    >
      {shouldShowNumber() && !shouldShowCross() && (
        <Typography variant="h5">{cell.numberOfCloseBombs}</Typography>
      )}
      {shouldShowBomb() && (
        <Box
          component="img"
          src={mine}
          sx={(theme) => ({
            width: '25px',
            height: '25px',
            [theme.breakpoints.up('sm')]: {
              width: '30px',
              height: '30px',
            },
            [theme.breakpoints.up('md')]: {
              width: '40px',
              height: '40px',
            },
          })}
        ></Box>
      )}
      {shouldShowFlag() && (
        <TourIcon
          color={cell.isOpen ? 'success' : 'inherit'}
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
      )}
      {shouldShowCross() && (
        <ClearIcon
          color="error"
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
      )}
    </Box>
  );
};

export default BoardCell;
