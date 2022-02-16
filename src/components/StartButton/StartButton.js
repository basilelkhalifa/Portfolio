import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./style";
import logo from "../../assets/windowsLogo.png";

export default function StartButton() {
  const classes = useStyles();
  return (
    <button className={classes.mainContainer}>
      <Box className={classes.logoTextContainer}>
        <img className={classes.logo} src={logo} alt="Windows Logo" />
        <Box className={classes.textContainer}>
          <Typography color="white" fontWeight={600}>
            start
          </Typography>
        </Box>
      </Box>
    </button>
  );
}
