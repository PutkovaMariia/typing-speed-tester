import { useMemo } from "react";

export function useTypingStats(charIndex: number, mistakes: number, timeLeft: number, maxTime: number) {
    const stats = useMemo(() => {
        if (timeLeft === maxTime) return { WPM: 0, CPM: 0 };

        const correctChars = charIndex - mistakes;
        const elapsedTime = maxTime - timeLeft;
        const cpm = Math.max(0, Math.round((correctChars * 60) / elapsedTime));
        const wpm = Math.max(0, Math.round((correctChars / 5) * 60 / elapsedTime));

        return { WPM: wpm, CPM: cpm };
    }, [charIndex, mistakes, timeLeft, maxTime]);

    return { stats };
}
