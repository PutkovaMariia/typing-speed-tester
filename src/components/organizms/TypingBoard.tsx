import TypingArea from "@/components/molecules/TypingAria";
import TypingInput from "@/components/atoms/TypingInput";
import { TypingGameProvider } from "@/contexts/TypingGameContext";

export default function TypingBoard() {
  return (
    <TypingGameProvider>
      <main
        className="w-full lg:w-2/3 max-w-6xl rounded-2xl shadow-xl flex flex-col gap-8 items-center
                       border border-gray-300 p-6 lg:p-10"
      >
        <TypingInput />
        <TypingArea />
      </main>
    </TypingGameProvider>
  );
}
