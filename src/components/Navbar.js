import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import LanguageContext from "../contexts/index";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    marginRight: "10px",
    marginLeft: "10px"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between !important"
  },
  btn: {
    color: "white"
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <LanguageContext.Consumer>
      {({ updatedDictionary, updateLanguage }) => (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar className={classes.toolbar}>
              <div>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Button id={"_home"} className={classes.btn}>
                  <Typography variant="h6" className={classes.title}>
                    {updatedDictionary.words.home}
                  </Typography>
                </Button>
                <Button id={"_events"} className={classes.btn}>
                  <Typography variant="h6" className={classes.title}>
                    {updatedDictionary.words.events}
                  </Typography>
                </Button>
                <Button id={"_about"} className={classes.btn}>
                  <Typography variant="h6" className={classes.title}>
                    {updatedDictionary.words.aboutUs}
                  </Typography>
                </Button>
                <Button id={"_contact"} className={classes.btn}>
                  <Typography variant="h6" className={classes.title}>
                    {updatedDictionary.words.contactUs}
                  </Typography>
                </Button>
              </div>
              <div>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  className={classes.btn}
                  id={"_lan"}
                  color="inherit"
                >
                  {updatedDictionary.language}
                </Button>
              </div>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onClick={updateLanguage}
              >
                <MenuItem id={"_changeToSpanish"}>Español</MenuItem>
                <MenuItem id={"_changeToEnglish"}>English</MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>
        </div>
      )}
    </LanguageContext.Consumer>
  );
}
