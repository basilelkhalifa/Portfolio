import React from "react";
import { Box } from "@mui/material";
import DesktopContainer from "./components/Desktop/DesktopContainer";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: `"Tahoma", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <DesktopContainer />
      </Box>
    </ThemeProvider>
  );
}
