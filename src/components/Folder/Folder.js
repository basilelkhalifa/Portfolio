import React from "react";
import { Box } from "@mui/material";
import useStyles from "./style";
import SystemIconContainer from "../SystemIcon/SystemIconContainer";
import folderIcon from "../../assets/icons/folder.png";

export default function Folder({ title }) {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <SystemIconContainer
        icon={folderIcon}
        title={title}
        alt={title + " folder"}
      />
    </Box>
  );
}
