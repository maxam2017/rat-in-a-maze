import { Coordinate } from "./maze.type";
import Mouse from "./mouse";

export const DEFAULT_WALL_COORDINATES: Coordinate[] = [
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [2, 5],
  [2, 7],
  [3, 5],
  [3, 7],
  [4, 0],
  [4, 1],
  [4, 2],
  [4, 3],
  [4, 7],
  [5, 2],
  [6, 0],
  [6, 2],
  [6, 4],
  [6, 5],
  [6, 6],
  [7, 0],
];

export const DEFAULT_MOUSE_COORDINATE: Coordinate = [2, 4];

export const DEFAULT_CHEESE_COORDINATE: Coordinate = [5, 1];

export const MouseInstance = new Mouse(DEFAULT_MOUSE_COORDINATE);

export const BFS_CODE = `/**
 * @param {('rat' | 'cheese' | 'wall' | '')[]} maze
 * @return {void}
 */
function solve(maze) {
  const size = Math.sqrt(maze.length);
  const index = maze.findIndex((cell) => cell === CellType.Rat);
  const startCoordinate = [Math.floor(index / size), index % size];
  bfs(startCoordinate);

  function bfs(coordinate) {
    const [x, y] = coordinate;
    const isOutOfRange = x < 0 || x >= size || y < 0 || y > size;
    const cellType = maze[x * size + y];

    if (isOutOfRange || cellType === CellType.Wall) return false;

    if (cellType === CellType.Cheese) return true;

    maze[x * size + y] = '*';

    const isCheeseAvailable = bfs([x + 1, y])
      || bfs([x - 1, y])
      || bfs([x, y + 1])
      || bfs([x, y - 1]);

    maze[x * size + y] = CellType.Empty;

    return isCheeseAvailable;
  }
}
`;
