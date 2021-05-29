import React, { useState } from "react";
import {
  AppBar,
  Button,
  Grid,
  Hidden,
  Icon,
  IconButton,
  makeStyles,
  Slide,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import RoomIcon from "@material-ui/icons/Room";

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
    zIndex: 10,
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
  banner: {
    color: "#ff0c5c",
    fontWeight: 600,
  },
  nav: {
    backgroundColor: "#fff",
    color: "#011b58",
    fontWeight: 600,
    padding: "0.3rem 1rem",
    boxShadow: "0 0 10px #00000060",
  },
  icon: {
    marginRight: "1rem",
  },
  menu: {
    //  flexGrow: 1,
  },
}));

const options = ["Menu", "Home", "About", "Projects", "Contact"];

export default function NavBar(props) {
  const [menuOpen, setmMenuOpen] = useState(null);
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (e) => {
    setmMenuOpen(e.currentTarget);
  };

  const handleClose = (e) => {
    setmMenuOpen(null);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setmMenuOpen(null);
  };

  return (
    <Grid container className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.button}
          >
            {console.log("anchor", menuOpen)}
            <SortIcon className={classes.icon} />
            menu
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={menuOpen}
            keepMounted
            open={Boolean(menuOpen)}
            onClose={handleClose}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                disabled={index === 0}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
          <Typography className={classes.banner}>AIRhitect</Typography>
          <Button className={classes.button}>
            {" "}
            <RoomIcon className={classes.icon} />
            Contacto
          </Button>
        </Toolbar>
        <Toolbar>
          <Typography variant="h4" className={classes.nav}>
            {options[selectedIndex]}
          </Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
