export type Cell = {
  x: number;
  y: number;
  isOpen: boolean;
  isFlagged: boolean;
  hasBomb: boolean;
  numberRevealed: boolean;
  numberOfCloseBombs: number;
};

export type Game = {
  bombsLeft: number;
  gameOver: boolean;
  win: boolean;
};

export type BoardType = Cell[][];

export type Bombs = number[][];
