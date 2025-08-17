import rawContent from "@/const/content.json";
import type { AppContent, StatKey, StatConfig } from "@/types/content";

export const content = rawContent as AppContent;
export type { AppContent, StatKey, StatConfig };
