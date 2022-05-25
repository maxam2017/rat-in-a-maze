import { useInterval, useObservable } from "hooks";
import { useEffect, useState } from "react";
import appEmitter from "services/appEmitter";
import solve from "solutions/dfs";
import Maze from "./maze";
import {
  DEFAULT_CHEESE_COORDINATE,
  DEFAULT_WALL_COORDINATES,
  MouseInstance,
} from "./maze.constant";
import { useMaze } from "./maze.hook";

export default function MazeContainer() {
  const ratCoordinate = useObservable(MouseInstance.coordinate$);
  const [cheeseCoordinate, setCheeseCoordinate] = useState(
    DEFAULT_CHEESE_COORDINATE
  );
  const { cells } = useMaze({
    size: 8,
    coordinates: {
      rat: ratCoordinate,
      cheese: cheeseCoordinate,
      wall: DEFAULT_WALL_COORDINATES,
    },
  });

  useEffect(() => {
    appEmitter.on("run-code", () => solve(cells));

    return () => appEmitter.off("run-code");
  }, [cells]);

  useInterval(() => MouseInstance.move(), 100);

  return (
    <Maze
      size={8}
      cells={cells}
      onMouseCellDrag={({ to }) => {
        MouseInstance.set([Math.floor(to / 8), to % 8]);
      }}
      onCheeseCellDrag={({ to }) => {
        setCheeseCoordinate([Math.floor(to / 8), to % 8]);
      }}
    />
  );
}
