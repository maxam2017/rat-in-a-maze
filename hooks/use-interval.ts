import { useEffect } from "react";

const DEFAULT_INTERVAL_MS = 500;

export function useInterval(fn: () => void, ms: number = DEFAULT_INTERVAL_MS) {
  useEffect(() => {
    const timer = window.setInterval(fn, ms);

    return () => window.clearInterval(timer);
  }, [fn, ms]);
}
