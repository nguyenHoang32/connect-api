import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles, List, ListItem, Typography } from '@material-ui/core';
import styles from './styles.js';


class Menu extends React.Component {
	
	render() {
		const { classes } = this.props;
		return (
			<List>
                  <ListItem>
                    <Typography>
                      <NavLink
                        to="/"
                        exact
                        className={classes.NavLink}
                        activeClassName={classes.active}
                      >
                        Home
                      </NavLink>
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography>
                      <NavLink
                        to="/products"
                        className={classes.NavLink}
                        activeClassName={classes.active}
                      >
						Quản lí sản phẩm
                      </NavLink>
                    </Typography>
                  </ListItem>
                </List>
		)
	}
}
export default withStyles(styles)(Menu);