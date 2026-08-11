import { useEffect, useState } from "react";

type NTTopic<T> = {
  subscribe: (callback: (value: T) => void) => number;
  unsubscribe: (subuid: number) => void;
  getValue: () => T;
};

export function useNTValue<T>(
  topic: NTTopic<T>,
  initialValue: NonNullable<T>
): NonNullable<T> {
  const [value, setValue] = useState<NonNullable<T>>(
    (topic.getValue() ?? initialValue) as NonNullable<T>
  );

  useEffect(() => {
    const id = topic.subscribe((newValue) => {
      setValue((newValue ?? initialValue) as NonNullable<T>);
    });

    return () => topic.unsubscribe(id);
  }, [topic, initialValue]);

  return value;
}