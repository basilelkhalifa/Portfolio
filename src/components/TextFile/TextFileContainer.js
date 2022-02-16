import React from "react";
import { Box } from "@mui/material";
import TextFile from "./TextFile";

export default function TextFileContainer({ title }) {
  return (
    <Box>
      <TextFile title={title} />
    </Box>
  );
}
