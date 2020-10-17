import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Loginpage from "./components/Loginpage";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#7E3F8F",
      button: "#23F0C7",
    },
    secondary: {
      main: green[500],
    },
    background: {
      main: "#000000",
      dark: "#252422",
    },
  },
});

function App() {
  // Simulating Auth Check For Now
  const isLoggedIn = true;

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login" component={Loginpage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route
              path="/"
              render={() =>
                isLoggedIn ? (
                  <Redirect to="/dashboard" />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
