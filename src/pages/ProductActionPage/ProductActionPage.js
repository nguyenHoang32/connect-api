import React from "react";
import { Link } from "react-router-dom";
import ProductForm from "../../components/ProductForm/ProductForm";
import { Button, withStyles, Container } from "@material-ui/core";
const styles = theme => ({
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: theme.spacing(2)
  },
  btn: {
    width: '100%'
  }
})
class ProductActionPage extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <Container className={classes.container}>
        <ProductForm history={this.props.history} match={this.props.match} />
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to="/products"
          className={classes.btn}
        >
          Trở lại
        </Button>
      </Container>
    );
  }
}
export default withStyles(styles)(ProductActionPage);
