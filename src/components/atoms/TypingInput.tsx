import {forwardRef} from "react";

interface TypingInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TypingInput = forwardRef<HTMLInputElement, TypingInputProps>(
    ({ value, onChange, onKeyDown }, ref) => {
        return (
            <input
                ref={ref}
                type="text"
                className="input-field"
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                autoFocus
            />
        );
    }
);

TypingInput.displayName = 'TypingInput';

export default TypingInput;
