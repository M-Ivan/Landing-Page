import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    padding: "3rem",
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundColor: "#1b1b1b",
    backgroundSize: "cover",
    backgroundAttachment: "relative",
  },
}));
function Header(props) {
  const classes = useStyles();
  return <Grid container className={classes.root}></Grid>;
}

export default Header;
