export type StatKey = "time" | "mistakes" | "wpm" | "cpm";

export interface StatConfig {
  label: string;
  hint: string;
  suffix?: string;
}

export interface AppContent {
  title: string;
  subtitle: string;
  restartButton: string;
  stats: { order: StatKey[] } & Record<StatKey, StatConfig>;
}
