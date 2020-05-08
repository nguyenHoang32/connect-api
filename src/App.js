import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Menu from "./components/Menu/Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import APPBAR from "./components/AppBar/APPBAR";
import routes from "./routes";
const drawerWidth = 240;
const styles = (theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

const drawer = <Menu />;

  

class App extends React.Component{
  state ={
    mobileOpen: false
  }
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
  handleDrawerToggle = () => {
    this.setState({
      mobileOpen: !this.state.mobileOpen
    })
  }
  render(){
    const {window, classes, theme} = this.props;
    const container =
    window !== undefined ? () => window().document.body : undefined;
    return(
      <Router>
      <div className="App">
        <div style={{ display: 'flex'}}>
        <APPBAR handleDrawerToggle={this.handleDrawerToggle}/>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              // anchor={theme.direction === "rtl" ? "right" : "left"}
              anchor={"left"}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>{this.showRoute()}</Switch>
        </main>
        </div>
      </div>
    </Router>
    )
  }
}


export default withStyles(styles)(App);
