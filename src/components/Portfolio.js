import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Fade,
  Grid,
  Hidden,
  makeStyles,
  Modal,
} from "@material-ui/core";
import { useState } from "react";
import { CustomTypography } from "../App";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    minHeight: "100vh",
    backgroundColor: "#fff",
  },
  project: {
    backgroundColor: "#00000090",
  },
  detailsBtn: {
    border: "3px solid #ff0c5c",
    borderRadius: "0%",
    color: "#fff",
    transition: "0.5s",
    "&:hover": {
      backgroundColor: "#ff0c5c",
      color: "#fff",
    },
  },
  projectBox: {
    padding: "1rem",

    width: "auto",
    height: "auto",
  },
  projectSubtitle: {
    fontWeight: 100,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  paper: {
    border: "2px solid #000",
    backgroundColor: "#fff",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalDetails: {
    padding: "1rem",
  },
  mobileModalImg: {
    [theme.breakpoints.down("md")]: {
      height: "100%",
    },
  },
}));
function Portfolio(props) {
  const classes = useStyles();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={4} md={6} lg={4} className={classes.project}>
        <CardMedia
          // Poner una imagen que respete las dimensiones siempre
          component="img"
          alt="Project 1"
          height="100%"
          image="/assets/projects/project1.jpg"
          title="Project 1"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4} className={classes.project}>
        <CardActionArea onClick={() => setShowDetails(true)}>
          <CardMedia
            // Poner una imagen que respete las dimensiones siempre
            component="img"
            alt="Project 2"
            height="70%"
            image="/assets/projects/project2.jpg"
            title="Project 2"
          />
        </CardActionArea>
        <Box className={classes.projectBox}>
          <CustomTypography variant="h4" gutterBottom>
            Project 1
          </CustomTypography>
          <h2 className={classes.projectSubtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <Hidden mdDown>
            <Button
              className={classes.detailsBtn}
              onClick={() => setShowDetails(true)}
            >
              Más detalles
            </Button>
          </Hidden>{" "}
        </Box>
        {
          // Alternativa, hacer un grid container fixed?
        }
        <Modal
          open={showDetails}
          closeAfterTransition
          onClose={() => setShowDetails(false)}
          className={classes.modal}
        >
          <Fade in={showDetails}>
            <Grid container className={classes.paper}>
              <Grid item xs={6} lg={4}>
                <CardMedia
                  component="img"
                  alt="Project 2"
                  image="/assets/projects/project2.jpg"
                  title="Project 2"
                />{" "}
              </Grid>
              <Grid item xs={6} lg={4}>
                <CustomTypography variant="h4" gutterBottom>
                  Project 1
                </CustomTypography>
                <CustomTypography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  efficitur, nisi sed venenatis cursus, est arcu sollicitudin
                  purus, in bibendum enim urna eu augue. Nunc est ex, vestibulum
                  nec est nec, fringilla pulvinar orci. Suspendisse sodales ex
                  pellentesque neque vehicula vestibulum. Orci varius natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus. In id massa odio. Suspendisse potenti. Pellentesque nibh
                  velit, condimentum in justo sed, ornare accumsan nisl. Nam vel
                  dapibus sem.
                </CustomTypography>
              </Grid>
            </Grid>
          </Fade>
        </Modal>
      </Grid>
      <Grid item xs={12} md={6} lg={4} className={classes.project}>
        <CardMedia
          // Poner una imagen que respete las dimensiones siempre
          component="img"
          alt="Project 3"
          height="100%"
          image="/assets/projects/project3.jpg"
          title="Project 3"
        />
      </Grid>
    </Grid>
  );
}

export default Portfolio;
