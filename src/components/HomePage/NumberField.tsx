"use client";

import useStore from "@/store";
import { Box, Slider, Typography } from "@mui/material";

export default function NumberField() {
  const threshold = useStore((state) => state.threshold);
  const setThreshold = useStore((state) => state.setThreshold);

  const marks = Array.from({ length: 11 }, (_, i) => ({
    value: i * 20,
  }));

  return (
    <Box sx={{ mb: 2 }}>
      <Slider
        value={threshold}
        onChange={(_, value) => setThreshold(value as number)}
        min={0}
        max={100}
        valueLabelDisplay="auto"
        marks={marks}
        sx={{
          color: "#9C27B0", // sets the main slider color
          "& .MuiSlider-thumb": {
            border: "2px solid #fff", // optional: white border for better contrast
          },
          "& .MuiSlider-rail": {
            color: "#D1C4E9", // optional: lighter color for rail
          },
        }}
      />
      <Box sx={{ fontSize: "14px", opacity: 0.6 }}>
        <Typography sx={{ float: "left" }}>0</Typography>
        <Typography sx={{ float: "right" }}>100</Typography>
      </Box>
    </Box>
  );
}
