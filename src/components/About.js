import { Grid, makeStyles } from "@material-ui/core";
import { CustomTypography } from "../App";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    padding: "10rem 20vw",
    minHeight: "100vh",
    backgroundColor: "#011b58",
    alignItems: "stretch",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "6vw",
    },
  },
  main: {
    alignItems: "center",
    textAlign: "center",
    color: "#ff0c5c",
    display: "flex",
  },
  mainText: {
    lineHeight: 2,
    [theme.breakpoints.down("sm")]: {
      lineHeight: 1.1,
    },
    position: "relative",
    textAlign: "center",
    "&::after": {
      position: "absolute",
      left: "50%",
      bottom: "-50px",
      transform: "translateX(-50%)",
      width: "100px",
      borderBottom: "80vh solid magenta",
      content: "",
    },
  },
}));
function About(props) {
  const { aboutSection } = props;
  const classes = useStyles();
  return (
    <Grid container className={classes.root} ref={aboutSection}>
      <Grid item xs={12} className={classes.main}>
        <CustomTypography variant="h4" className={classes.mainText}>
          Mauris torto leo, volutpat ut lacus at, maximus eleifend door.{" "}
          <strong>orci varius natoque penatibus et magnis dis</strong>{" "}
          parturient montes, nascetur ridicuvlus mus
        </CustomTypography>
      </Grid>
      <Grid container direction="row">
        <Grid item xs={12} md={4}>
          {" "}
          <CustomTypography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            lacinia velit sit amet nisl sollicitudin, at hendrerit erat luctus.
            Integer viverra lorem at convallis porttitor. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Aliquam lacinia velit sit amet
            nisl sollicitudin, at hendrerit erat luctus. Integer viverra lorem
            at convallis porttitor. Lorem ipsum dolor sit amet,
          </CustomTypography>
        </Grid>
        <Grid item xs={12} md={4}>
          {" "}
          <CustomTypography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            lacinia velit sit amet nisl sollicitudin, at hendrerit erat luctus.
            Integer viverra lorem at convallis porttitor. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Aliquam lacinia velit sit amet
            nisl sollicitudin, at hendrerit erat luctus. Integer viverra lorem
            at convallis porttitor. Lorem ipsum dolor sit amet, consectetur
          </CustomTypography>
        </Grid>
        <Grid item xs={12} md={4}>
          {" "}
          <CustomTypography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            lacinia velit sit amet nisl sollicitudin, at hendrerit erat luctus.
            Integer viverra lorem at convallis porttitor. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </CustomTypography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;
