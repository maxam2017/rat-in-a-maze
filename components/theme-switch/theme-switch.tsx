import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SunIcon from "assets/svg/sun.svg";
import MoonIcon from "assets/svg/moon.svg";
import styles from "./theme-switch.module.css";
import { useMounted } from "hooks";

export default function ThemeSwitch() {
  const mounted = useMounted();
  const { theme, setTheme } = useTheme();

  if (!mounted) return null;

  return (
    <AnimatePresence exitBeforeEnter={true}>
      <motion.div
        key={theme}
        className={styles.button}
        initial={{ rotate: 0 }}
        exit={{ rotate: 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <SunIcon onClick={() => setTheme("light")} />
        ) : (
          <MoonIcon onClick={() => setTheme("dark")} />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
