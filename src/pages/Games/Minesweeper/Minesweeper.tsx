import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useLongPress } from 'use-long-press';
import { Board } from './Board';
import { Cell, Game, BoardType } from './consts';

const gameBoard = new Board();

const Miesweeper = () => {
  const [board, setBoard] = useState<BoardType | null>(null);
  const [game, setGame] = useState<Game>({ gameOver: false, bombsLeft: 5 });
  const [longPress, setLongPress] = useState<boolean>(false);

  const onCellPressed = (cell: Cell) => {
    gameBoard.flagCell(cell);
    setBoard(gameBoard.board);
    setGame({
      ...game,
      bombsLeft: cell.isFlagged ? game.bombsLeft - 1 : game.bombsLeft + 1,
    });
  };

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

  const onCellClicked = (cell: Cell) => {
    if (longPress) {
      return;
    }

    if (cell.hasBomb && !cell.isFlagged) {
      setGame({ ...game, gameOver: true });
      gameBoard.revealBoard();
      setBoard(gameBoard.board);
      return;
    }

    gameBoard.updateBoardOnClick(cell);
    setBoard(gameBoard.board);
  };

  useEffect(() => {
    setGame({ gameOver: false, bombsLeft: 10 });
    gameBoard.initiateBoard(10, 10);
    setBoard(gameBoard.board);
  }, []);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '40px',
          padding: '16px',
          width: '100%',
        }}
      >
        <Box>
          {!game.gameOver && <div>Game: in progress</div>}
          {game.gameOver && <div>Game: you lost!</div>}
        </Box>
        <Box>Bombs left: {game.bombsLeft}</Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alightItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '1px',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {board &&
            board.map((row, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  width: '100%',
                  gap: '1px',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {row.map((cell, column) => (
                  <Box
                    {...onLongPress(cell)}
                    key={column}
                    onClick={() => onCellClicked(cell)}
                    sx={{
                      width: '50px',
                      height: '50px',
                      background: cell.isOpen
                        ? 'var(--persian-pink)'
                        : 'var(--light-purple)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      border: cell.isOpen
                        ? '5px  var(--persian-pink)'
                        : '5px outset var(--light-purple)',
                      padding: '2px',
                    }}
                  >
                    {cell.numberOfCloseBombs > 0 &&
                      cell.isOpen &&
                      !cell.hasBomb &&
                      cell.numberOfCloseBombs}
                    {cell.hasBomb && cell.isOpen && <span>💣</span>}
                    {cell.isFlagged && <span>🚩</span>}
                  </Box>
                ))}
              </Box>
            ))}
        </Box>
      </Box>
    </>
  );
};

export default Miesweeper;
