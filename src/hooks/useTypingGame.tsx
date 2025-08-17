"use client";

import React, { useCallback } from "react";
import { useTypingStats } from "@/hooks/useTypingStats";
import { useGameTimer } from "@/hooks/useGameTimer";
import { useParagraphLoader } from "@/hooks/useParagraphLoader";
import { useDOMHelpers } from "@/hooks/useDOMHelpers";
import { useInputFocus } from "@/hooks/useInputFocus";
import { useTypingState } from "@/hooks/useTypingState";
import { useGameLogic } from "@/hooks/useGameLogic";
import { useGameEffects } from "@/hooks/useGameEffects";

export function useTypingGame() {
  const typingState = useTypingState();
  const gameTimer = useGameTimer(60);
  const { inputRef, focusInput } = useInputFocus();
  const paragraphLoader = useParagraphLoader();
  const domHelpers = useDOMHelpers();
  const stats = useTypingStats(
    typingState.charIndex,
    typingState.mistakes,
    gameTimer.timeLeft,
    60,
  );
  const gameLogic = useGameLogic();

  // === FUNCTIONS ===
  const loadParagraph = useCallback(() => {
    const content = paragraphLoader.loadParagraph();
    focusInput(); // ← Use focusInput instead of manual focus
    typingState.setTypingText(content);
    typingState.setInpFieldValue("");
    typingState.setCharIndex(0);
    typingState.setMistakes(0);
    typingState.setIsTyping(false);
  }, [paragraphLoader, focusInput]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      gameLogic.handleKeyDown(
        event,
        typingState.charIndex,
        gameTimer.timeLeft,
        typingState.setMistakes,
        typingState.setCharIndex,
        domHelpers.moveBack,
      );
    },
    [
      gameLogic,
      typingState.charIndex,
      typingState.setMistakes,
      typingState.setCharIndex,
      gameTimer.timeLeft,
      domHelpers.moveBack,
    ],
  );

  const initTyping = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      gameLogic.initTyping(
        event,
        typingState.charIndex,
        gameTimer.timeLeft,
        typingState.isTyping,
        typingState.setIsTyping,
        typingState.setCharIndex,
        typingState.setMistakes,
        domHelpers.markCorrect,
        domHelpers.markWrong,
      );
    },
    [
      gameLogic,
      typingState.charIndex,
      typingState.isTyping,
      typingState.setIsTyping,
      typingState.setCharIndex,
      typingState.setMistakes,
      gameTimer.timeLeft,
      domHelpers.markCorrect,
      domHelpers.markWrong,
    ],
  );

  const resetGame = useCallback(() => {
    typingState.setIsTyping(false);
    gameTimer.resetTimer();
    typingState.setCharIndex(0);
    typingState.setMistakes(0);
    typingState.setTypingText([]);
    const characters = document.querySelectorAll(".char");
    domHelpers.clearAllClasses(characters);
    domHelpers.setFirstActive(characters);
    loadParagraph();
  }, [typingState, gameTimer, domHelpers, loadParagraph]);

  useGameEffects(
    loadParagraph,
    typingState.isTyping,
    gameTimer.timeLeft,
    gameTimer.startTimer,
    gameTimer.stopTimer,
    typingState.setIsTyping,
  );

  // === RETURN VALUES ===
  return {
    // State
    typingText: typingState.typingText,
    inpFieldValue: typingState.inpFieldValue,
    timeLeft: gameTimer.timeLeft,
    charIndex: typingState.charIndex,
    mistakes: typingState.mistakes,
    isTyping: typingState.isTyping,

    // Refs
    inputRef,

    // Computed
    WPM: stats?.stats?.WPM || 0,
    CPM: stats?.stats?.CPM || 0,

    // Functions
    loadParagraph,
    handleKeyDown,
    initTyping,
    resetGame,

    // Setters (if needed)
    setInpFieldValue: typingState.setInpFieldValue,
  };
}
