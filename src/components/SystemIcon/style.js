import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainContainer: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "42px",
  },

  icon: {
    width: "32px",
    height: "32px",
  },

  title: {
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
  },
});

export default useStyles;
