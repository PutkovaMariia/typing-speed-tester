import { ReactElement, useState } from "react";

export function useTypingState() {
  const [typingText, setTypingText] = useState<ReactElement[]>([]);
  const [inpFieldValue, setInpFieldValue] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  return {
    // State
    typingText,
    inpFieldValue,
    charIndex,
    mistakes,
    isTyping,

    // Setters
    setTypingText,
    setInpFieldValue,
    setCharIndex,
    setMistakes,
    setIsTyping,
  };
}
