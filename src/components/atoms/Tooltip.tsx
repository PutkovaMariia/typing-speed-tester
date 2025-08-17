import { ReactNode, useId } from "react";

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
}

export default function Tooltip({ content, children }: TooltipProps) {
  const id = useId();

  return (
    <div className="relative group inline-block">
      <div aria-describedby={id} tabIndex={0}>
        {children}
      </div>

      <div
        role="tooltip"
        id={id}
        className=" absolute z-40 pointer-events-none opacity-0 transition-opacity group-hover:opacity-100
                group-focus-within:opacity-100 top-0 left-1/2 -translate-x-1/2 -translate-y-full mt-2 sm:left-full sm:translate-x-0
                sm:mt-0 sm:ml-2"
      >
        <div className="rounded-md border border-gray-300 bg-gray-100 text-gray-600 text-xs px-2 py-1 shadow-md w-20">
          {content}
        </div>
      </div>
    </div>
  );
}
