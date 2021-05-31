import { Box, Grid, makeStyles } from "@material-ui/core";
import { CustomTypography } from "../App";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    padding: "3rem",
    minHeight: "100vh",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
    backdropFilter: "blur(10px)",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#0133a8",
    backgroundSize: "cover",
    backgroundAttachment: "relative",
  },
  header: {
    padding: "0rem 1rem",
    backgroundColor: "#011b58",
    color: "#ff0c5c",
    fontSize: "3vw",
    textTransform: "uppercase",
    marginTop: "1rem",
    width: "auto",
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: "5.8vw",
    },
  },
}));
function Header(props) {
  const { headerSection } = props;
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      className={classes.root}
      ref={headerSection}
    >
      <CustomTypography className={classes.header}>
        Duis a massa
      </CustomTypography>
      <CustomTypography className={classes.header}>
        {" "}
        Sodales, mollis
      </CustomTypography>
      <CustomTypography className={classes.header}>
        {" "}
        ellit non, Gravida
      </CustomTypography>
      <CustomTypography className={classes.header}>libero.</CustomTypography>
    </Grid>
  );
}

export default Header;
