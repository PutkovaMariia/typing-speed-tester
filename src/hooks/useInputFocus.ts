import { useCallback, useEffect, useRef } from "react";

export function useInputFocus() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const handleGlobalKeydown = () => {
      focusInput();
    };

    document.addEventListener("keydown", handleGlobalKeydown);
    return () => document.removeEventListener("keydown", handleGlobalKeydown);
  }, [focusInput]);

  return { inputRef, focusInput };
}
