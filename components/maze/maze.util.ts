import { Coordinate } from "./maze.type";

function isCoordinate(value: Coordinate | Coordinate[]): value is Coordinate {
  const firstEntry = value[0];
  return typeof firstEntry === "number";
}

function normalizeCoordinate(value: Coordinate | Coordinate[]): Coordinate[] {
  return isCoordinate(value) ? [value] : value;
}

export { normalizeCoordinate };
