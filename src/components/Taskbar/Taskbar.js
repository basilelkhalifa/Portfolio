import React from "react";
import { Box } from "@mui/material";
import useStyles from "./style";
import StartMenuContainer from "../StartMenu/StartMenuContainer";

export default function Taskbar() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <StartMenuContainer />
    </Box>
  );
}
