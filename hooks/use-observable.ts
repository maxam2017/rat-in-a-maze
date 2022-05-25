import { useEffect, useState } from "react";
import { Observable } from "utils";

export function useObservable<T>(observable: Observable<T>): T {
  const [value, setValue] = useState(() => observable.value());

  useEffect(() => {
    const unsubscribe = observable.subscribe((value) => {
      setValue(value);
    });

    return () => unsubscribe();
  });

  return value;
}
