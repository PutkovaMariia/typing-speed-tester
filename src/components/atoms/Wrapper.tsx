import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="font-lato min-h-svh w-full flex flex-col">{children}</div>
  );
}
