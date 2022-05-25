import { useInterval, useObservable } from "hooks";
import { useState } from "react";
import Maze from "./maze";
import {
  DEFAULT_CHEESE_COORDINATE,
  DEFAULT_MOUSE_COORDINATE,
  DEFAULT_WALL_COORDINATES,
} from "./maze.constant";
import Mouse from "./mouse";

const MouseInstance = new Mouse(DEFAULT_MOUSE_COORDINATE);

export default function MazeContainer() {
  const [cheeseCoordinate, setCheeseCoordinate] = useState(
    DEFAULT_CHEESE_COORDINATE
  );
  const ratCoordinate = useObservable(MouseInstance.coordinate$);

  useInterval(() => MouseInstance.move());

  return (
    <Maze
      size={8}
      coordinates={{
        rat: ratCoordinate,
        cheese: cheeseCoordinate,
        wall: DEFAULT_WALL_COORDINATES,
      }}
      onMouseCellDrag={({ to }) => {
        MouseInstance.set([Math.floor(to / 8), to % 8]);
      }}
      onCheeseCellDrag={({ to }) => {
        setCheeseCoordinate([Math.floor(to / 8), to % 8]);
      }}
    />
  );
}
