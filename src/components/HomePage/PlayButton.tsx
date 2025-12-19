"use client";

import { GameResult } from "@/type/type.type";
import { Button } from "@mui/material";
import useStore from "@/store/index";

export default function PlayButton() {
  const { condition, threshold, changeHistory, setLastResult } = useStore(
    (state) => state
  );

  const playGame = () => {
    const value = Math.floor(Math.random() * 100) + 1;
    const success =
      condition === "greater" ? value > threshold : value < threshold;
    const now = new Date();
    const time = now.toLocaleTimeString();

    const result: GameResult = {
      value,
      success,
      time,
      guess: `${condition === "greater" ? "Over" : "Under"} ${threshold}`,
    };

    setLastResult(result);
    changeHistory(result);
  };

  return (
    <Button
      variant="contained"
      fullWidth
      onClick={playGame}
      sx={{
        mb: 4,
        backgroundColor: "#9C27B0",
      }}
    >
      PLAY
    </Button>
  );
}
