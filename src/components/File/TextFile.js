import React from "react";
import { Box } from "@mui/material";
import useStyles from "./style";
import SystemIconContainer from "../SystemIcon/SystemIconContainer";
import textFileIcon from "../../assets/icons/notepad.png";

export default function TextFile({ title }) {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <SystemIconContainer
        icon={textFileIcon}
        title={title}
        alt={title + " text file"}
      />
    </Box>
  );
}
