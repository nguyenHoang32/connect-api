import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Popover,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import FaceIcon from "@material-ui/icons/Face";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  link: {
    color: '#fff',
    textDecoration: 'none'
  }
})
  

class APPBAR extends React.Component {
  state = {
    anchorEl: null,
  };
  onClick = (e) => {
    this.setState({
      anchorEl: e.currentTarget,
    });
  };
  onClose = () => {
    this.setState({
      anchorEl: null,
    });
  };
  render() {
    const open = Boolean(this.state.anchorEl);
    const classes = this.props.classes;
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography style={{ flex: 1 }} color="inherit">
            <Link to="/" className={classes.link}>ABC</Link>
          </Typography>
          <Button color="inherit">
            <FaceIcon onClick={this.onClick} />
          </Button>

          <Popover
            open={open}
            anchorEl={this.state.anchorEl}
            onClose={this.onClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <List>
              <ListItem button>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText>Your account</ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText>Log out</ListItemText>
              </ListItem>
            </List>
          </Popover>
        </Toolbar>
      </AppBar>
    );
  }
}
export default withStyles(styles)(APPBAR);
