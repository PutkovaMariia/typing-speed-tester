"use client";

import {useTypingGame} from "@/hooks/useTypingGame";
import TypingArea from "@/components/molecules/TypingAria";
import TypingInput from "@/components/atoms/TypingInput";

export default function TypingBoard() {
    const {
        typingText,
        inpFieldValue,
        timeLeft,
        mistakes,
        WPM,
        CPM,
        inputRef,
        handleKeyDown,
        initTyping,
        resetGame
    } = useTypingGame();

    return (
        <main className="rounded-2xl shadow-xl flex flex-col gap-[32px] row-start-2 items-center p-10 border border-gray-300">
            <TypingInput
                value={inpFieldValue}
                onChange={initTyping}
                onKeyDown={handleKeyDown}
                ref={inputRef}
            />
            <TypingArea
                typingText={typingText}
                timeLeft={timeLeft}
                mistakes={mistakes}
                WPM={WPM}
                CPM={CPM}
                resetGame={resetGame}
            />
        </main>
    );
}
