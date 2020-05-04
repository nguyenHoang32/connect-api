import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListItem, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
const styles = {
  link: {
    textDecoration: "none",
    display: 'inline-flex',
    color: '#555',
    width: '100%',
    
  },
  listItem: {
    padding: "8px",
    '&:hover': {
      backgroundColor: '#e1e5f1'
    },
  },
  active: {
    backgroundColor: '#e1e5f1'
  }
};
class Menu extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <List disablePadding>
        <ListItem className={classes.listItem}>
          <NavLink to="/" exact className={classes.link}>
            <HomeIcon/>
            <Typography>Home</Typography>
          </NavLink>
        </ListItem>
        <ListItem className={classes.listItem}>
          <NavLink to="/products" className={classes.link}>
            <LoyaltyIcon />
            <Typography>Quản lí sản phẩm</Typography>
          </NavLink>
        </ListItem>
      </List>
    );
  }
}
export default withStyles(styles)(Menu);
