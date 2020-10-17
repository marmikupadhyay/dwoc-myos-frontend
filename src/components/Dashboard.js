import React from "react";
import Navbar from "./Common/Navbar";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    minHeight: "100vh",
    width: "100%",
    background: theme.palette.background.dark,
  },
}));

function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.mainBox}>
      <Navbar />
    </div>
  );
}

export default Dashboard;
