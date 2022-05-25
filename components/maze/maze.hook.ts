import { MouseEvent, useMemo, useRef, useState } from "react";
import { CellType, Coordinates, MazeCellState } from "./maze.type";
import { Coordinate } from "./maze.util";

interface MazeOptions {
  /**
   * the number of cells in column/row
   */
  size: number;
  /**
   * coordinate map for `rat`, `cheese` and `wall`
   */
  coordinates: Coordinates;
}

export function useMaze({ size, coordinates }: MazeOptions) {
  const cells = useMemo<CellType[]>(() => {
    const result = Array(size * size).fill(CellType.Empty);

    Object.entries(coordinates).forEach(([key, value]) => {
      const normalizedCoordinates = Coordinate.normalize(value);
      normalizedCoordinates.forEach(([row, col]) => {
        const index = row * size + col;
        if (index >= size * size) return;

        result[index] = key as CellType;
      });
    });

    return result;
  }, [coordinates, size]);

  return { cells };
}

function getCellType(el: HTMLDivElement) {
  return el.dataset.cellType as any as CellType;
}

function getCellIndex(el: HTMLDivElement) {
  return Number(el.dataset.cellIndex);
}

export function useDragCell({
  onDragEnd,
}: {
  onDragEnd(cellState: MazeCellState): void;
}) {
  const pressingRef = useRef(false);
  const [cellState, setCellState] = useState<Partial<MazeCellState>>({});

  const pressCell = (event: MouseEvent) => {
    if (pressingRef.current || event.target === event.currentTarget) return;

    pressingRef.current = true;
    const target = event.target as HTMLDivElement;
    setCellState({ type: getCellType(target), from: getCellIndex(target) });
  };

  const dragCell = (event: MouseEvent) => {
    const isPressing = pressingRef.current;
    if (!isPressing || event.target === event.currentTarget) return;

    const target = event.target as HTMLDivElement;
    const index = getCellIndex(target);

    setCellState((prev) => ({
      ...prev,
      to: prev.from === index ? undefined : index,
    }));
  };

  const releaseCell = (event: MouseEvent) => {
    const isPressing = pressingRef.current;
    if (!isPressing || event.target === event.currentTarget) return;

    const target = event.target as HTMLDivElement;
    const cellType = getCellType(target);

    if (typeof cellState.to !== "undefined" && cellType === CellType.Empty) {
      onDragEnd(cellState as MazeCellState);
    }
    setCellState({});
    pressingRef.current = false;
  };

  return {
    cellState,
    handlers: {
      onMouseDown: pressCell,
      onMouseMove: dragCell,
      onMouseUp: releaseCell,
      onMouseLeave: releaseCell,
    },
  };
}
