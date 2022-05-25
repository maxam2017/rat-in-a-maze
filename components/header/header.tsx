import ThemeSwitch from "components/theme-switch";
import styles from "./header.module.scss";
import Github from "assets/svg/github.svg";
import Link from "next/link";

function GithubLink() {
  return (
    <Link href="https://github.com/maxam2017/rat-in-a-maze" passHref={true}>
      <a title="GitHub" className={styles.header__addon__link}>
        <Github data-tip="hello world" className={styles.header__addon__link} />
      </a>
    </Link>
  );
}

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>🐭 in a Maze</h1>
      <div className={styles.header__addon}>
        <ThemeSwitch />
        <GithubLink />
      </div>
    </header>
  );
}
