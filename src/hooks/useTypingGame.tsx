"use client";

import React, { useCallback } from "react";
import { useTypingStats } from "@/hooks/useTypingStats";
import { useGameTimer } from "@/hooks/useGameTimer";
import { useParagraphLoader } from "@/hooks/useParagraphLoader";
import { useInputFocus } from "@/hooks/useInputFocus";
import { useTypingState } from "@/hooks/useTypingState";
import { useGameLogic } from "@/hooks/useGameLogic";
import { useGameEffects } from "@/hooks/useGameEffects";

export function useTypingGame() {
  const {
    typingText, setTypingText,
    inpFieldValue, setInpFieldValue,
    charIndex, setCharIndex,
    mistakes, setMistakes,
    isTyping, setIsTyping,
  } = useTypingState();

  const { timeLeft, resetTimer, startTimer, stopTimer } = useGameTimer(60);

  const { inputRef, focusInput } = useInputFocus();
  const { loadParagraph: pickParagraph } = useParagraphLoader();
  const gameLogic = useGameLogic();

  const stats = useTypingStats(charIndex, mistakes, timeLeft, 60);

  const loadParagraph = useCallback(() => {
    const content = pickParagraph();
    focusInput();
    setTypingText(content);
    setInpFieldValue("");
    setCharIndex(0);
    setMistakes(0);
    setIsTyping(false);
  }, [
    pickParagraph,
    focusInput,
    setTypingText,
    setInpFieldValue,
    setCharIndex,
    setMistakes,
    setIsTyping,
  ]);

  const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>) => {
        gameLogic.handleKeyDown(event, timeLeft);
      },
      [gameLogic, charIndex, timeLeft, setCharIndex]
  );

  const initTyping = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        gameLogic.initTyping(
            event,
            typingText,
            timeLeft,
            isTyping,
            setIsTyping,
            setInpFieldValue,
            setCharIndex,
            setMistakes
        );
      },
      [
        gameLogic,
        typingText,
        charIndex,
        timeLeft,
        isTyping,
        setIsTyping,
        setInpFieldValue,
        setCharIndex,
        setMistakes,
      ]
  );

  const resetGame = useCallback(() => {
    setIsTyping(false);
    resetTimer();
    setCharIndex(0);
    setMistakes(0);
    setTypingText("");
    loadParagraph();
  }, [setIsTyping, resetTimer, setCharIndex, setMistakes, setTypingText, loadParagraph]);

  useGameEffects(
      loadParagraph,
      isTyping,
      timeLeft,
      startTimer,
      stopTimer,
      setIsTyping
  );

  return {
    typingText,
    inpFieldValue,
    timeLeft,
    charIndex,
    mistakes,
    isTyping,
    inputRef,
    WPM: stats?.stats?.WPM || 0,
    CPM: stats?.stats?.CPM || 0,
    loadParagraph,
    handleKeyDown,
    initTyping,
    resetGame,
    setInpFieldValue,
  };
}
