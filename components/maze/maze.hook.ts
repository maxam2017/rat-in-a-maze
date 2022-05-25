import { useMemo } from "react";
import { CellType, MazeProps } from "./maze.type";
import { normalizeCoordinate } from "./maze.util";

export function useMaze({ size, coordinates }: MazeProps) {
  const cells = useMemo<CellType[]>(() => {
    const result = Array(size * size).fill(CellType.Empty);

    Object.entries(coordinates).forEach(([key, value]) => {
      const normalizedCoordinates = normalizeCoordinate(value);
      normalizedCoordinates.forEach(([row, col]) => {
        const index = row * size + col;
        result[index] = key as CellType;
      });
    });

    return result;
  }, [coordinates, size]);

  return { cells };
}
