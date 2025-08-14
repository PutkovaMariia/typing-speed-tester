import React from "react";

export default function Wrapper({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="w-full font-sans grid grid-rows-[20px_1fr_20px]
            items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            {children}
        </div>
    )
}
