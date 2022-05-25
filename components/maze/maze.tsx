import styles from "./maze.module.scss";
import { CellType, MazeProps } from "./maze.type";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { useDragCell, useMaze } from "./maze.hook";

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

type CellState = {
  type: CellType;
  from: number;
  to: number;
};

interface MazeComponentProps extends MazeProps {
  onMouseCellDrag?(cell: CellState): void;
  onEmptyCellDrag?(cell: CellState): void;
  onCheeseCellDrag?(cell: CellState): void;
}

/**
 * @description a maze component with `rat`, `cheese` and `wall` cells.
 */
export default function Maze({
  size,
  coordinates,
  onMouseCellDrag,
  onEmptyCellDrag,
  onCheeseCellDrag,
}: MazeComponentProps) {
  const { cells } = useMaze({ size, coordinates });
  const handleDragEnd = (cell: CellState) => {
    switch (cell.type) {
      case CellType.Rat:
        return onMouseCellDrag?.(cell);
      case CellType.Cheese:
        return onCheeseCellDrag?.(cell);
      case CellType.Empty:
        return onEmptyCellDrag?.(cell);
      case CellType.Wall:
        return;
    }
  };

  const { handlers, cellState } = useDragCell({ onDragEnd: handleDragEnd });

  return (
    <motion.div
      variants={GridVariants}
      initial="hidden"
      animate="show"
      className={styles.grid}
      style={{ "--maze-size": String(size) } as any}
      {...handlers}
    >
      <AnimatePresence>
        {cells.map((cell, index) => {
          const isHovering =
            cellState.type &&
            (cellState.to === index || cellState.from === index);

          const classnames = clsx(styles.grid__cell, {
            [styles["grid__cell--wall"]]: cell === CellType.Wall,
            [styles["grid__cell--hovering"]]: isHovering,
          });

          const el = (() => {
            if (cellState.from === index && cellState.to) return null;
            if (cellState.type && cellState.to === index) {
              return CellMap[cellState.type];
            }

            return CellMap[cell];
          })();

          return (
            <motion.div
              key={index}
              variants={CellVariants}
              className={classnames}
              data-cell-type={cell}
              data-cell-index={index}
            >
              {el}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}
