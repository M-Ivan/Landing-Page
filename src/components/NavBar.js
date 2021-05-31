import React, { useLayoutEffect, useState } from "react";
import {
  AppBar,
  Button,
  Grid,
  Hidden,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  withWidth,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  SwipeableDrawer,
  Slide,
  Grow,
} from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import RoomIcon from "@material-ui/icons/Room";
import {
  HomeOutlined,
  InfoOutlined,
  LocationOnOutlined,
  PeopleOutline,
  WorkOffOutlined,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
  },
  // Fix: ZINDEX?
  appbar: {
    position: "fixed",
    top: "0.5rem",
    backgroundColor: "#00000000",
    height: "60px",
    zIndex: 11,
  },
  toolbar: {
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: "0%",
    transition: "0.5s",
    color: "#011b58",
    textTransform: "lowercase",
    fontSize: "1rem",
    boxShadow: "0 0 5px #00000040",
    "&:hover": {
      backgroundColor: "#011b58",
      color: "#fff",
    },
  },
  brand: {
    justifyContent: "center",
    height: "40px",
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("xs")]: {
      width: "50%",
    },
  },
  logo: {
    width: "auto",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  nav: {
    backgroundColor: "#fff",
    color: "#011b58",
    fontWeight: 600,
    padding: "0.3rem 1rem",
    boxShadow: "0 0 10px #00000060",
    [theme.breakpoints.down("sm")]: {
      fontSize: "4vw",
    },
  },
  icon: {
    marginRight: "1rem",
  },
  side: {
    backgroundColor: "#fff",
    boxShadow: "0 0 5px #000",
    borderRadius: "0%",
  },
  drawer: {
    color: "#011b58",
  },
  list: {
    width: 250,
  },
}));

function NavBar(props) {
  const {
    gotoHeader,
    gotoAbout,
    gotoFolio,
    gotoTeam,
    gotoContact,
    width,
    header,
    about,
    folio,
    team,
    contact,
  } = props;
  const [menuOpen, setMenuOpen] = useState(null);
  const [sideOpen, setSideOpen] = useState(false);
  const classes = useStyles();
  const [current, setCurrent] = useState("Header");
  const mobile = width === "sm" || width === "xs" ? true : false;

  function updatePosition() {
    if (folio.current && about.current && header.current && contact.current) {
      if (about && window.pageYOffset < about.current.offsetTop) {
        setCurrent("Header");
      }
      if (
        window.pageYOffset <= folio.current.offsetTop &&
        window.pageYOffset > about.current.offsetTop * 0.9
      ) {
        setCurrent("About");
      }
      if (
        window.pageYOffset <= team.current.offsetTop &&
        window.pageYOffset > folio.current.offsetTop * 0.9
      ) {
        setCurrent("Projects");
      }
      if (
        window.pageYOffset <= contact.current.offsetTop &&
        window.pageYOffset > team.current.offsetTop * 0.9
      ) {
        setCurrent("Our Team");
      }
      if (contact && window.pageYOffset > contact.current.offsetTop * 0.9) {
        setCurrent("Find Us");
      }
    }
  }

  useLayoutEffect(() => {
    window.addEventListener("scroll", updatePosition);
    updatePosition();
  }, []);

  const handleClick = (e) => {
    setMenuOpen(e.currentTarget);
  };

  const handleClose = (e) => {
    setMenuOpen(null);
  };

  const handleGotoHeader = () => {
    setMenuOpen(null);
    gotoHeader();
  };
  const handleGotoAbout = () => {
    setMenuOpen(null);
    gotoAbout();
  };
  const handleGotoFolio = () => {
    setMenuOpen(null);
    gotoFolio();
  };
  const handleGotoTeam = () => {
    setMenuOpen(null);
    gotoTeam();
  };
  const handleGotoContact = () => {
    setMenuOpen(null);
    gotoContact();
  };

  const list = () => (
    <div onClick={handleGotoHeader} className={classes.list}>
      <Button className={classes.brand}>
        <img className={classes.logo} src="/assets/logo.png" alt="logo" />
      </Button>

      <Divider />
      <List>
        <ListItem button onClick={handleGotoHeader}>
          <ListItemIcon>
            <HomeOutlined />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={handleGotoAbout}>
          <ListItemIcon>
            <InfoOutlined />
          </ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button onClick={handleGotoFolio}>
          <ListItemIcon>
            <WorkOffOutlined />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button onClick={handleGotoTeam}>
          <ListItemIcon>
            <PeopleOutline />
          </ListItemIcon>
          <ListItemText primary="Our Team" />
        </ListItem>
        <ListItem button onClick={handleGotoContact}>
          <ListItemIcon>
            <LocationOnOutlined />
          </ListItemIcon>
          <ListItemText primary="Find Us" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Grid container className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.toolbar}>
          {mobile ? (
            <div>
              <Button
                className={classes.button}
                onClick={() => setSideOpen(!sideOpen)}
              >
                <SortIcon />
              </Button>
              <SwipeableDrawer
                className={classes.drawer}
                anchor="left"
                open={sideOpen}
                onOpen={() => setSideOpen(true)}
                onClose={() => setSideOpen(false)}
              >
                {list()}
              </SwipeableDrawer>
            </div>
          ) : (
            <div>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.button}
              >
                <SortIcon className={classes.icon} />
                menu
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={menuOpen}
                keepMounted
                value={current}
                open={Boolean(menuOpen)}
                onClose={handleClose}
              >
                <MenuItem value="Header" onClick={handleGotoHeader}>
                  Header
                </MenuItem>{" "}
                <MenuItem value="About" onClick={handleGotoAbout}>
                  About us
                </MenuItem>{" "}
                <MenuItem value="Projects" onClick={handleGotoFolio}>
                  Projects
                </MenuItem>{" "}
                <MenuItem value="Our Team" onClick={handleGotoTeam}>
                  Our Team
                </MenuItem>{" "}
                <MenuItem value="Contact" onClick={handleGotoContact}>
                  Find Us
                </MenuItem>
              </Menu>
            </div>
          )}
          <Button className={classes.brand} onClick={handleGotoHeader}>
            <img className={classes.logo} src="/assets/logo.png" alt="logo" />
          </Button>
          <Hidden mdDown>
            <Button onClick={gotoContact} className={classes.button}>
              {" "}
              <RoomIcon className={classes.icon} />
              Contacto
            </Button>
          </Hidden>
        </Toolbar>
        <Toolbar>
          <Typography variant="h4" className={classes.nav}>
            {current}
          </Typography>
        </Toolbar>
      </AppBar>{" "}
    </Grid>
  );
}
export default withWidth()(NavBar);
