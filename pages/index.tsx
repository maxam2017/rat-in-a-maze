import Maze from "components/maze";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Maze
      size={12}
      coordinates={{
        rat: [2, 4],
        cheese: [5, 1],
        wall: [
          [1, 2],
          [1, 3],
          [1, 4],
          [1, 5],
          [2, 5],
          [3, 5],
        ],
      }}
    />
  );
};

export default Home;
