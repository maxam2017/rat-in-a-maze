import CodeEditor from "components/code-editor";
import MazeContainer from "components/maze/maze-container";
import Question from "components/question";
import type { NextPage } from "next";
import styles from "../assets/stylesheet/home.module.scss";

import Play from "assets/svg/play.svg";
import appEmitter from "services/appEmitter";

const Home: NextPage = () => {
  const handleRun = () => {
    appEmitter.emit("run-code");
  };

  return (
    <div className={styles.view}>
      <div className={styles.view__col}>
        <Question />
        <MazeContainer />
        <p className={styles.maze__help}>You can drag 🐭 and 🧀️！</p>
      </div>
      <div className={styles.view__col}>
        <CodeEditor />
        <footer className={styles.footer}>
          <button disabled className={styles["button--reset"]}>
            Reset
          </button>
          <button className={styles["button--submit"]} onClick={handleRun}>
            <Play />
            Run Code
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Home;
