import Box from '@mui/material/Box';
import { useEffect, useRef, useState } from 'react';
import { Board } from './Board';
import BoardCell from './components/BoardCell';
import GameStatus from './components/GameStatus';
import RestartGame from './components/RestartGame';
import { Cell, Game, BoardType } from './consts';
import { useSearchParams } from 'react-router-dom';

const Miesweeper = () => {
  const [searchParams] = useSearchParams();
  const [board, setBoard] = useState<BoardType | null>(null);
  const [game, setGame] = useState<Game>({
    gameOver: false,
    bombsLeft: 5,
    win: false,
  });
  const [longPress, setLongPress] = useState<boolean>(false);
  const [timer, setTimer] = useState(0);
  const gameBoard = useRef(new Board());
  const boardSize = 10;

  const onCellPressed = (cell: Cell) => {
    if (game.bombsLeft === 0 || cell.isOpen) {
      return;
    }
    gameBoard.current.flagCell(cell);
    setBoard(gameBoard.current.board);

    if (gameBoard.current.boardIsOpen) {
      setGame({ ...game, gameOver: true, win: true, bombsLeft: 0 });
    } else {
      setGame({
        ...game,
        bombsLeft: cell.isFlagged ? game.bombsLeft - 1 : game.bombsLeft + 1,
      });
    }
  };

  const onCellClicked = (cell: Cell) => {
    if (longPress) {
      return;
    }

    if (cell.hasBomb && !cell.isFlagged) {
      setGame({ ...game, gameOver: true });
      gameBoard.current.revealBoard();
      setBoard(gameBoard.current.board);
      return;
    }

    gameBoard.current.updateBoardOnClick(cell);

    setBoard(gameBoard.current.board);

    if (gameBoard.current.boardIsOpen) {
      setGame({ ...game, gameOver: true, win: true });
    }
  };

  const startGame = (numberOfBombs: number) => {
    setGame({
      gameOver: false,
      bombsLeft: numberOfBombs,
      win: false,
    });
    gameBoard.current.initiateBoard(boardSize, numberOfBombs);
    setBoard(gameBoard.current.board);
  };

  useEffect(() => {
    startGame(Number(searchParams.get('level')));
  }, []);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count = count + 1;
      setTimer(count);
    }, 1000);

    if (game.gameOver || game.win) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [game]);

  return (
    <Box
      sx={{ padding: '30px 16px', display: 'flex', flexDirection: 'column' }}
    >
      <GameStatus game={game} timer={timer} />
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
            background: 'var(--windsor)',
            border: '1px solid var(--light-purple)',
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
                  background: 'var(--windsor)',
                }}
              >
                {row.map((cell, column) => (
                  <BoardCell
                    key={column}
                    setLongPress={setLongPress}
                    onCellClicked={onCellClicked}
                    cell={cell}
                    onCellPressed={onCellPressed}
                  />
                ))}
              </Box>
            ))}
        </Box>
      </Box>
      <RestartGame
        handleClick={startGame}
        bombs={Number(searchParams.get('level'))}
      />
    </Box>
  );
};

export default Miesweeper;
