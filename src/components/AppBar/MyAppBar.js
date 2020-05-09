import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {IconButton, Toolbar, Typography, List, ListItem, ListItemIcon, ListItemText, Popover, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import FaceIcon from "@material-ui/icons/Face";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import { connect } from 'react-redux';
import { actToggleNavbar } from '../../action/index';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

function MyAppBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const onClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const onClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={props.actToggleNavbar}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ flex: 1 }}>
            <Typography
              color="inherit"
              component={Link}
              to="/"
              style={{ textDecoration: "none" }}
            >
              Home
            </Typography>
          </div>

          <Button color="inherit">
            <FaceIcon onClick={onClick} />
          </Button>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={onClose}
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
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return{
    actToggleNavbar: () => {
      dispatch(actToggleNavbar())
    }
  }
}
export default connect(null, mapDispatchToProps)(MyAppBar);
