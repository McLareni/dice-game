"use client";
import useStore from "@/store";
import { Box, Typography } from "@mui/material";

export default function RandomResult() {
  const lastResult = useStore((state) => state.lastResult);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={200}
      sx={{ mb: 2, p: 2, bgcolor: "#f5f5f5", borderRadius: 1 }}
    >
      <Typography
        sx={{
          fontSize: "96px",
          lineHeight: 1,
        }}
      >
        {lastResult ? lastResult.value : "-"}
      </Typography>
    </Box>
  );
}
