import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./style";
import soundIcon from "../../assets/icons/audio-volume-muted.png";
import battery from "../../assets/icons/notification-power.png";

export default function NotifPanel() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.iconsContainer}>
        <img src={soundIcon} className={classes.icon} alt="Sound Icon" />
        <img src={battery} className={classes.icon} alt="Battery Icon" />
      </Box>
      <Box className={classes.timeContainer}>
        <Typography variant="caption" color="white">
          11:00 AM
        </Typography>
      </Box>
    </Box>
  );
}
