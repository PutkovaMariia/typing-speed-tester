"use client"

import TypingText from "@/components/atoms/TypingText";
import TypingInput from "@/components/atoms/TypingInput";
import ResultsAria from "@/components/molecules/ResultsAria";
import ButtonMain from "@/components/atoms/ButtonMain";
import { useTypingGameContext } from "@/contexts/TypingGameContext";
import { content } from "@/const/contentTyped";

export default function TypingArea() {
    const { typingText, inpFieldValue, charIndex, resetGame, handleKeyDown, initTyping, inputRef } =
        useTypingGameContext();

    return (
        <div className="size-full">
            <div className="relative">
                <TypingText text={typingText} typed={inpFieldValue} charIndex={charIndex} />
                <TypingInput
                    ref={inputRef}
                    value={inpFieldValue}
                    onChange={initTyping}
                    onKeyDown={handleKeyDown}
                />
            </div>

            <div className="size-full flex flex-col lg:flex-row items-center justify-center gap-x-25 gap-y-10 mt-10 lg:mt-5">
                <ResultsAria />
                <ButtonMain action={resetGame} text={content.restartButton} />
            </div>
        </div>
    );
}
