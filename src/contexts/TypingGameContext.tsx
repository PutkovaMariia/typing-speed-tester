"use client";

import { createContext, useContext, useMemo, PropsWithChildren } from "react";
import { useTypingGame } from "@/hooks/useTypingGame";

type TypingGameValue = ReturnType<typeof useTypingGame>;

const TypingGameContext = createContext<TypingGameValue | undefined>(undefined);

export function TypingGameProvider({ children }: PropsWithChildren) {
  const value = useTypingGame();

  const memo = useMemo(() => value, [value]);

  return (
    <TypingGameContext.Provider value={memo}>
      {children}
    </TypingGameContext.Provider>
  );
}

export function useTypingGameContext() {
  const ctx = useContext(TypingGameContext);
  if (!ctx) {
    throw new Error(
      "useTypingGameContext must be used within <TypingGameProvider>",
    );
  }
  return ctx;
}
