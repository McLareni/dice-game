import { Condition, GameResult } from "./type.type";

export interface StoryState {
  history: GameResult[];
  changeHistory: (newEntry: GameResult) => void;
  condition: Condition;
  setCondition: (condition: Condition) => void;
  threshold: number;
  setThreshold: (threshold: number) => void;
  lastResult?: GameResult | null;
  setLastResult: (result: GameResult | null) => void;
}
