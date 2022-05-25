export function isMacOS() {
  return (
    typeof window !== "undefined" && navigator.userAgent.includes("Mac OS X")
  );
}
