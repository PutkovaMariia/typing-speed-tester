"use client";

import { useTypingGameContext } from "@/contexts/TypingGameContext";

export default function TypingInput() {
  const { inpFieldValue, initTyping, handleKeyDown, inputRef } =
    useTypingGameContext();

  return (
    <input
      ref={inputRef}
      type="text"
      className="absolute opacity-0 -z-999"
      value={inpFieldValue}
      onChange={initTyping}
      onKeyDown={handleKeyDown}
      autoFocus
    />
  );
}
