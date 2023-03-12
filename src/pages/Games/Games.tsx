import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

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
  console.log(bombs);
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
  board[cell.x][cell.y].isOpen = true;
  board[cell.x][cell.y].numberRevealed = true;
  if (cell.numberOfCloseBombs !== 0) {
    return [...board];
  }

  revealEmptyCells(board, cell);

  return [...board];
};

const flagCell = (cell: Cell, board: Cell[][]) => {
  board[cell.x][cell.y].isFlagged = true;
  return [...board];
};

const Games = () => {
  const [bombs, setBombs] = useState<number[][] | null>(null);
  const [board, setBoard] = useState<Cell[][] | null>(null);
  const [game, setGame] = useState<Game>({ gameOver: false, bombsLeft: 5 });

  const onCellClicked = (cell: Cell) => {
    console.log(cell);
    if (cell.hasBomb) {
      setGame({ ...game, gameOver: true });
    }
    setBoard(updateBoardOnClick(board ?? [], cell));
  };

  const onCellPressed = (cell: Cell) => {
    flagCell(cell, board ?? []);
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
    console.log(boardWithNumbers);
  }, []);

  return (
    <Box sx={{ display: 'flex', gap: '5px', flexDirection: 'column' }}>
      {game.gameOver && <div>Game Over</div>}
      {board &&
        board.map((row, index) => (
          <Box key={index} sx={{ display: 'flex', width: '100%', gap: '5px' }}>
            {row.map((cell, column) => (
              <Box
                key={column}
                onClick={() => onCellClicked(cell)}
                sx={{
                  width: '50px',
                  height: '50px',
                  background: cell.isOpen ? 'yellow' : 'blue',
                }}
              >
                {cell.numberOfCloseBombs > 0 && cell.numberOfCloseBombs}
                {hasBomb(bombs ?? [], [cell.x, cell.y]) && <span>💣</span>}
              </Box>
            ))}
          </Box>
        ))}
    </Box>
  );
};

export default Games;
