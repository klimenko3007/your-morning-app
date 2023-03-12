import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useLongPress } from 'use-long-press';

type Cell = {
  x: number;
  y: number;
  isOpen: boolean;
  isFlagged: boolean;
  hasBomb: boolean;
  numberRevealed: boolean;
  numberOfCloseBombs: number;
};

type Game = {
  bombsLeft: number;
  gameOver: boolean;
};

const isCellDefined = (board: Cell[][], x: number, y: number) => {
  if (!board[x]) {
    return false;
  }
  return Boolean(board[x][y]);
};

const hasBomb = (bombs: number[][], coordinates: number[]) => {
  const v = bombs.findIndex(
    (bomb) => bomb[0] === coordinates[0] && bomb[1] === coordinates[1]
  );
  return v !== -1;
};

const generateRandomNumber = (limit: number) => {
  return Math.floor(Math.random() * limit);
};

const generateBombs = (numberOfBombs: number, boardSize: number) => {
  const bombs: number[][] = [];

  while (bombs.length < numberOfBombs) {
    const bomb = [
      generateRandomNumber(boardSize),
      generateRandomNumber(boardSize),
    ];
    if (!hasBomb(bombs, bomb)) {
      bombs.push(bomb);
    }
  }
  return bombs;
};

const generateBoard = (boardSize: number) => {
  return [...Array(boardSize)].map((a, row) =>
    [...Array(boardSize)].map((b, column) => {
      return {
        x: row,
        y: column,
        isOpen: false,
        isFlagged: false,
        hasBomb: false,
        numberRevealed: false,
        numberOfCloseBombs: 0,
      };
    })
  );
};

const placeBombsOnBoard = (board: Cell[][], bombs: number[][]) => {
  return board.map((a) =>
    a.map((b) => {
      return { ...b, hasBomb: hasBomb(bombs, [b.x, b.y]) };
    })
  );
};

const findAdjacentCells = (board: Cell[][], cell: Cell) => {
  const cells: Cell[] = [];
  if (isCellDefined(board, cell.x - 1, cell.y - 1)) {
    cells.push(board[cell.x - 1][cell.y - 1]);
  }
  if (isCellDefined(board, cell.x - 1, cell.y)) {
    cells.push(board[cell.x - 1][cell.y]);
  }
  if (isCellDefined(board, cell.x - 1, cell.y + 1)) {
    cells.push(board[cell.x - 1][cell.y + 1]);
  }
  if (isCellDefined(board, cell.x, cell.y - 1)) {
    cells.push(board[cell.x][cell.y - 1]);
  }
  if (isCellDefined(board, cell.x, cell.y + 1)) {
    cells.push(board[cell.x][cell.y + 1]);
  }
  if (isCellDefined(board, cell.x + 1, cell.y - 1)) {
    cells.push(board[cell.x + 1][cell.y - 1]);
  }
  if (isCellDefined(board, cell.x + 1, cell.y)) {
    cells.push(board[cell.x + 1][cell.y]);
  }
  if (isCellDefined(board, cell.x + 1, cell.y + 1)) {
    cells.push(board[cell.x + 1][cell.y + 1]);
  }
  return cells;
};

const updateBoardWithnumberOfBombsPerCell = (board: Cell[][]) => {
  return board.map((row) =>
    row.map((cell) => {
      const bombs = findAdjacentCells(board, cell).filter(
        (i) => i.hasBomb
      ).length;

      return {
        ...cell,
        numberOfCloseBombs: bombs,
      };
    })
  );
};

const revealEmptyCells = (board: Cell[][], cell: Cell) => {
  const adjacentCells = findAdjacentCells(board, cell);
  adjacentCells.map((item) => {
    if (
      !item.isFlagged &&
      !item.numberRevealed &&
      (item.numberOfCloseBombs === 0 || !item.hasBomb)
    ) {
      board[item.x][item.y].isOpen = true;
      board[item.x][item.y].numberRevealed = true;
      if (item.numberOfCloseBombs === 0) {
        revealEmptyCells(board, item);
      }
    }
  });
  return;
};

const updateBoardOnClick = (board: Cell[][], cell: Cell) => {
  if (cell.isFlagged) {
    return [...board];
  }

  board[cell.x][cell.y].isOpen = true;
  board[cell.x][cell.y].numberRevealed = true;

  if (cell.numberOfCloseBombs !== 0) {
    return [...board];
  }

  revealEmptyCells(board, cell);

  return [...board];
};

const flagCell = (cell: Cell, board: Cell[][]) => {
  if (cell.isOpen) {
    return;
  }
  board[cell.x][cell.y].isFlagged = !board[cell.x][cell.y].isFlagged;
  return [...board];
};

const revealBoard = (board: Cell[][]) => {
  return board.map((row) =>
    row.map((cell) => {
      return { ...cell, isOpen: true };
    })
  );
};

const Games = () => {
  const [bombs, setBombs] = useState<number[][] | null>(null);
  const [board, setBoard] = useState<Cell[][] | null>(null);
  const [game, setGame] = useState<Game>({ gameOver: false, bombsLeft: 5 });
  const [longPress, setLongPress] = useState<boolean>(false);

  const onCellPressed = (cell: Cell) => {
    flagCell(cell, board ?? []);
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
      onFinish: () => delayedRemoveLongPress(),
    }
  );

  const onCellClicked = (cell: Cell) => {
    if (longPress) {
      return;
    }
    if (cell.hasBomb && !cell.isFlagged) {
      setGame({ ...game, gameOver: true });
      setBoard(revealBoard(board ?? []));
      return;
    }
    setBoard(updateBoardOnClick(board ?? [], cell));
  };

  useEffect(() => {
    setGame({ gameOver: false, bombsLeft: 5 });
    const board = generateBoard(10);
    const bombs = generateBombs(20, 10);
    const boardWithBombs = placeBombsOnBoard(board, bombs);
    const boardWithNumbers =
      updateBoardWithnumberOfBombsPerCell(boardWithBombs);
    setBombs(bombs);
    setBoard(boardWithNumbers);
  }, []);

  return (
    <Box sx={{ display: 'flex', gap: '5px', flexDirection: 'column' }}>
      {board &&
        board.map((row, index) => (
          <Box key={index} sx={{ display: 'flex', width: '100%', gap: '5px' }}>
            {row.map((cell, column) => (
              <Box
                {...onLongPress(cell)}
                key={column}
                onClick={() => onCellClicked(cell)}
                sx={{
                  width: '50px',
                  height: '50px',
                  background: cell.isOpen ? 'yellow' : 'blue',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
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
      {game.gameOver && <div>Game Over</div>}
    </Box>
  );
};

export default Games;
