import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    padding: "3rem",
    minHeight: "100vh",
    backgroundColor: "#fff",
  },
}));
function Contact(props) {
  const classes = useStyles();
  return <Grid container className={classes.root}></Grid>;
}

export default Contact;
