import { useCallback, useMemo, useRef } from "react";
import { paragraphs } from "@/const/ParagraphsData";

export function useParagraphLoader() {
    const lastIndexRef = useRef<number | null>(null);

    const nextIndex = useCallback(() => {
        if (paragraphs.length <= 1) return 0;
        let i: number;
        do {
            i = Math.floor(Math.random() * paragraphs.length);
        } while (i === lastIndexRef.current);
        lastIndexRef.current = i;
        return i;
    }, []);

    const loadParagraph = useCallback((): string => {
        return paragraphs[nextIndex()];
    }, [nextIndex]);

    const getByIndex = useCallback((i: number): string => {
        const len = paragraphs.length;
        if (len === 0) return "";
        const idx = ((i % len) + len) % len;
        lastIndexRef.current = idx;
        return paragraphs[idx];
    }, []);

    return useMemo(
        () => ({
            loadParagraph,
            getByIndex,
            count: paragraphs.length,
        }),
        [loadParagraph, getByIndex]
    );
}
