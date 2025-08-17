"use client";
import { forwardRef, InputHTMLAttributes } from "react";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

const TypingInput = forwardRef<HTMLInputElement, Props>(function TypingInput(props, ref) {
  return (
      <input
          {...props}
          ref={ref}
          type="text"
          inputMode="text"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          // overlay the text area; tap anywhere → focus → keyboard opens
          className="absolute inset-0 h-full w-full opacity-0 z-10"
      />
  );
});

export default TypingInput;
