import {useMemo} from "react";
import {paragraphs} from "@/const/ParagraphsData";

export function useParagraphLoader() {
    // Use useMemo to create the loader object once
    return useMemo(() => ({
        loadParagraph: () => {
            const ranIndex = Math.floor(Math.random() * paragraphs.length);
            return Array.from(paragraphs[ranIndex]).map((letter, index) => (
                <span
                    key={index}
                    style={{color: (letter !== ' ') ? 'black' : 'transparent'}}
                    className={`char ${index === 0 ? 'active' : ''}`}
                >
                    {(letter !== ' ') ? letter : '_'}
                </span>
            ));
        }
    }), []);
}
