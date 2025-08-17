import { ChangeEvent, SetStateAction, KeyboardEvent, useCallback } from "react";

export function useGameLogic() {
  const handleKeyDown = useCallback(
    (
      event: KeyboardEvent<HTMLInputElement>,
      charIndex: number,
      timeLeft: number,
      setMistakes: (value: SetStateAction<number>) => void,
      setCharIndex: (value: SetStateAction<number>) => void,
      moveBack: (current: Element, prev: Element) => void,
    ) => {
      const characters = document.querySelectorAll(".char");
      if (
        event.key === "Backspace" &&
        charIndex > 0 &&
        charIndex < characters.length &&
        timeLeft > 0
      ) {
        if (characters[charIndex - 1].classList.contains("correct")) {
          characters[charIndex - 1].classList.remove("correct");
        }
        if (characters[charIndex - 1].classList.contains("wrong")) {
          characters[charIndex - 1].classList.remove("wrong");
          setMistakes((prev) => prev - 1);
        }
        moveBack(characters[charIndex], characters[charIndex - 1]);
        setCharIndex((prev) => prev - 1);
      }
    },
    [],
  );

  const initTyping = useCallback(
    (
      event: ChangeEvent<HTMLInputElement>,
      charIndex: number,
      timeLeft: number,
      isTyping: boolean,
      setIsTyping: (value: SetStateAction<boolean>) => void,
      setCharIndex: (value: SetStateAction<number>) => void,
      setMistakes: (value: SetStateAction<number>) => void,
      markCorrect: (current: Element, next?: Element) => void,
      markWrong: (current: Element, next?: Element) => void,
    ) => {
      const characters = document.querySelectorAll(".char");
      const typedChar = event.target.value;
      if (charIndex < characters.length && timeLeft > 0) {
        let currentChar = characters[charIndex].textContent || "";
        if (currentChar === "_") currentChar = " ";
        if (!isTyping) {
          setIsTyping(true);
        }
        if (typedChar === currentChar) {
          setCharIndex((prev) => prev + 1);
          const nextChar =
            charIndex + 1 < characters.length
              ? characters[charIndex + 1]
              : undefined;
          markCorrect(characters[charIndex], nextChar);
        } else {
          setCharIndex((prev) => prev + 1);
          setMistakes((prev) => prev + 1);
          const nextChar =
            charIndex + 1 < characters.length
              ? characters[charIndex + 1]
              : undefined;
          markWrong(characters[charIndex], nextChar);
        }

        if (charIndex === characters.length - 1) setIsTyping(false);
      } else {
        setIsTyping(false);
      }
    },
    [],
  );

  return {
    handleKeyDown,
    initTyping,
  };
}
