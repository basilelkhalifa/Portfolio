import React from "react";
import { Box } from "@mui/material";
import SystemIcon from "./SystemIcon";

export default function SystemIconContainer({ title, icon, iconAlt }) {
  return (
    <Box>
      <SystemIcon title={title} icon={icon} iconAlt={iconAlt} />
    </Box>
  );
}
