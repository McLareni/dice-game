export type Condition = "greater" | "less";

export type GameResult = {
  time: string;
  guess: string;
  value: number;
  success: boolean;
};
