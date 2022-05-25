enum CellType {
  Empty = "",
  Rat = "rat",
  Cheese = "cheese",
  Wall = "wall",
}

type Coordinate = [number, number];

type Coordinates = Partial<Record<CellType, Coordinate | Coordinate[]>>;

interface MazeProps {
  /**
   * the number of cells in column/row
   */
  size: number;
  /**
   * coordinate map for `rat`, `cheese` and `wall`
   */
  coordinates: Coordinates;
}

export { CellType, type Coordinate, type Coordinates, type MazeProps };
