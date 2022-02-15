import React from "react";
import { Box } from "@mui/material";
import Folder from "./Folder";

export default function FolderContainer({ title }) {
  return (
    <Box>
      <Folder title={title} />
    </Box>
  );
}
