import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Hidden,
  IconButton,
  makeStyles,
  Modal,
  Slide,
  withWidth,
  Grow,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { CustomTypography } from "../App";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { SliderData } from "../data/SliderData";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
  card: {
    height: "100%",
    width: "100%",
    transition: "1s",
  },
  mainImg: {
    transition: "1s",
  },
  back: {
    boxShadow: theme.shadows[10],
    [theme.breakpoints.down("md")]: {
      height: "100%",
      marginLeft: "0rem",
      width: "80px",
      boxShadow: "0 0",
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    borderRadius: "0%",
    marginLeft: "1rem",
    position: "absolute",
    backgroundColor: "#fff",
    transition: "0.6s",
    width: "40px",
    height: "100px",
    top: "200%",
    left: "0%",
    color: "#011b58",
    zIndex: 10,
    [theme.breakpoints.up("lg")]: {
      top: "250%",

      "&:hover": {
        backgroundColor: "#011b58",
        color: "#fff",
      },
    },
  },
  forward: {
    boxShadow: theme.shadows[10],
    [theme.breakpoints.down("md")]: {
      height: "100%",
      top: "200%",
      marginRight: "0rem",
      width: "80px",
      boxShadow: "0 0",
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    borderRadius: "0%",
    marginRight: "1rem",
    position: "absolute",
    backgroundColor: "#fff",
    transition: "0.6s",
    width: "40px",
    height: "100px",
    right: "0%",
    color: "#011b58",
    zIndex: 10,
    [theme.breakpoints.up("lg")]: {
      top: "250%",

      "&:hover": {
        backgroundColor: "#011b58",
        color: "#fff",
      },
    },
  },
  backB: {
    boxShadow: theme.shadows[10],
    [theme.breakpoints.down("md")]: {
      height: "100%",
      marginLeft: "0rem",
      width: "80px",
      boxShadow: "0 0",
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    backgroundColor: "#fff",
    marginLeft: "1rem",
    position: "relative",
    transition: "0.6s",
    borderRadius: "0%",
    width: "40px",
    height: "100px",
    color: "#011b58",
    zIndex: 10,
    [theme.breakpoints.up("md")]: {
      "&:hover": {
        backgroundColor: "#011b58",
        color: "#fff",
      },
    },
  },
  forwardB: {
    boxShadow: theme.shadows[10],
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      marginRight: "0rem",
      width: "80px",
      boxShadow: "0 0",
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    backgroundColor: "#fff",
    marginRight: "1rem",
    position: "relative",
    transition: "0.6s",
    borderRadius: "0%",
    width: "40px",
    height: "100px",
    color: "#011b58",
    zIndex: 10,
    [theme.breakpoints.up("md")]: {
      "&:hover": {
        backgroundColor: "#011b58",
        color: "#fff",
      },
    },
  },
  title: {
    fontWeight: 600,
  },
  projectSubtitle: {
    fontWeight: 100,
  },
  modal: {
    borderRadius: "1rem",
    position: "absolute",
    width: "90%",
    height: "90%",
    backgroundColor: "#fff",
    boxShadow: theme.shadows[24],
    top: "5%",
    left: "5%",
    transform: "translate(-50, -50%)",
    [theme.breakpoints.down("sm")]: {
      overflow: "scroll",
      width: "100%",
      height: "100%",
      top: "0%",
      left: "0%",
    },
  },
  modalImg: {
    borderRadius: "1rem",
    height: "100%",
    minHeight: "50vh",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    padding: "3rem",
  },
  close: {
    position: "absolute",
    top: "5px",
    right: "1%",
    width: "50px",
    height: "50px",
    zIndex: 100,
  },
  icon: {
    color: "#000",
    width: "40px",
    height: "40px",
  },
}));
function Portfolio(props) {
  const { width, folioSection } = props;
  const classes = useStyles();

  const [showDetails, setShowDetails] = useState(false);
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(1);

  // checker de width
  const mobile =
    width === "xs" || width === "sm" || width === "md" ? true : false;

  const openCloseModal = () => {
    setShowDetails(!showDetails);
  };

  const handleForward = () => {
    setSelected(selected + 1);
    if (selected >= 3) {
      setSelected(0);
    }
  };
  const handleBack = () => {
    setSelected(selected - 1);
    if (selected <= 0) {
      setSelected(3);
    }
  };

  const body = (
    <Grow in={showDetails} {...{ timeout: 400 }}>
      <Grid container justify="center" className={classes.modal}>
        <IconButton className={classes.close} onClick={openCloseModal}>
          <Close className={classes.icon} />
        </IconButton>
        <Grid item xs={12} md={7}>
          <CardMedia
            component="div"
            alt="Project 2"
            image={SliderData[selected].image}
            title="Project 2"
            className={classes.modalImg}
          >
            <IconButton onClick={handleBack} className={classes.backB}>
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton onClick={handleForward} className={classes.forwardB}>
              <ArrowForwardIosIcon />
            </IconButton>
          </CardMedia>
        </Grid>
        <Grid item xs={12} md={5} className={classes.text}>
          <CustomTypography variant="h4" gutterBottom className={classes.title}>
            {SliderData[selected].name}
          </CustomTypography>
          <Divider />
          <CustomTypography variant="body1">
            {SliderData[selected].description}
          </CustomTypography>
        </Grid>
      </Grid>
    </Grow>
  );

  return (
    <Grid container className={classes.root} ref={folioSection}>
      {" "}
      <IconButton onClick={handleBack} className={classes.back}>
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton onClick={handleForward} className={classes.forward}>
        <ArrowForwardIosIcon />
      </IconButton>
      <Hidden mdDown>
        <Grid item lg={4}>
          <CardActionArea onClick={handleBack} style={{ height: "100%" }}>
            <CardMedia
              // Poner una imagen que respete las dimensiones siempre
              component="img"
              alt="Project 1"
              height="100%"
              image={SliderData[selected > 0 ? selected - 1 : 3].image}
              title="Project 1"
            />
          </CardActionArea>
        </Grid>
      </Hidden>{" "}
      <Grid item xs={12} lg={4}>
        <CardActionArea
          onClick={() => setShowDetails(true)}
          style={{ height: "100%" }}
        >
          <Card
            elevation={10}
            className={classes.card}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <CardMedia
              component="img"
              alt="Project 2"
              height={hover || mobile ? "80%" : "100%"}
              image={SliderData[selected].image}
              title="Project 2"
              className={classes.mainImg}
            />
            {hover || mobile ? (
              <Slide
                direction="left"
                in={hover || mobile}
                {...{ timeout: 600 }}
              >
                <CardContent className={classes.projectBox}>
                  <CustomTypography
                    variant="h4"
                    gutterBottom
                    className={classes.title}
                  >
                    {SliderData[selected].name}
                  </CustomTypography>
                  <h2 className={classes.projectSubtitle}>
                    {SliderData[selected].subtitle}
                  </h2>
                </CardContent>
              </Slide>
            ) : null}
            {
              // Alternativa, hacer un grid container fixed?
            }
          </Card>
        </CardActionArea>
      </Grid>
      <Hidden mdDown>
        <Grid item lg={4} className="project">
          <CardActionArea onClick={handleForward} style={{ height: "100%" }}>
            <CardMedia
              component="img"
              alt="Project 3"
              height="100%"
              image={SliderData[selected < 3 ? selected + 1 : 0].image}
              title="Project 3"
            />
          </CardActionArea>
        </Grid>
      </Hidden>{" "}
      <div>
        <Modal
          open={showDetails}
          onClose={openCloseModal}
          style={{ backgroundColor: "#011b5860" }}
          closeAfterTransition
        >
          {body}
        </Modal>
      </div>
    </Grid>
  );
}

export default withWidth()(Portfolio);
