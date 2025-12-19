import { StoryState } from "@/type/story.type";
import { Condition, GameResult } from "@/type/type.type";
import { create } from "zustand";

const MAX_HISTORY = 10;

const useStore = create<StoryState>((set) => ({
  history: [] as GameResult[],
  changeHistory: (newEntry: GameResult) =>
    set((state) => ({
      history: [newEntry, ...state.history.slice(0, MAX_HISTORY)],
    })),

  condition: "greater",
  setCondition: (condition: Condition) =>
    set({
      condition,
    }),

  threshold: 50,
  setThreshold: (threshold: number) =>
    set({
      threshold,
    }),

  lastResult: null,
  setLastResult: (result: GameResult | null) =>
    set({
      lastResult: result,
    }),
}));

export default useStore;
