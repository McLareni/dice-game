"use client";

import useStore from "@/store";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

export default function ToogleButton() {
  const condition = useStore((state) => state.condition);
  const setCondition = useStore((state) => state.setCondition);
  console.log(condition);

  return (
    <RadioGroup
      value={condition}
      onChange={(e) => setCondition(e.target.value as "greater" | "less")}
      row
      sx={{ justifyContent: "center", mb: 2 }}
    >
      <FormControlLabel
        value="greater"
        control={
          <Radio
            sx={{ color: "#9C27B0", "&.Mui-checked": { color: "#9C27B0" } }}
          />
        }
        label="Under"
        labelPlacement="start"
      />
      <FormControlLabel
        value="less"
        control={
          <Radio
            sx={{ color: "#9C27B0", "&.Mui-checked": { color: "#9C27B0" } }}
          />
        }
        label="Over"
        labelPlacement="start"
      />
    </RadioGroup>
  );
}
