import { useCallback, useEffect, useRef } from "react";

export function useInputFocus() {
    const inputRef = useRef<HTMLInputElement>(null);

    const focusInput = useCallback(() => {  // ← Add useCallback here
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []); // ← Empty dependency array

    useEffect(() => {
        const handleGlobalKeydown = () => {
            focusInput();
        };

        document.addEventListener("keydown", handleGlobalKeydown);
        return () => document.removeEventListener("keydown", handleGlobalKeydown);
    }, [focusInput]);

    return { inputRef, focusInput };
}
