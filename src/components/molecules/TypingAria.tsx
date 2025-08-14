import React from 'react';
import ButtonMain from "@/components/atoms/ButtonMain";

interface TypingAreaProps {
    typingText: React.ReactElement[],
    timeLeft: number,
    mistakes: number,
    WPM: number,
    CPM: number,
    resetGame: () => void,
}

export default function TypingArea ({
                        typingText,
                        timeLeft,
                        mistakes,
                        WPM,
                        CPM,
                        resetGame,
                    }: TypingAreaProps) {
    return (
        <div>
            <div className="section1">
                <p id="paragraph">{typingText}</p>
            </div>
            <div className="section2">
                <ul className="resultDetails">
                    <li className="time">
                        <p>Time Left:</p>
                        <span>
              <b>{timeLeft}</b>s
            </span>
                    </li>
                    <li className="mistake">
                        <p>Mistakes:</p>
                        <span>{mistakes}</span>
                    </li>
                    <li className="wpm">
                        <p>WPM:</p>
                        <span>{WPM}</span>
                    </li>
                    <li className="cpm">
                        <p>CPM:</p>
                        <span>{CPM}</span>
                    </li>
                </ul>
                < ButtonMain action={resetGame} text={'Try Again'} />
            </div>
        </div>
    );
};
