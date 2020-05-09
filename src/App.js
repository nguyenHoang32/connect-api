import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyAppBar from "./components/AppBar/MyAppBar";
import NavBar from "./components/NavBar";
import routes from "./routes";
const styles = (theme) => ({
  root: {
    display: "flex",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});
class App extends React.Component {
  showRoute = () => {
    let result = null;
    result = routes.map((route, index) => {
      return (
        <Route key={index} path={route.path} exact={route.exact}>
          {route.main}
        </Route>
      );
    });
    return result;
  };
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div className="App">
          <div className={classes.root}>
            <MyAppBar />
            <NavBar />
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Switch>{this.showRoute()}</Switch>
            </main>
          </div>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
