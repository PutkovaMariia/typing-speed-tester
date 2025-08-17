import { ChangeEvent, Dispatch, SetStateAction, KeyboardEvent } from "react";

export function useGameLogic() {
  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    timeLeft: number,
  ) => {
    if (timeLeft <= 0) e.preventDefault();
  };

  const initTyping = (
    e: ChangeEvent<HTMLInputElement>,
    sourceText: string,
    timeLeft: number,
    isTyping: boolean,
    setIsTyping: (v: boolean) => void,
    setInpFieldValue: Dispatch<SetStateAction<string>>,
    setCharIndex: Dispatch<SetStateAction<number>>,
    setMistakes: Dispatch<SetStateAction<number>>,
  ) => {
    if (timeLeft <= 0) return;
    const val = e.target.value;

    if (!isTyping) setIsTyping(true);
    setInpFieldValue(val);
    setCharIndex(Math.min(val.length, sourceText.length));

    let m = 0;
    for (let i = 0; i < val.length && i < sourceText.length; i++) {
      if (val[i] !== sourceText[i]) m++;
    }
    setMistakes(m);
  };

  return { handleKeyDown, initTyping };
}
