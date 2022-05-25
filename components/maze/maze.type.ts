enum CellType {
  Empty = "",
  Rat = "rat",
  Cheese = "cheese",
  Wall = "wall",
}

type Coordinate = [number, number];

type Coordinates = Partial<Record<CellType, Coordinate | Coordinate[]>>;

type MazeCellState = {
  type: CellType;
  from: number;
  to: number;
};

export { CellType, type Coordinate, type Coordinates, type MazeCellState };
