import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainContainer: {
    background: "linear-gradient(180deg, #46B1FF 0%, #0071C4 100%)",
    borderRadius: "1px",
    height: "2rem",
    display: "flex",
    alignItems: "center",
  },

  icon: {
    height: "24px",
    width: "24px",
  },

  iconsContainer: {
    display: "flex",
    alignItems: "center",
    padding: "0 0 0 0.5rem",
  },

  timeContainer: {
    padding: "0 0.5rem",
  },
});

export default useStyles;
