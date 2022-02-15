import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./style";

export default function SystemIcon({ title, icon, iconAlt }) {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.iconContainer}>
        <img className={classes.icon} src={icon} alt={iconAlt} />
      </Box>
      <Box className={classes.titleContainer}>
        <Typography className={classes.title} variant="caption" color="white">
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
