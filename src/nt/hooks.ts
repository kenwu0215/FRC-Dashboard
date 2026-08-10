import { useEffect, useState } from "react";

export function useNTValue<T>(
    topic: {
        subscribe: (
            callback: (value: T) => void
        ) => number;

        unsubscribe: (
            subuid: number
        ) => void;

        getValue: () => T | null;
    },
    initialValue: T,
): T {
    const [value, setValue] = useState<T>(
        topic.getValue() ?? initialValue
    );

    useEffect(() => {
        const subscriptionId = topic.subscribe((newValue) => {
            setValue(newValue);
        });

        return () => {
            topic.unsubscribe(subscriptionId);
        };
    }, [topic]);

    return value;
}