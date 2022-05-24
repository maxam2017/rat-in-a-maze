function getRandomIntegerLessThan(value: number) {
  if (value <= 0) return 0;
  return Math.floor(Math.random() * value);
}

export function generateAsciiMaze(size = 8) {
  const maze = Array(size)
    .fill(undefined)
    .map(() => Array(size).fill("．"));

  const halfSize = Math.floor(size / 2);
  const startX = halfSize + getRandomIntegerLessThan(halfSize);
  const startY = halfSize + getRandomIntegerLessThan(halfSize);
  const goalX = getRandomIntegerLessThan(halfSize);
  const goalY = getRandomIntegerLessThan(halfSize);

  maze[startY][startX] = "🐭";
  maze[goalY][goalX] = "🧀️";

  const breakPoint = goalX + Math.min(startX - goalX, 3);

  for (let point = goalX + 1; point <= breakPoint; point++) {
    maze[goalY][point] = "　";
  }

  for (let point = goalY; point < startY; point++) {
    maze[point][breakPoint] = "　";
  }

  for (let point = breakPoint; point < startX; point++) {
    maze[startY][point] = "　";
  }

  return maze.map((row) => row.join("")).join("\n");
}
