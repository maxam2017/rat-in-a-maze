import { MouseInstance } from "components/maze/maze.constant";
import { CellType, Coordinate } from "components/maze/maze.type";

export default function solve(maze: CellType[]) {
  const size = Math.sqrt(maze.length);
  const index = maze.findIndex((cell) => cell === CellType.Rat);
  const startCoordinate: Coordinate = [Math.floor(index / size), index % size];
  dfs(startCoordinate);

  function dfs([x, y]: Coordinate): boolean {
    if (
      x < 0 ||
      x >= size ||
      y < 0 ||
      y > size ||
      maze[x * size + y] === CellType.Wall
    )
      return false;

    if (maze[x * size + y] === CellType.Cheese) {
      return true;
    }
    MouseInstance.flag([x, y]);

    maze[x * size + y] = CellType.Wall;
    const res =
      dfs([x + 1, y]) || dfs([x - 1, y]) || dfs([x, y + 1]) || dfs([x, y - 1]);

    maze[x * size + y] = CellType.Empty;
    return res;
  }
}
