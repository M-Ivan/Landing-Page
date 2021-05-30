import {
  CssBaseline,
  Grid,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";

export const CustomTypography = withStyles((theme) => ({
  root: {
    fontFamily: "Raleway",
  },
}))(Typography);

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#1b1b1b",
    backgroundAttachment: "relative",
    display: "flex",
    fontFamily: "Raleway",
    overflowX: "hidden",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <NavBar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <CssBaseline />
    </Grid>
  );
}

export default App;
