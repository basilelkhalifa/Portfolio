import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainContainer: {
    background: "linear-gradient(180deg, #00C838 0%, #008425 32.29%)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
    width: "7.5rem",
    height: "2.1rem",
    display: "flex",
    alignItems: "center",
    borderBottomRightRadius: "290px",
    borderTopRightRadius: "290px",
    border: "none",
    cursor: "pointer",
  },

  logo: {
    height: "1.5rem",
    width: "1.5rem",
  },

  logoTextContainer: {
    display: "flex",
    alignItems: "center",
    padding: "0 0.5rem",
  },

  textContainer: { padding: "0 0.3rem" },
});

export default useStyles;
