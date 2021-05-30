import { CardMedia, Grid, makeStyles } from "@material-ui/core";
import { EmailOutlined } from "@material-ui/icons";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { CustomTypography } from "../App";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#001c56",
    minHeight: "100vh",
    backgroundColor: "#d8d8d8",
  },
  // TODO: Contact items
  contact: {
    padding: "3rem",
    textAlign: "left",
    fontWeight: 600,
  },
  map: {
    display: "flex",
    height: "100%",
  },
  location: {
    position: "relative",
    top: "43%",
    left: "41%",
    width: "100px",
    height: "100px",
    color: "#ff0c5c",
  },
}));
function Contact(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} lg={7}>
        <Grid container direction="column" className={classes.contact}>
          <CustomTypography variant="h4" component="h1">
            Contact us via email, phone or come by into our office!
          </CustomTypography>
          <CustomTypography variant="body1">
            <EmailOutlined />
            <a href="mailto:info@airhitect.com">info@airhitect.com</a>
          </CustomTypography>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={5} style={{ backgroundColor: "#000" }}>
        <CardMedia
          component="div"
          alt="Project 2"
          image="/assets/map.jpg"
          title="Encuentranos!"
          className={classes.map}
        >
          {" "}
          <LocationOnIcon className={classes.location} />
        </CardMedia>
      </Grid>
    </Grid>
  );
}

export default Contact;
