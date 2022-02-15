import React from "react";
import { Box } from "@mui/material";
import useStyles from "./style";
import TaskbarContainer from "../Taskbar/TaskbarContainer";
import FolderContainer from "../Folder/FolderContainer";

export default function Desktop() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <FolderContainer title="Projects" />
      <Box className={classes.taskbarContainer}>
        <TaskbarContainer />
      </Box>
    </Box>
  );
}
