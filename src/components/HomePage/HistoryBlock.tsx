"use client";

import useStore from "@/store";
import {
  TableContainer,
  TableHead,
  Table,
  TableCell,
  TableBody,
  TableRow,
  Paper,
} from "@mui/material";

export default function HistoryBlock() {
  const history = useStore((state) => state.history);
  return (
    <TableContainer sx={{ mt: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Guess</TableCell>
            <TableCell>Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.time}</TableCell>
              <TableCell>{item.guess}</TableCell>
              <TableCell sx={{ color: item.success ? "green" : "red" }}>
                {item.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
