"use client";

import { Alert } from "@mui/material";

import useStore from "@/store";
import { use } from "react";

export default function AlertCustom() {
  const lastResult = useStore((state) => state.lastResult);
  const condition = useStore((state) => state.condition);

  if (!lastResult) {
    return null;
  }

  return (
    <Alert
      severity={lastResult.success ? "success" : "error"}
      sx={{
        mb: 2,
        backgroundColor: lastResult.success ? "#2E7D32" : "#D32F2F",
        fontSize: "16px",
        color: "white",
        "& .MuiAlert-icon": {
          color: "white",
        },
      }}
    >
      {lastResult.success ? "You won" : "You lost"}

      {!lastResult.success && (
        <p style={{ fontSize: "14px" }}>
          Number was {condition === "greater" ? "higher" : "lower"}
        </p>
      )}
    </Alert>
  );
}
