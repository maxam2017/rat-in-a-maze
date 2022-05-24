import ThemeSwitch from "components/theme-switch";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>🐭 in a Maze</h1>
      <ThemeSwitch />
    </header>
  );
}
