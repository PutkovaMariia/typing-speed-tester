interface TypingTextProps {
    text: string;
    typed: string;
    charIndex: number;
}

export default function TypingText({ text, typed, charIndex }: TypingTextProps) {
    return (
        <div className="border-b border-gray-300 pb-5">
            <p className="typing-text text-xl whitespace-pre-wrap break-words text-left">
                {text.split("").map((ch, i) => {
                    let cls = "char";
                    if (i < typed.length) cls += typed[i] === ch ? " correct" : " wrong";
                    if (i === charIndex) cls += " active";
                    return (
                        <span key={i} className={cls}>
              {ch}
            </span>
                    );
                })}
            </p>
        </div>
    );
}
