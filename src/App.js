import {
  CssBaseline,
  Grid,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
import { useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import OurTeam from "./components/Our Team";
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

  const header = useRef(null);
  const about = useRef(null);
  const folio = useRef(null);
  const team = useRef(null);
  const contact = useRef(null);

  const gotoHeader = () =>
    window.scrollTo({ top: header.current.offsetTop, behavior: "smooth" });
  const gotoAbout = () =>
    window.scrollTo({
      top: about.current.offsetTop,
      behavior: "smooth",
    });
  const gotoFolio = () =>
    window.scrollTo({
      top: folio.current.offsetTop,
      behavior: "smooth",
    });
  const gotoTeam = () =>
    window.scrollTo({
      top: team.current.offsetTop,
      behavior: "smooth",
    });
  const gotoContact = () =>
    window.scrollTo({
      top: contact.current.offsetTop,
      behavior: "smooth",
    });

  return (
    <Grid container className={classes.root}>
      <NavBar
        gotoHeader={gotoHeader}
        gotoAbout={gotoAbout}
        gotoFolio={gotoFolio}
        gotoTeam={gotoTeam}
        gotoContact={gotoContact}
        header={header}
        about={about}
        folio={folio}
        contact={contact}
        team={team}
      />
      <Header headerSection={header} />
      <About aboutSection={about} />
      <Portfolio folioSection={folio} />
      <OurTeam teamSection={team} />
      <Contact contactSection={contact} />
      <CssBaseline />
    </Grid>
  );
}

export default App;
