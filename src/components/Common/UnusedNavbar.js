import React from "react";
import {
  IconButton,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Grid,
} from "@material-ui/core";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  navBar: {},
  title: {},
  logo: {},
  btnBox: {
    height: "max-content",
  },
  btn: {
    "&:hover": {
      background: theme.palette.primary.button,
    },
    height: "100%",
    background: theme.palette.primary.button,
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" className={classes.navBar}>
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid container alignItems="center" item xs={10}>
              <IconButton
                edge="start"
                className={classes.logo}
                color="inherit"
                aria-label="menu"
              >
                <ListAltIcon fontSize="large" />
              </IconButton>
              <Typography variant="h4" className={classes.title}>
                Make Your Own Stylesheet
              </Typography>
            </Grid>
            <Grid item className={classes.btnBox}>
              <Button variant="contained" className={classes.btn}>
                <ExitToAppIcon style={{ marginRight: "10px" }} />
                Logout
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
