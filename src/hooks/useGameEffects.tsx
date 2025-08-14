import {SetStateAction, useEffect} from "react";

export function useGameEffects(
    loadParagraph: () => void,
    isTyping: boolean,
    timeLeft: number,
    startTimer: () => void,
    stopTimer: () => void,
    setIsTyping: (value: SetStateAction<boolean>) => void
) {
    useEffect(() => {
        loadParagraph();
    }, [loadParagraph]);

    useEffect(() => {
        if (isTyping && timeLeft > 0) {
            startTimer();
        } else if (timeLeft === 0) {
            setIsTyping(false);
        }
        return () => {
            stopTimer();
        };
    }, [isTyping, timeLeft, startTimer, stopTimer, setIsTyping]);
}
