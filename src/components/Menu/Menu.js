import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
};
class Menu extends React.Component {
  render() {
    return (
      <div>
        <List>
          <ListItem button component={NavLink} to="/">
            <ListItemIcon>
            <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </List>
        <List>
          <ListItem button component={NavLink} to="/products">
            <ListItemIcon>
              <LoyaltyIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
        </List>
      </div>
    );
  }
}
export default withStyles(styles)(Menu);
