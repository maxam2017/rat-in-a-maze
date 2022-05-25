enum CellType {
  Empty = "",
  Rat = "rat",
  Cheese = "cheese",
  Wall = "wall",
}

type Coordinate = [number, number];

type Coordinates = Partial<Record<CellType, Coordinate | Coordinate[]>>;

interface MazeProps {
  size: number;
  coordinates: Coordinates;
}

export { CellType, type Coordinate, type Coordinates, type MazeProps };
