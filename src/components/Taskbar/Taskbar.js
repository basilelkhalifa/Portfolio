import React from "react";
import { Box } from "@mui/material";
import useStyles from "./style";

export default function Taskbar() {
  const classes = useStyles();
  return <Box className={classes.mainContainer}></Box>;
}
