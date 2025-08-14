interface TypingStatsProps {
    timeLeft: number;
    mistakes: number;
    WPM: number;
    CPM: number;
}

export default function TypingStats({ timeLeft, mistakes, WPM, CPM }: TypingStatsProps) {
    return (
        <ul className="resultDetails">
            <li className="time">
                <p>Time Left:</p>
                <span><b>{timeLeft}</b>s</span>
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
    );
}
