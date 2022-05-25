import MazeContainer from "components/maze/maze-container";
import Question from "components/question";
import type { NextPage } from "next";
import styles from "../assets/stylesheet/home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.view}>
      <div className={styles.view__col}>
        <Question />
        <MazeContainer />
        <p className={styles.maze__help}>You can drag 🐭 and 🧀️！</p>
      </div>
      <div className={styles.view__col}></div>
    </div>
  );
};

export default Home;
