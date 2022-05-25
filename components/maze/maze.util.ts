import { Coordinate as Coordinate } from "./maze.type";

function isCoordinate(value: Coordinate | Coordinate[]): value is Coordinate {
  const firstEntry = value[0];
  return typeof firstEntry === "number";
}

function normalizeCoordinate(value: Coordinate | Coordinate[]): Coordinate[] {
  return isCoordinate(value) ? [value] : value;
}

function isCoordinateEqual(a: Coordinate, b: Coordinate) {
  return a[0] === b[0] && a[1] === b[1];
}

function sequence(start: number, end: number) {
  const dir = end > start ? 1 : -1;
  return Array(Math.abs(start - end) + 1)
    .fill(0)
    .map((_, index) => index * dir + start);
}

function generateTrack(a: Coordinate, b: Coordinate): Coordinate[] | undefined {
  if (a[0] === b[0]) {
    return sequence(a[1], b[1]).map((v) => [a[0], v]);
  }

  if (a[1] === b[1]) {
    return sequence(a[0], b[0]).map((v) => [v, a[1]]);
  }
}

const _Coordinate = {
  normalize: normalizeCoordinate,
  isEqual: isCoordinateEqual,
  track: generateTrack,
};

export { _Coordinate as Coordinate };
