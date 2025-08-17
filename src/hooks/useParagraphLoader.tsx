import { useMemo } from "react";
import { paragraphs } from "@/const/ParagraphsData";

export function useParagraphLoader() {
  return useMemo(
    () => ({
      loadParagraph: () => {
        const ranIndex = Math.floor(Math.random() * paragraphs.length);
        return Array.from(paragraphs[ranIndex]).map((letter, index) => (
          <span
            key={index}
            className={`char ${letter === " " ? "space" : ""} ${index === 0 ? "active" : ""}`}
          >
            {letter === " " ? " " : letter}
          </span>
        ));
      },
    }),
    [],
  );
}
