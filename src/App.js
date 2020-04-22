import React from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import { Grid, AppBar, Tabs, Paper, withStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
const styles = {
  Paper: {
    padding: 20,
    marginTop: 20,
    minHeight: "300px",
  },
};
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
          <AppBar position="static">
            <Tabs></Tabs>
          </AppBar>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Paper className={classes.Paper}>
                <Menu />
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className={classes.Paper}>
                <Switch>{this.showRoute()}</Switch>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Router>
    );
  }
}
export default withStyles(styles)(App);
