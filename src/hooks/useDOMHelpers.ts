export function useDOMHelpers() {
    const markCorrect = (current: Element, next?: Element) => {
        current.classList.remove('active');
        current.classList.add('correct');
        if (next) next.classList.add('active');
    };

    const markWrong = (current: Element, next?: Element) => {
        current.classList.remove('active');
        current.classList.add('wrong');
        if (next) next.classList.add('active');
    };

    const moveBack = (current: Element, prev: Element) => {
        current.classList.remove('active');
        prev.classList.remove('correct', 'wrong');
        prev.classList.add('active');
    };

    const clearAllClasses = (characters: NodeListOf<Element>) => {
        characters.forEach(span => {
            span.classList.remove("correct", "wrong", "active");
        });
    };

    const setFirstActive = (characters: NodeListOf<Element>) => {
        if (characters[0]) {
            characters[0].classList.add('active');
        }
    };

    return {
        markCorrect,
        markWrong,
        moveBack,
        clearAllClasses,
        setFirstActive
    };
}
