import { useTypingGameContext } from "@/contexts/TypingGameContext";
import {ReactNode, useMemo} from "react";
import ResultItem from "@/components/atoms/ResultItem";
import { content, type StatKey } from "@/const/contentTyped";

export default function ResultsAria() {
    const { timeLeft, mistakes, WPM, CPM } = useTypingGameContext();

    const values = useMemo<Record<StatKey, ReactNode>>(
        () => ({
            time: <b>{timeLeft}</b>,
            mistakes,
            wpm: WPM,
            cpm: CPM,
        }),
        [timeLeft, mistakes, WPM, CPM]
    );

  return (
      <ul className="flex w-full justify-between items-center gap-6 overflow-visible">
          {content.stats.order.map((k) => {
              const {label, hint, suffix} = content.stats[k];
              return (
                  <ResultItem
                      key={k}
                      label={label}
                      value={values[k]}
                      suffix={suffix}
                      hint={hint}
                  />
              );
          })}
      </ul>
  );
}
