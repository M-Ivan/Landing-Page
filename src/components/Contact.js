import {
  Box,
  Button,
  CardMedia,
  Grid,
  IconButton,
  makeStyles,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import {
  CallOutlined,
  EmailOutlined,
  Facebook,
  HomeOutlined,
  Instagram,
  LinkedIn,
} from "@material-ui/icons";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useState } from "react";
import { CustomTypography } from "../App";

const CustomTextField = withStyles((theme) => ({
  root: {
    "& label": {
      color: "#011b58",
    },
    "& label.Mui-focused": { color: "#011b58" },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#ff0c5c",
    },
    "& .MuiFilledInput-root": {
      borderRadius: "0%",
      backgroundColor: "#c3c3c3",

      "& fieldset": {},
    },
  },
}))(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#011b58",
    minHeight: "100vh",
    backgroundColor: "#d8d8d8",
  },
  contact: {
    padding: "10rem 5rem 5rem 5rem",
    height: "100%",
    justifyContent: "flex-end",
  },
  col1: {
    display: "grid",
    alignItems: "stretch",
  },
  col2: {
    display: "grid",
    alignItems: "flex-end",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "2rem",
    },
  },
  social: {
    color: "#011b58",
    "&:hover": {
      color: "#ff0c5c",
    },
  },
  icon: {
    width: "30px",
    height: "30px",
  },
  map: {
    display: "flex",
    height: "100vh",
    position: "relative",
  },
  formControl: {
    display: "grid",
    alignItems: "center",
  },
  textField: {
    width: "45%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: "1rem",
    },
  },
  textArea: {
    [theme.breakpoints.down("md")]: {
      marginTop: "1rem",
    },
  },
  button: {
    marginTop: "1rem",
    borderRadius: "0%",
    height: "40px",
    width: "150px",
    right: "0%",
    backgroundColor: "#ff0c5c",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#d30046",
      color: "#fff",
    },
  },
}));
function Contact(props) {
  const { contactSection } = props;
  const classes = useStyles();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  return (
    <Grid container className={classes.root} ref={contactSection}>
      <Grid item xs={12} lg={7}>
        <Grid container className={classes.contact}>
          <Grid item xs={12} lg={6} className={classes.col1}>
            <CustomTypography variant="h4" component="h1" gutterBottom>
              <strong>
                {" "}
                Contact us via email, phone or come by into our office!
              </strong>
            </CustomTypography>
            <CustomTypography variant="body1" gutterBottom>
              <Grid container alignItems="center">
                <EmailOutlined style={{ marginRight: "1rem" }} />
                <a href="mailto:info@airhitect.com">info@airhitect.com</a>
              </Grid>
            </CustomTypography>
            <Typography variant="body1" gutterBottom>
              <Grid container alignItems="center">
                <CallOutlined style={{ marginRight: "1rem" }} />
                <Box>
                  {" "}
                  +12 34 567 890 <br /> +09 87 654 321
                </Box>
              </Grid>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Grid container alignItems="center">
                <HomeOutlined style={{ marginRight: "1rem" }} />
                1012 Budapest Márvány utca 16
              </Grid>
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6} className={classes.col2}>
            <Grid container direction="column">
              <Box>
                <IconButton href="#LinkedIn" className={classes.social}>
                  <LinkedIn className={classes.icon} />
                </IconButton>
                <IconButton href="#Facebook" className={classes.social}>
                  <Facebook className={classes.icon} />
                </IconButton>
                <IconButton href="#Instagram" className={classes.social}>
                  <Instagram className={classes.icon} />
                </IconButton>
                <IconButton href="#Twitter" className={classes.social}>
                  <TwitterIcon className={classes.icon} />
                </IconButton>
              </Box>
              <Typography variant="h6" component="h2" gutterBottom>
                <strong> We are hiring </strong>
              </Typography>
              <CustomTypography variant="body1" component="p" gutterBottom>
                We are looking for new talents to out tema! If you think you are
                the right person for AIRhitect send us an email with your CV and
                portfolio. Don't forget to write a little about yourself!{" "}
              </CustomTypography>
              <CustomTypography variant="body1" gutterBottom>
                <a href="mailto:job@airhitect.com">job@airhitect.com</a>
              </CustomTypography>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.formControl}>
            <CustomTextField
              label="Name"
              onChange={(e) => setName(e.target.value)}
              variant="filled"
              className={classes.textField}
            />{" "}
            <CustomTextField
              label="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              variant="filled"
              className={classes.textField}
            />{" "}
            <CustomTextField
              label="Subject"
              onChange={(e) => setSubject(e.target.value)}
              variant="filled"
              className={classes.textField}
            />{" "}
            <CustomTextField
              label="Message"
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              multiline
              variant="filled"
              className={classes.textArea}
            />
            <Grid container justify="flex-end">
              <Button
                // Tambien se puede hacer call a un submitHandler
                href={`mailto:atention@airhitect.com?subject=${subject}&body=Hi, my name is ${name}, <br />My e-mail is: ${email}, <br /> ${message}`}
                className={classes.button}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} lg={5} style={{ backgroundColor: "#000" }}>
        <CardMedia
          component="img"
          alt="Project 2"
          image="/assets/map1.jpg"
          title="Encuentranos!"
          className={classes.map}
        ></CardMedia>
      </Grid>
    </Grid>
  );
}

export default Contact;
