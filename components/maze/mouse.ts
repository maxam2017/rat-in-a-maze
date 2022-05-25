import type { Coordinate as _Coordinate } from "components/maze/maze.type";
import { Observable } from "utils";
import { Coordinate } from "./maze.util";

interface MouseInterface {
  coordinate$: Observable<_Coordinate>;
  set(coordinate: _Coordinate): void;
  flag(coordinate: _Coordinate): void;
  move(): void;
}

/**
 * flag then move (generator-like)
 */
export default class Mouse implements MouseInterface {
  coordinate$: Observable<_Coordinate>;

  constructor(coordinate: _Coordinate) {
    this.coordinate$ = new Observable(coordinate);
  }

  flag = (coordinate: _Coordinate) => {
    const prev = this.coordinate$.previous();
    const track = Coordinate.track(prev, coordinate);

    if (!track) {
      // throw new Error(`🐭: can't move to (${coordinate})`);
      this.coordinate$.yield(coordinate);
    } else {
      track
        .filter((_, index) => index !== 0)
        .forEach(([x, y]) => {
          this.coordinate$.yield([x, y]);
        });
    }

    return this;
  };

  move = () => {
    this.coordinate$.next();

    return this;
  };

  set = (coordinate: _Coordinate) => {
    this.coordinate$.set(coordinate);
  };
}
