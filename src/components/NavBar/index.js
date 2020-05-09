import React from "react";
import { Drawer, Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import { actToggleNavbar } from '../../action/index';
import Menu from "../Menu/Menu";
const drawerWidth = 240;
const styles = (theme) => ({
  drawerPaper: {
    width: drawerWidth,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
    },
  },
});
const drawer = <Menu />;
class NavBar extends React.Component {
  render() {
    const { classes, window, actToggleNavbar,isToggleNavbar } = this.props;
    const container =
      window !== undefined ? () => window().document.body : undefined;
    return (
      <nav className={classes.drawer}>
        <Hidden smUp>
          <Drawer
            container={container}
            variant="temporary"
            // anchor={theme.direction === "rtl" ? "right" : "left"}
            anchor={"left"}
            open={isToggleNavbar}
            onClose={actToggleNavbar}
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
        <Hidden xsDown>
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
    );
  }
}
const mapStateToProps = (state) => {
  return{
    isToggleNavbar: state.isToggleNavbar
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    actToggleNavbar: ()  => {
      dispatch(actToggleNavbar())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NavBar));
