import { BoardType, Bombs, Cell } from './consts';

export class Board {
  private _board: BoardType = [];

  private _bombs: Bombs = [];

  public get board() {
    return this._board;
  }

  private generateBoard(boardSize: number) {
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
  }

  public hasBomb(bombs: Bombs, coordinates: number[]) {
    const v = bombs.findIndex(
      (bomb) => bomb[0] === coordinates[0] && bomb[1] === coordinates[1]
    );
    return v !== -1;
  }

  private generateRandomNumber(limit: number) {
    return Math.floor(Math.random() * limit);
  }

  private generateBombs(numberOfBombs: number, boardSize: number) {
    const bombs: Bombs = [];

    while (bombs.length < numberOfBombs) {
      const bomb = [
        this.generateRandomNumber(boardSize),
        this.generateRandomNumber(boardSize),
      ];
      if (!this.hasBomb(bombs, bomb)) {
        bombs.push(bomb);
      }
    }
    return bombs;
  }

  private placeBombsOnBoard() {
    this._board = this._board.map((a) =>
      a.map((b) => {
        return { ...b, hasBomb: this.hasBomb(this._bombs, [b.x, b.y]) };
      })
    );
  }

  private isCellDefined = (x: number, y: number) => {
    if (!this._board[x]) {
      return false;
    }
    return Boolean(this._board[x][y]);
  };

  private findAdjacentCells(cell: Cell) {
    const cells: Cell[] = [];
    if (this.isCellDefined(cell.x - 1, cell.y - 1)) {
      cells.push(this._board[cell.x - 1][cell.y - 1]);
    }
    if (this.isCellDefined(cell.x - 1, cell.y)) {
      cells.push(this._board[cell.x - 1][cell.y]);
    }
    if (this.isCellDefined(cell.x - 1, cell.y + 1)) {
      cells.push(this._board[cell.x - 1][cell.y + 1]);
    }
    if (this.isCellDefined(cell.x, cell.y - 1)) {
      cells.push(this._board[cell.x][cell.y - 1]);
    }
    if (this.isCellDefined(cell.x, cell.y + 1)) {
      cells.push(this._board[cell.x][cell.y + 1]);
    }
    if (this.isCellDefined(cell.x + 1, cell.y - 1)) {
      cells.push(this._board[cell.x + 1][cell.y - 1]);
    }
    if (this.isCellDefined(cell.x + 1, cell.y)) {
      cells.push(this._board[cell.x + 1][cell.y]);
    }
    if (this.isCellDefined(cell.x + 1, cell.y + 1)) {
      cells.push(this._board[cell.x + 1][cell.y + 1]);
    }
    return cells;
  }

  private updateBoardWithnumberOfBombsPerCell = () => {
    this._board = this._board.map((row) =>
      row.map((cell) => {
        const bombs = this.findAdjacentCells(cell).filter(
          (i) => i.hasBomb
        ).length;
        return {
          ...cell,
          numberOfCloseBombs: bombs,
        };
      })
    );
  };

  private revealEmptyCells = (board: Cell[][], cell: Cell) => {
    const adjacentCells = this.findAdjacentCells(cell);
    adjacentCells.map((item) => {
      if (
        !item.isFlagged &&
        !item.numberRevealed &&
        (item.numberOfCloseBombs === 0 || !item.hasBomb)
      ) {
        board[item.x][item.y].isOpen = true;
        board[item.x][item.y].numberRevealed = true;
        if (item.numberOfCloseBombs === 0) {
          this.revealEmptyCells(board, item);
        }
      }
    });
    return;
  };

  public updateBoardOnClick(cell: Cell) {
    const boardCopy = [...this._board];

    if (cell.isFlagged) {
      this._board = boardCopy;
      return;
    }

    boardCopy[cell.x][cell.y].isOpen = true;
    boardCopy[cell.x][cell.y].numberRevealed = true;

    if (cell.numberOfCloseBombs !== 0) {
      this._board = boardCopy;
      return;
    }

    this.revealEmptyCells(boardCopy, cell);
    this._board = boardCopy;
  }

  public flagCell(cell: Cell) {
    if (cell.isOpen) {
      return;
    }
    this._board[cell.x][cell.y].isFlagged =
      !this._board[cell.x][cell.y].isFlagged;
  }

  public revealBoard() {
    this._board = this._board.map((row) =>
      row.map((cell) => {
        return { ...cell, isOpen: true };
      })
    );
  }

  private cellIsMarkedOrOpen(cell: Cell) {
    return cell.isOpen || (cell.isFlagged && cell.hasBomb);
  }

  public get boardIsOpen() {
    return this._board.every((row) => row.every(this.cellIsMarkedOrOpen));
  }

  public initiateBoard(boardSize: number, bombsLimit: number) {
    this._board = this.generateBoard(boardSize);
    this._bombs = this.generateBombs(bombsLimit, boardSize);
    this.placeBombsOnBoard();
    this.updateBoardWithnumberOfBombsPerCell();
  }
}
