import { useCallback, useEffect, useRef, useState } from "react";

export function useGameTimer(maxTime: number) {
    const [timeLeft, setTimeLeft] = useState(maxTime);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startTimer = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);
    }, []);

    const stopTimer = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    const resetTimer = useCallback(() => {
        stopTimer();
        setTimeLeft(maxTime);
    }, [maxTime, stopTimer]);

    // Auto-stop when time runs out
    useEffect(() => {
        if (timeLeft === 0) {
            stopTimer();
        }
    }, [timeLeft, stopTimer]);

    return {
        timeLeft,
        setTimeLeft,
        startTimer,
        stopTimer,
        resetTimer
    };
}
