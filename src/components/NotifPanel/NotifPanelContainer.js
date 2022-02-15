import { React, useState } from "react";
import { Box } from "@mui/material";
import NotifPanel from "./NotifPanel";

export default function NotifPanelContainer() {
  // Handles time displayed
  let time = new Date().toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
  const [currentTime, setcurrentTime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    });
    setcurrentTime(time);
  };
  setInterval(updateTime, 6000);

  return (
    <Box>
      <NotifPanel currentTime={currentTime} />
    </Box>
  );
}
