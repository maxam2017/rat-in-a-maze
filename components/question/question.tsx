import styles from "./question.module.scss";

export default function Question() {
  return (
    <div className={styles.question}>
      <h2 className={styles.question__title}>
        The Rat in a Maze
        <p className={styles.question__subtitle}>medium</p>
      </h2>
      <article className={styles.question__content}>
        According to legend, in ancient Greece, Icarus, the son of the creator
        of the Labyrinth, built a pair of wings to fly to escape the maze.
        However, the 🐭 can&#39;t fly, but he likes to eat 🧀️. Can you help
        him?
      </article>
    </div>
  );
}
