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
import { useState } from "react";
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
    borderBottom: "2px solid #00000040",
    borderRadius: "0%",
  },
  main: {
    transition: "1s",
    display: "flex",
    justifyContent: "center",
  },
  img: {
    height: "100%",
    minHeight: "50vh",
    display: "flex",
    alignItems: "center",
    transition: "1s",
  },
  action: {
    height: "100%",
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
  },
  boxRight: {
    position: "relative",
    height: "100%",
    width: "20%",
    right: "0%",
  },
  boxLeft: {
    position: "relative",
    height: "100%",
    width: "20%",
    right: "0%",
  },
  back: {
    boxShadow: theme.shadows[10],
    [theme.breakpoints.down("md")]: {
      color: "#0038bb",
      top: "0%",
      height: "100%",
      marginLeft: "0rem",
      width: "100%",
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
    top: "50%",
    left: "0%",
    color: "#011b58",
    zIndex: 10,
    [theme.breakpoints.up("lg")]: {
      "&:hover": {
        backgroundColor: "#011b58",
        color: "#fff",
      },
    },
  },
  forward: {
    boxShadow: theme.shadows[10],
    [theme.breakpoints.down("md")]: {
      color: "#0038bb",
      height: "100%",
      top: "0%",
      marginRight: "0rem",
      width: "100%",
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
    top: "50%",
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      "&:hover": {
        backgroundColor: "#011b58",
        color: "#fff",
      },
    },
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
  close: {
    position: "absolute",
    top: "5px",
    right: "1%",
    width: "50px",
    height: "50px",
    zIndex: 100,
  },
  icon: {
    color: "#b8b8b8",
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
            className={classes.img}
          >
            <CardActionArea onClick={handleBack} className={classes.boxLeft}>
              <IconButton onClick={handleBack} className={classes.back}>
                <ArrowBackIosIcon />
              </IconButton>
            </CardActionArea>
            <CardActionArea onClick={handleForward}></CardActionArea>
            <CardActionArea
              onClick={handleForward}
              className={classes.boxRight}
            >
              <IconButton onClick={handleForward} className={classes.forward}>
                <ArrowForwardIosIcon />
              </IconButton>{" "}
            </CardActionArea>
          </CardMedia>
        </Grid>
        <Grid item xs={12} md={5} style={{ padding: "3rem" }}>
          <CustomTypography
            variant="h4"
            gutterBottom
            style={{ fontWeight: 600 }}
          >
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
      <Hidden mdDown>
        <Grid item lg={4}>
          <CardActionArea onClick={handleBack} style={{ height: "100%" }}>
            <CardMedia
              component="div"
              alt="Project 1"
              image={SliderData[selected > 0 ? selected - 1 : 3].image}
              title="Project 1"
              className={classes.img}
              style={{ transition: "1s" }}
            >
              {" "}
              <IconButton onClick={handleBack} className={classes.back}>
                <ArrowBackIosIcon />
              </IconButton>{" "}
            </CardMedia>
          </CardActionArea>
        </Grid>
      </Hidden>{" "}
      <Grid item xs={12} lg={4}>
        <Card
          elevation={10}
          className={classes.card}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <CardMedia
            component="div"
            alt="Project 2"
            image={SliderData[selected].image}
            title="Project 2"
            className={classes.main}
            style={{ height: hover || mobile ? "80%" : "100%" }}
          >
            {mobile ? (
              <CardActionArea className={classes.boxLeft}>
                <IconButton onClick={handleBack} className={classes.back}>
                  <ArrowBackIosIcon />
                </IconButton>
              </CardActionArea>
            ) : null}
            <CardActionArea
              onClick={() => setShowDetails(true)}
              className={classes.action}
            ></CardActionArea>
            {mobile ? (
              <CardActionArea className={classes.boxRight}>
                <IconButton onClick={handleForward} className={classes.forward}>
                  <ArrowForwardIosIcon />
                </IconButton>{" "}
              </CardActionArea>
            ) : null}
          </CardMedia>
          {hover || mobile ? (
            <Slide direction="left" in={hover || mobile} {...{ timeout: 600 }}>
              <CardContent>
                <CustomTypography
                  variant="h4"
                  gutterBottom
                  style={{ fontWeight: 600 }}
                >
                  {SliderData[selected].name}
                </CustomTypography>
                <CustomTypography variant="h6">
                  {SliderData[selected].subtitle}
                </CustomTypography>
              </CardContent>
            </Slide>
          ) : null}
        </Card>
      </Grid>
      <Hidden mdDown>
        <Grid item lg={4}>
          <CardActionArea onClick={handleForward} style={{ height: "100%" }}>
            <CardMedia
              component="div"
              alt="Project 3"
              height="100%"
              image={SliderData[selected < 3 ? selected + 1 : 0].image}
              title="Project 3"
              className={classes.img}
            >
              <IconButton onClick={handleForward} className={classes.forward}>
                <ArrowForwardIosIcon />
              </IconButton>{" "}
            </CardMedia>
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
