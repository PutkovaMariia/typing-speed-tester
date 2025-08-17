"use client";

import ButtonMain from "@/components/atoms/ButtonMain";
import TypingText from "@/components/atoms/TypingText";
import { useTypingGameContext } from "@/contexts/TypingGameContext";
import ResultsAria from "@/components/molecules/ResultsAria";
import { content } from "@/const/contentTyped";

export default function TypingArea() {
    const { typingText, inpFieldValue, charIndex, resetGame } = useTypingGameContext();

    return (
    <div className="size-full">
        <TypingText text={typingText} typed={inpFieldValue} charIndex={charIndex} />
      <div className="size-full flex flex-col lg:flex-row items-center justify-center gap-x-25 gap-y-10 mt-10 lg:mt-5">
        <ResultsAria />
        <ButtonMain action={resetGame} text={content.restartButton} />
      </div>
    </div>
  );
}
