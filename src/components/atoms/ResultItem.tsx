"use client";

import { ReactNode } from "react";
import Tooltip from "@/components/atoms/Tooltip";

interface ResultItemProps {
  label: string;
  value: ReactNode;
  suffix?: ReactNode;
  hint?: ReactNode;
}

export default function ResultItem({
  label,
  value,
  suffix,
  hint,
}: ResultItemProps) {
  const body = (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <span className="text-base font-medium">
        {value}
        {suffix ? <> {suffix}</> : null}
      </span>
    </div>
  );

  return (
    <li className="relative">
      {hint ? <Tooltip content={hint}>{body}</Tooltip> : body}
    </li>
  );
}
