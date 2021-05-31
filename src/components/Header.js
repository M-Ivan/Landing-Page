import { Box, Grid, IconButton, makeStyles } from "@material-ui/core";
import { CustomTypography } from "../App";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonChecked";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    padding: 0,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0133a8",
  },
  slider: {
    width: "100%",
    height: "100vh",
    borderRadius: "10px",
    overflow: "hidden",
  },
  slides: {
    width: "500%",
    height: "100vh",
    display: "flex",
  },
  input: {
    display: "none",
  },

  slide: {
    width: "20%",
    transition: "2s",
  },
  img: {
    width: "100%",
    height: "100vh",
  },
  navManual: {
    position: "absolute",
    width: "100%",
    bottom: "10%",
    display: "flex",
    justifyContent: "center",
  },
  manualBtn: {
    border: "2px solid #0133a8",
    padding: "5px",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "1s",
    "&:not(:last-child)": {
      marginRight: "40px",
    },
    "&:hover": {
      backgroundColor: "#0133a8",
    },
  },
  //  autoNav: {
  //    position: "absolute",
  //    display: "flex",
  //    width: "800px",
  //    justifyContent: "center",
  //    marginTop: "460px",
  //    "& div": {
  //      border: "2px solid #0133a8",
  //      padding: "5px",
  //      borderRadius: "10px",
  //      transition: "1s",
  //    },
  //    "& div:not(:last-child)": {
  //      marginRight: "40px",
  //    },
  //  },

  header: {
    position: "absolute",
    left: "10%",
    padding: "0rem 1rem",
    color: "#ff0c5c",
    fontSize: "3vw",
    marginTop: "1rem",
    width: "auto",
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: "5.8vw",
    },
  },
  text1: {
    backgroundColor: "#011b58",
    position: "absolute",
    textAlign: "left",
    left: "10%",
    top: "25vh",
    fontSize: "3rem",
    width: "380px",
    padding: "0rem 1rem",
    [theme.breakpoints.down("sm")]: {
      top: "25vh",
      left: "5%",
      fontSize: "1.4rem",
      width: "190px",
    },
    color: "#ff0c5c",
    fontWeight: 600,
    textTransform: "uppercase",
  },
  text2: {
    backgroundColor: "#011b58",
    position: "absolute",
    textAlign: "left",
    left: "10%",
    top: "35vh",
    fontSize: "3rem",
    width: "460px",
    padding: "0rem 1rem",
    [theme.breakpoints.down("sm")]: {
      top: "35vh",
      left: "5%",
      fontSize: "1.4rem",
      width: "230px",
    },
    color: "#ff0c5c",
    fontWeight: 600,
    textTransform: "uppercase",
  },
  text3: {
    backgroundColor: "#011b58",
    position: "absolute",
    textAlign: "left",
    left: "10%",
    top: "45vh",
    fontSize: "3rem",
    width: "520px",
    padding: "0rem 1rem",
    [theme.breakpoints.down("sm")]: {
      left: "5%",
      fontSize: "1.4rem",
      width: "260px",
    },
    color: "#ff0c5c",
    fontWeight: 600,
    textTransform: "uppercase",
  },
  text4: {
    backgroundColor: "#011b58",
    position: "absolute",
    textAlign: "left",
    left: "10%",
    top: "55vh",
    fontSize: "3rem",
    width: "220px",
    padding: "0rem 1rem",
    [theme.breakpoints.down("sm")]: {
      top: "55vh",
      left: "5%",
      fontSize: "1.4rem",
      width: "120px",
    },
    color: "#ff0c5c",
    fontWeight: 600,
    textTransform: "uppercase",
  },
}));
function Header(props) {
  const { headerSection } = props;
  const classes = useStyles();

  // script para carousell
  var counter = 1;
  setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
      counter = 1;
    }
  }, 5000);

  return (
    <Grid container className={classes.root} ref={headerSection}>
      <Grid className={classes.slider}>
        <Grid className={classes.slides}>
          <input
            className={classes.input}
            type="radio"
            name="radio-btn"
            id="radio1"
          ></input>
          <input
            className={classes.input}
            type="radio"
            name="radio-btn"
            id="radio2"
          ></input>
          <input
            className={classes.input}
            type="radio"
            name="radio-btn"
            id="radio3"
          ></input>
          <input
            className={classes.input}
            type="radio"
            name="radio-btn"
            id="radio4"
          ></input>
          <Grid className={`${classes.slide} first`}>
            <img className={classes.img} src="/assets/bg4.jpg" alt="bg" />
          </Grid>
          <Grid className={classes.slide}>
            <img className={classes.img} src="/assets/bg3.jpg" alt="bg" />
          </Grid>
          <Grid className={classes.slide}>
            <img className={classes.img} src="/assets/bg2.jpg" alt="bg" />
          </Grid>
          <Grid container className={classes.slide}>
            <img className={classes.img} src="/assets/bg1.jpg" alt="bg" />
          </Grid>
          <Grid className="auto-nav">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </Grid>
        </Grid>
        <Grid className={classes.navManual}>
          <label htmlFor="radio1" className={classes.manualBtn}></label>
          <label htmlFor="radio2" className={classes.manualBtn}></label>
          <label htmlFor="radio3" className={classes.manualBtn}></label>
          <label htmlFor="radio4" className={classes.manualBtn}></label>
        </Grid>
      </Grid>
      <CustomTypography className={classes.text1}>
        Duis a massa
      </CustomTypography>
      <CustomTypography className={classes.text2}>
        {" "}
        Sodales, mollis
      </CustomTypography>
      <CustomTypography className={classes.text3}>
        {" "}
        ellit non, Gravida
      </CustomTypography>
      <CustomTypography className={classes.text4}>libero.</CustomTypography>
    </Grid>
  );
}

export default Header;
