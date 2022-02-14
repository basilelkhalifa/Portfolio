import { makeStyles } from "@mui/styles";
import wallpaper from "../../assets/wallpaper.jpg";

const useStyles = makeStyles({
  mainContainer: {
    background: `url(${wallpaper})`,
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
    position: "relative",
  },

  taskbarContainer: {
    position: "absolute",
    left: 0,
    bottom: 0,
  },
});

export default useStyles;
