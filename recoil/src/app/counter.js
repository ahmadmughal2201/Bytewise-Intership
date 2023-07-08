"use client";
import { useState } from 'react';

export function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    };

    return {
        count,
        increment,
        decrement,
    };
}
