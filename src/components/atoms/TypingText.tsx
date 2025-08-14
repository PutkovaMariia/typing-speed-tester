import React from "react";

interface TypingTextProps {
    text: React.ReactElement[];
}

export default function TypingText({ text }: TypingTextProps) {
    return (
        <div className="section1">
            <p id="paragraph">{text}</p>
        </div>
    );
}
