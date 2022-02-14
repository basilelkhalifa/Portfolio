import React from "react";
import { Box } from "@mui/material";
import useStyles from "./style";
import StartMenuContainer from "../StartMenu/StartMenuContainer";
import NotifPanelContainer from "../NotifPanel/NotifPanelContainer";

export default function Taskbar() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <StartMenuContainer />
      <NotifPanelContainer />
    </Box>
  );
}
