import styles from "./maze.module.scss";
import { CellType, MazeProps } from "./maze.type";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { useMaze } from "./maze.hook";

/**
 * variants for `framer-motion`
 */
const GridVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.01 } },
};

const CellVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CellMap = {
  [CellType.Rat]: "🐭",
  [CellType.Cheese]: "🧀️",
  [CellType.Empty]: "",
  [CellType.Wall]: "",
};

/**
 * @description a maze component with `rat`, `cheese` and `wall` cells.
 */
export default function Maze({ size, coordinates }: MazeProps) {
  const { cells } = useMaze({ size, coordinates });

  return (
    <motion.div
      variants={GridVariants}
      initial="hidden"
      animate="show"
      className={styles.grid}
      style={{ "--maze-size": String(size) } as any}
    >
      <AnimatePresence>
        {cells.map((cell, index) => {
          const classnames = clsx(styles.grid__cell, {
            [styles["grid__cell--wall"]]: cell === CellType.Wall,
          });

          return (
            <motion.div
              key={index}
              variants={CellVariants}
              className={classnames}
            >
              {CellMap[cell]}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}
