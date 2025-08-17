import { useState } from "react";

export function useTypingState() {
  const [typingText, setTypingText] = useState<string>("");
  const [inpFieldValue, setInpFieldValue] = useState<string>("");
  const [charIndex, setCharIndex] = useState<number>(0);
  const [mistakes, setMistakes] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  return {
    typingText, setTypingText,
    inpFieldValue, setInpFieldValue,
    charIndex, setCharIndex,
    mistakes, setMistakes,
    isTyping, setIsTyping,
  };
}
