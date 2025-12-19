import { Container, Stack } from "@mui/material";
import HistoryBlock from "@/components/HomePage/HistoryBlock";
import PlayButton from "@/components/HomePage/PlayButton";
import ToogleButton from "@/components/HomePage/ToogleButton";
import NumberField from "@/components/HomePage/NumberField";
import AlertCustom from "@/components/HomePage/AlertCustom";
import RandomResult from "@/components/HomePage/RandomResult";

export default function Home() {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <AlertCustom />

      <Stack
        sx={{
          margin: "0 auto",
          padding: 2,
        }}
        spacing={3}
        width={320}
      >
        <RandomResult />
        <ToogleButton />
        <NumberField />

        <PlayButton />
      </Stack>
      <HistoryBlock />
    </Container>
  );
}
