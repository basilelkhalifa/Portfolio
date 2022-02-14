import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./style";

export default function NotifPanel() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.iconsContainer}></Box>
      <Typography variant="caption" color="white">
        11:00 AM
      </Typography>
    </Box>
  );
}
